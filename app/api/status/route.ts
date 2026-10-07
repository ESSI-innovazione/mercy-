import { loadKnowledge } from "@/lib/knowledge";
import { isAuthorized } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface FrameMeta {
  ver?: string;
  seq?: number;
  title?: string;
  description?: string;
}

export async function GET() {
  if (!(await isAuthorized())) {
    return new Response("Non autorizzato.", { status: 401 });
  }
  const { meta } = loadKnowledge();
  const result = {
    knowledge: {
      seq: meta.seq,
      ver: meta.ver,
      documentVersion: meta.documentVersion,
      documentDate: meta.documentDate,
      fetchedAt: meta.fetchedAt,
    },
    source: null as null | { seq?: number; ver?: string; description?: string },
    stale: false,
    checked: false,
  };

  try {
    const url = `https://claude.ai/api/frame/${meta.frameUuid}?bk=cold&actor=id&vt=1`;
    const res = await fetch(url, {
      headers: { "X-Frame-CP": "go", "X-Frame-Platform": "web" },
      next: { revalidate: 300 },
    });
    if (res.ok) {
      const data = (await res.json()) as FrameMeta;
      result.source = { seq: data.seq, ver: data.ver, description: data.description };
      result.checked = true;
      result.stale =
        typeof data.seq === "number" ? data.seq > meta.seq : data.ver !== meta.ver;
    }
  } catch {
    // Leave checked=false: the UI simply hides the freshness banner.
  }

  return Response.json(result, { headers: { "Cache-Control": "no-store" } });
}
