import { redirect } from "next/navigation";
import { VercelV0Chat } from "@/components/ui/v0-ai-chat";
import { isAuthorized } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Page() {
  if (!(await isAuthorized())) redirect("/login");
  return <VercelV0Chat />;
}
