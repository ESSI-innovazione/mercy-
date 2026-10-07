import { cookies } from "next/headers";

// Shared-password gate, checked inside pages and route handlers (no middleware).

export const AUTH_COOKIE = "mercy_auth";

export async function tokenFor(password: string): Promise<string> {
  const data = new TextEncoder().encode(`mercy:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function gateEnabled(): boolean {
  return Boolean(process.env.APP_PASSWORD);
}

/** True when the gate is off, or the request carries the right cookie. */
export async function isAuthorized(): Promise<boolean> {
  if (!gateEnabled()) return true;
  const store = await cookies();
  const got = store.get(AUTH_COOKIE)?.value;
  if (!got) return false;
  return got === (await tokenFor(process.env.APP_PASSWORD as string));
}
