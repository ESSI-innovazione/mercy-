import { ALLOWED_DOMAIN, passwordRequired } from "@/lib/auth";
import { LoginClient } from "./login-client";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return <LoginClient domain={ALLOWED_DOMAIN} requirePassword={passwordRequired()} />;
}
