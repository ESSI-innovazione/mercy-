import { NextRequest } from "next/server";
import { answer } from "@/lib/search";
import { getIndex } from "@/lib/search";
import { isAuthorized } from "@/lib/auth";

export const runtime = "nodejs";

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function lastUserMessage(input: unknown): string | null {
  if (!Array.isArray(input)) return null;
  for (let i = input.length - 1; i >= 0; i--) {
    const item = input[i] as Partial<ChatTurn> | null;
    if (item && item.role === "user" && typeof item.content === "string" && item.content.trim()) {
      return item.content.trim().slice(0, 2000);
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  if (!(await isAuthorized())) {
    return new Response("Non autorizzato.", { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Richiesta non valida.", { status: 400 });
  }
  const question = lastUserMessage((body as { messages?: unknown })?.messages);
  if (!question) {
    return new Response("Nessun messaggio.", { status: 400 });
  }

  const { meta } = getIndex();
  return new Response(answer(question), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Mercy-Knowledge-Seq": String(meta.seq),
    },
  });
}
