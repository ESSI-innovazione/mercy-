import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_DOMAIN,
  AUTH_COOKIE,
  isCompanyEmail,
  normalizeEmail,
  passwordRequired,
  tokenFor,
} from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let email = "";
  let password = "";
  try {
    const body = (await req.json()) as { email?: string; password?: string };
    email = normalizeEmail(body.email ?? "");
    password = body.password ?? "";
  } catch {
    return NextResponse.json({ ok: false, error: "Richiesta non valida." }, { status: 400 });
  }

  if (!isCompanyEmail(email)) {
    return NextResponse.json(
      { ok: false, error: `Serve un indirizzo @${ALLOWED_DOMAIN}.` },
      { status: 403 }
    );
  }
  if (passwordRequired() && password !== process.env.APP_PASSWORD) {
    return NextResponse.json({ ok: false, error: "Password errata." }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true, email });
  res.cookies.set(AUTH_COOKIE, await tokenFor(email), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90, // 90 days
  });
  return res;
}
