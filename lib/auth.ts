import { cookies } from "next/headers";

// Gate for colleagues: a @timevision.it address plus the shared password.
// Checked inside pages and route handlers (no middleware).

export const AUTH_COOKIE = "mercy_auth";
export const ALLOWED_DOMAIN = "timevision.it";

export function normalizeEmail(raw: string): string {
  return raw.trim().toLowerCase();
}

/** True for a well-formed address on the company domain. */
export function isCompanyEmail(email: string): boolean {
  const e = normalizeEmail(email);
  const at = e.lastIndexOf("@");
  if (at <= 0) return false;
  const local = e.slice(0, at);
  const domain = e.slice(at + 1);
  if (domain !== ALLOWED_DOMAIN) return false;
  return /^[a-z0-9._%+-]+$/.test(local);
}

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** Cookie value: "<email>.<sha256(mercy:<email>:<password>)>". */
export async function tokenFor(email: string, password: string): Promise<string> {
  const e = normalizeEmail(email);
  return `${e}.${await sha256Hex(`mercy:${e}:${password}`)}`;
}

/** The gate is off only in local development without APP_PASSWORD; never in production. */
export function gateEnabled(): boolean {
  return Boolean(process.env.APP_PASSWORD) || process.env.NODE_ENV === "production";
}

/** True when the deployment is missing APP_PASSWORD and therefore nobody can sign in. */
export function gateMisconfigured(): boolean {
  return gateEnabled() && !process.env.APP_PASSWORD;
}

/** Email of the signed-in colleague, or null when the cookie is missing or invalid. */
export async function currentUser(): Promise<string | null> {
  if (gateMisconfigured()) return null;
  const store = await cookies();
  const got = store.get(AUTH_COOKIE)?.value;
  if (!got) return null;
  const dot = got.lastIndexOf(".");
  if (dot <= 0) return null;
  const email = got.slice(0, dot);
  if (!isCompanyEmail(email)) return null;
  const expected = await tokenFor(email, process.env.APP_PASSWORD as string);
  return got === expected ? email : null;
}

/** True when the gate is off, or the request carries a valid cookie. */
export async function isAuthorized(): Promise<boolean> {
  if (!gateEnabled()) return true;
  return (await currentUser()) !== null;
}
