// Question log: one row per question with how well Mercy answered it.
// Read it once a week to find what colleagues ask and cannot find, then add
// FAQ entries or synonyms. Goes to a Supabase table over its REST API when
// MERCY_LOG_URL and MERCY_LOG_KEY are set (see supabase/mercy_questions.sql);
// otherwise to the runtime log as a JSON line, so nothing is lost locally.

export interface QuestionLogEntry {
  question: string;
  kind: string;
  score: number | null;
  coverage: number | null;
  page: number | null;
  section: string | null;
  knowledge_seq: number;
}

export async function logQuestion(entry: QuestionLogEntry): Promise<void> {
  const url = process.env.MERCY_LOG_URL;
  const key = process.env.MERCY_LOG_KEY;
  if (!url || !key) {
    console.log("mercy.question " + JSON.stringify(entry));
    return;
  }
  try {
    const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/mercy_questions`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(entry),
    });
    if (!res.ok) {
      console.error(`mercy.question log failed: ${res.status} ${await res.text().catch(() => "")}`);
    }
  } catch (err) {
    console.error("mercy.question log failed:", err instanceof Error ? err.message : err);
  }
}
