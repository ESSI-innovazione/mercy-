import { cookies } from "next/headers";

// Gate for colleagues: a @timevision.it address, plus the shared password once
// APP_PASSWORD is set. Without APP_PASSWORD the login is a mock-up: the page is
// shown, the domain is checked, no password is asked.
// Checked inside pages and route handlers (no middleware).

export const AUTH_COOKIE = "mercy_auth";
export const ALLOWED_DOMAIN = "timevision.it";

/** True once APP_PASSWORD is configured; false in mock-up mode. */
export function passwordRequired(): boolean {
  return Boolean(process.env.APP_PASSWORD);
}

function secret(): string {
  return process.env.APP_PASSWORD || "mock";
}

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

/** Cookie value: "<email>.<sha256(mercy:<email>:<secret>)>". */
export async function tokenFor(email: string): Promise<string> {
  const e = normalizeEmail(email);
  return `${e}.${await sha256Hex(`mercy:${e}:${secret()}`)}`;
}

/** Email of the signed-in colleague, or null when the cookie is missing or invalid. */
export async function currentUser(): Promise<string | null> {
  const store = await cookies();
  const got = store.get(AUTH_COOKIE)?.value;
  if (!got) return null;
  const dot = got.lastIndexOf(".");
  if (dot <= 0) return null;
  const email = got.slice(0, dot);
  if (!isCompanyEmail(email)) return null;
  return got === (await tokenFor(email)) ? email : null;
}

/** True when the request carries a valid cookie. */
export async function isAuthorized(): Promise<boolean> {
  return (await currentUser()) !== null;
}
