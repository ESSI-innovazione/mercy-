"use client";

import { useEffect, useRef, useState } from "react";
import { Inter, Space_Mono } from "next/font/google";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// "Mercury" liquid login (gooey blobs + underline inputs), recoloured to the
// Mercy palette: navy #0F172B background, orange #FC5A00 accent.

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "800"] });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

// Fixed layout so server and client render the same markup (no hydration mismatch).
const BLOBS = [
  { size: 320, left: 12, top: 18, delay: -3, duration: 24 },
  { size: 240, left: 70, top: 12, delay: -9, duration: 19 },
  { size: 280, left: 58, top: 62, delay: -14, duration: 27 },
  { size: 200, left: 22, top: 70, delay: -6, duration: 21 },
  { size: 180, left: 82, top: 48, delay: -17, duration: 16 },
  { size: 260, left: 40, top: 36, delay: -11, duration: 23 },
];

export interface MercuryLoginProps {
  onSubmit: (email: string, password: string) => void | Promise<void>;
  error?: string | null;
  busy?: boolean;
  domain: string;
  /** False in mock-up mode (no APP_PASSWORD yet): only the email is asked. */
  requirePassword?: boolean;
}

export function MercuryLogin({
  onSubmit,
  error,
  busy = false,
  domain,
  requirePassword = true,
}: MercuryLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobRefs.current.forEach((blob, index) => {
        if (!blob) return;
        const speed = (index + 1) * 20;
        // Margins for parallax so the CSS transform animation is left alone.
        blob.style.marginLeft = `${x * speed}px`;
        blob.style.marginTop = `${y * speed}px`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const canSubmit =
    !busy && email.trim().length > 0 && (!requirePassword || password.length > 0);

  return (
    <div
      className={cn(
        inter.className,
        "mercury-login relative flex h-screen w-screen items-center justify-center overflow-hidden bg-primary text-foreground"
      )}
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="mercy-gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Liquid background */}
      <div className="mercury-stage pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {BLOBS.map((b, index) => (
          <div
            key={index}
            ref={(el) => {
              blobRefs.current[index] = el;
            }}
            className="mercury-blob absolute rounded-full"
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              left: `${b.left}%`,
              top: `${b.top}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full max-w-[440px] p-10">
        <header className="mb-14 text-left">
          <span
            className={cn(
              mono.className,
              "mb-2 block text-[10px] uppercase tracking-[4px] text-muted-foreground"
            )}
          >
            Timevision · Assistente CRM Mercury
          </span>
          <h1 className="-ml-1 text-5xl font-extrabold leading-[0.9] tracking-[-2px] text-white">
            MERCY
          </h1>
          <p className="mt-4 text-sm font-light text-muted-foreground">
            Accesso riservato ai colleghi con indirizzo{" "}
            <span className="text-accent">@{domain}</span>.
          </p>
        </header>

        <form
          autoComplete="on"
          onSubmit={(e) => {
            e.preventDefault();
            if (canSubmit) void onSubmit(email, password);
          }}
        >
          <div className="mercury-field relative mb-8">
            <label
              htmlFor="mercy-email"
              className={cn(mono.className, "mb-3 block text-[11px] uppercase text-muted-foreground")}
            >
              Email aziendale
            </label>
            <input
              id="mercy-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="username"
              autoFocus
              required
              placeholder={`nome.cognome@${domain}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border-0 border-b border-border bg-transparent py-3 text-lg text-white outline-none placeholder:text-primary-300/60"
            />
            <div className="mercury-glow absolute bottom-0 left-0 h-[2px] w-0 bg-accent peer-focus:w-full" />
          </div>

          <div className={cn("mercury-field relative mb-8", !requirePassword && "hidden")}>
            <label
              htmlFor="mercy-password"
              className={cn(mono.className, "mb-3 block text-[11px] uppercase text-muted-foreground")}
            >
              Password
            </label>
            <input
              id="mercy-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required={requirePassword}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border-0 border-b border-border bg-transparent py-3 text-lg text-white outline-none placeholder:text-primary-300/60"
            />
            <div className="mercury-glow absolute bottom-0 left-0 h-[2px] w-0 bg-accent peer-focus:w-full" />
          </div>

          <p
            role="alert"
            aria-live="polite"
            className={cn(
              mono.className,
              "min-h-[1.25rem] text-[11px] text-accent-300",
              !error && "invisible"
            )}
          >
            {error ?? " "}
          </p>

          <div className="mercury-submit relative mt-8">
            <div className="mercury-drop absolute left-1/2 top-1/2 z-[1] h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-[50px] bg-accent-300" />
            <button
              type="submit"
              disabled={!canSubmit}
              className="mercury-btn relative z-[2] inline-flex w-full items-center justify-center gap-2 border-0 bg-accent px-10 py-5 text-sm font-extrabold uppercase tracking-[2px] text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {busy && <LoaderCircle className="h-4 w-4 animate-spin" />}
              {busy ? "Accesso in corso" : "Entra"}
            </button>
          </div>
        </form>

        <footer
          className={cn(
            mono.className,
            "mt-10 flex justify-between text-[10px] uppercase tracking-[1px] text-muted-foreground"
          )}
        >
          <span>Solo account @{domain}</span>
          <span>{requirePassword ? "Mappa del CRM · Innovazione" : "Anteprima · senza password"}</span>
        </footer>
      </main>
    </div>
  );
}

export default MercuryLogin;
