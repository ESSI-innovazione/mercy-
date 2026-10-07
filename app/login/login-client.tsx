"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MercuryLogin } from "@/components/ui/mercury-login";

export function LoginClient({
  domain,
  requirePassword,
}: {
  domain: string;
  requirePassword: boolean;
}) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(email: string, password: string) {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        router.replace("/");
        router.refresh();
      } else {
        setError(data.error ?? "Accesso negato.");
      }
    } catch {
      setError("Errore di rete.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <MercuryLogin
      onSubmit={submit}
      error={error}
      busy={busy}
      domain={domain}
      requirePassword={requirePassword}
    />
  );
}
