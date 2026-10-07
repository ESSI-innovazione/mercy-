"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { renderMarkdown } from "@/lib/markdown";
import {
  ArrowUpIcon,
  CalendarClock,
  FileText,
  GitMerge,
  LoaderCircle,
  Mail,
  RotateCcw,
  Shield,
  Users,
  Waypoints,
} from "lucide-react";

interface UseAutoResizeTextareaProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: UseAutoResizeTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Number.POSITIVE_INFINITY)
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight]
  );

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) textarea.style.height = `${minHeight}px`;
  }, [minHeight]);

  useEffect(() => {
    const handleResize = () => adjustHeight();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [adjustHeight]);

  return { textareaRef, adjustHeight };
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Status {
  knowledge: { seq: number; documentVersion: string; documentDate: string; fetchedAt: string };
  source: { seq?: number } | null;
  stale: boolean;
  checked: boolean;
}

const SUGGESTIONS: { icon: React.ReactNode; label: string; prompt: string }[] = [
  {
    icon: <CalendarClock className="w-4 h-4" />,
    label: "Passaggio netto del 19/10",
    prompt: "Cosa cambia per i venditori con il passaggio netto del 19/10?",
  },
  {
    icon: <Waypoints className="w-4 h-4" />,
    label: "Fasi del partner",
    prompt: "Quali sono le fasi di un partner e cosa fa avanzare ciascuna?",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Barra di Gmail",
    prompt: "Come funziona la barra di Mercury in Gmail e cosa registra?",
  },
  {
    icon: <GitMerge className="w-4 h-4" />,
    label: "Unire i doppioni",
    prompt: "Come si uniscono due contatti doppi e chi può farlo?",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    label: "Consensi",
    prompt: "Come vengono gestiti i consensi marketing, profilazione e cessione a terzi?",
  },
  {
    icon: <Users className="w-4 h-4" />,
    label: "Record di altri Account",
    prompt: "Cosa vedo di un contatto o di una trattativa di un altro Account?",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    label: "Form dei siti",
    prompt: "Cosa succede quando qualcuno compila un form del sito?",
  },
];

let idCounter = 0;
const nextId = () => `m${Date.now()}-${idCounter++}`;

export function VercelV0Chat() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  useEffect(() => {
    fetch("/api/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((s: Status | null) => s && setStatus(s))
      .catch(() => {});
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;

      const userMsg: ChatMessage = { id: nextId(), role: "user", content: trimmed };
      const assistantMsg: ChatMessage = { id: nextId(), role: "assistant", content: "" };
      const history = [...messages, userMsg];
      setMessages([...history, assistantMsg]);
      setValue("");
      adjustHeight(true);
      setBusy(true);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: history.map(({ role, content }) => ({ role, content })),
          }),
          signal: controller.signal,
        });

        if (!res.ok || !res.body) {
          const err = await res.text().catch(() => "");
          throw new Error(err || `Errore ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let acc = "";
        for (;;) {
          const { done, value: chunk } = await reader.read();
          if (done) break;
          acc += decoder.decode(chunk, { stream: true });
          const snapshot = acc;
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMsg.id ? { ...m, content: snapshot } : m))
          );
        }
      } catch (err) {
        const msg =
          err instanceof DOMException && err.name === "AbortError"
            ? "_Risposta interrotta._"
            : `_${err instanceof Error ? err.message : "Errore imprevisto."}_`;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMsg.id ? { ...m, content: (m.content + "\n\n" + msg).trim() } : m
          )
        );
      } finally {
        setBusy(false);
        abortRef.current = null;
      }
    },
    [messages, busy, adjustHeight]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(value);
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setValue("");
    adjustHeight(true);
  };

  const empty = messages.length === 0;

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-3 border-b border-border bg-primary/90 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent text-white font-bold">
            M
          </span>
          <div className="leading-tight">
            <div className="font-semibold text-white">Mercy</div>
            <div className="text-[11px] text-muted-foreground">
              Assistente per il CRM di Mercury
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {status && (
            <span
              title={`Mappa del CRM v${status.knowledge.documentVersion} del ${status.knowledge.documentDate}`}
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full border",
                status.stale
                  ? "border-accent/60 text-accent"
                  : "border-border text-muted-foreground"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  status.stale ? "bg-accent" : "bg-emerald-400"
                )}
              />
              Mappa v{status.knowledge.documentVersion}
              {status.stale && status.source?.seq ? ` · fonte aggiornata (#${status.source.seq})` : ""}
            </span>
          )}
          {!empty && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white px-2 py-1.5 rounded-lg hover:bg-surface transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Nuova chat
            </button>
          )}
        </div>
      </header>

      {/* Body */}
      <main
        className={cn(
          "flex-1 flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6",
          empty ? "justify-center py-10 space-y-8" : "py-6"
        )}
      >
        {empty ? (
          <>
            <div className="text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-white">
                Cosa vuoi sapere del CRM?
              </h1>
              <p className="text-sm text-muted-foreground">
                Rispondo in base alla Mappa del CRM di Mercury: oggetti, regole, fasi, Gmail e
                Calendar, form, placement e JobSignal.
              </p>
            </div>
            <Composer
              value={value}
              setValue={setValue}
              textareaRef={textareaRef}
              adjustHeight={adjustHeight}
              onKeyDown={handleKeyDown}
              onSend={() => void send(value)}
              busy={busy}
            />
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {SUGGESTIONS.map((s) => (
                <ActionButton
                  key={s.label}
                  icon={s.icon}
                  label={s.label}
                  onClick={() => void send(s.prompt)}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="w-full flex-1 flex flex-col">
            <div className="flex-1 space-y-4 pb-40">
              {messages.map((m) => (
                <Bubble key={m.id} message={m} streaming={busy && m.role === "assistant" && !m.content} />
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary to-transparent pt-6 pb-4 px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <Composer
                  value={value}
                  setValue={setValue}
                  textareaRef={textareaRef}
                  adjustHeight={adjustHeight}
                  onKeyDown={handleKeyDown}
                  onSend={() => void send(value)}
                  busy={busy}
                  onStop={() => abortRef.current?.abort()}
                />
                <p className="text-center text-[11px] text-muted-foreground mt-2">
                  Mercy risponde solo in base alla Mappa del CRM. Verifica le decisioni recenti con Espedito.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

interface ComposerProps {
  value: string;
  setValue: (v: string) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  adjustHeight: (reset?: boolean) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
  busy: boolean;
  onStop?: () => void;
}

function Composer({
  value,
  setValue,
  textareaRef,
  adjustHeight,
  onKeyDown,
  onSend,
  busy,
  onStop,
}: ComposerProps) {
  return (
    <div className="w-full">
      <div className="relative bg-surface rounded-xl border border-border focus-within:border-accent/70 transition-colors">
        <div className="overflow-y-auto">
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={onKeyDown}
            placeholder="Fai una domanda a Mercy…"
            className={cn(
              "w-full px-4 py-3",
              "resize-none",
              "bg-transparent",
              "border-none",
              "text-white text-sm",
              "focus:outline-none",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-muted-foreground placeholder:text-sm",
              "min-h-[60px]"
            )}
            style={{ overflow: "hidden" }}
          />
        </div>

        <div className="flex items-center justify-between p-3">
          <div className="text-[11px] text-muted-foreground pl-1">
            Invio per inviare · Maiusc+Invio per andare a capo
          </div>
          <div className="flex items-center gap-2">
            {busy && onStop && (
              <button
                type="button"
                onClick={onStop}
                className="px-2 py-1 rounded-lg text-xs text-muted-foreground border border-dashed border-border hover:border-accent/60 hover:text-white transition-colors"
              >
                Ferma
              </button>
            )}
            <button
              type="button"
              onClick={onSend}
              disabled={busy || !value.trim()}
              className={cn(
                "px-1.5 py-1.5 rounded-lg text-sm transition-colors border flex items-center justify-between gap-1",
                value.trim() && !busy
                  ? "bg-accent border-accent text-white hover:bg-accent-600"
                  : "border-border text-muted-foreground"
              )}
            >
              {busy ? (
                <LoaderCircle className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowUpIcon className="w-4 h-4" />
              )}
              <span className="sr-only">Invia</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ message, streaming }: { message: ChatMessage; streaming: boolean }) {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <span className="mr-2 mt-1 inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-md bg-accent text-white text-xs font-bold">
          M
        </span>
      )}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-accent text-white rounded-br-md"
            : "bg-surface border border-border text-foreground rounded-bl-md"
        )}
      >
        {isUser ? (
          <span className="whitespace-pre-wrap">{message.content}</span>
        ) : streaming ? (
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <LoaderCircle className="w-3.5 h-3.5 animate-spin" /> Sto leggendo la Mappa…
          </span>
        ) : (
          <div
            className="mercy-md"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(message.content) }}
          />
        )}
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-surface hover:bg-surface-2 rounded-full border border-border text-muted-foreground hover:text-white hover:border-accent/60 transition-colors"
    >
      <span className="text-accent">{icon}</span>
      <span className="text-xs">{label}</span>
    </button>
  );
}
