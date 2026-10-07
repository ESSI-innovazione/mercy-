// Shared-password gate. Works in both the Edge (middleware) and Node runtimes.

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
