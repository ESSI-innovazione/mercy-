import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { loadKnowledge } from "@/lib/knowledge";
import { buildSystemPrompt } from "@/lib/prompt";

export const runtime = "nodejs";
export const maxDuration = 120;

const MODEL = process.env.MERCY_MODEL ?? "claude-opus-5-5";
const MAX_TURNS = 30;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function sanitizeTurns(input: unknown): ChatTurn[] {
  if (!Array.isArray(input)) return [];
  const turns: ChatTurn[] = [];
  for (const item of input) {
    if (
      item &&
      typeof item === "object" &&
      (item.role === "user" || item.role === "assistant") &&
      typeof item.content === "string" &&
      item.content.trim()
    ) {
      turns.push({ role: item.role, content: item.content.slice(0, 20_000) });
    }
  }
  // Keep the tail of long conversations; the first turn must be a user turn.
  const tail = turns.slice(-MAX_TURNS);
  while (tail.length && tail[0].role !== "user") tail.shift();
  return tail;
}

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response("ANTHROPIC_API_KEY non configurata sul server.", { status: 500 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Richiesta non valida.", { status: 400 });
  }
  const turns = sanitizeTurns((body as { messages?: unknown })?.messages);
  if (!turns.length) {
    return new Response("Nessun messaggio.", { status: 400 });
  }

  const { meta, corpus } = loadKnowledge();
  const client = new Anthropic();

  const messages: Anthropic.MessageParam[] = turns.map((t) => ({
    role: t.role,
    content: t.content,
  }));

  const stream = client.beta.messages.stream({
    model: MODEL,
    max_tokens: 16000,
    betas: ["server-side-fallback-2026-07-01"],
    // Server-side fallback: if a safety classifier declines, Anthropic re-runs
    // the request on its recommended substitute model inside the same call.
    fallbacks: "default",
    thinking: { type: "adaptive" },
    output_config: { effort: "medium" },
    system: [
      {
        type: "text",
        text: buildSystemPrompt(meta),
      },
      {
        type: "text",
        text: `<mappa_del_crm versione="${meta.documentVersion}" data="${meta.documentDate}">\n${corpus}\n</mappa_del_crm>`,
        // The corpus is identical on every request: cache it.
        cache_control: { type: "ephemeral" },
      },
    ],
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(
            encoder.encode("\n\n_Non posso rispondere a questa richiesta._")
          );
        } else if (final.stop_reason === "max_tokens") {
          controller.enqueue(encoder.encode("\n\n_[risposta troncata]_"));
        }
      } catch (err) {
        const msg =
          err instanceof Anthropic.AuthenticationError
            ? "Chiave API non valida."
            : err instanceof Anthropic.RateLimitError
              ? "Troppe richieste: riprova tra qualche secondo."
              : err instanceof Anthropic.APIError
                ? `Errore API (${err.status}).`
                : "Errore imprevisto.";
        controller.enqueue(encoder.encode(`\n\n_${msg}_`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Mercy-Knowledge-Seq": String(meta.seq),
    },
  });
}
