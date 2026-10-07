"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setError(data.error ?? "Password errata.");
      }
    } catch {
      setError("Errore di rete.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm bg-surface border border-border rounded-2xl p-6 space-y-5"
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent text-white font-bold">
            M
          </span>
          <div>
            <div className="font-semibold text-white">Mercy</div>
            <div className="text-xs text-muted-foreground">Accesso riservato ai colleghi</div>
          </div>
        </div>
        <label className="block space-y-1.5">
          <span className="text-xs text-muted-foreground">Password</span>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-primary border border-border px-3 py-2 text-sm text-white focus:outline-none focus:border-accent"
          />
        </label>
        {error && <p className="text-xs text-accent">{error}</p>}
        <button
          type="submit"
          disabled={busy || !password}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-600 disabled:opacity-50 text-white text-sm font-medium py-2 transition-colors"
        >
          {busy && <LoaderCircle className="w-4 h-4 animate-spin" />}
          Entra
        </button>
      </form>
    </main>
  );
}
