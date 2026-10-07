import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, gateEnabled, tokenFor } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  if (!gateEnabled()) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login") || pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  const expected = await tokenFor(process.env.APP_PASSWORD as string);
  const got = req.cookies.get(AUTH_COOKIE)?.value;
  if (got === expected) return NextResponse.next();

  if (pathname.startsWith("/api/")) {
    return new NextResponse("Non autorizzato.", { status: 401 });
  }
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
