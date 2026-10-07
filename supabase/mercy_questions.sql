-- Question log for Mercy, the internal chatbot over the Mappa del CRM.
-- Run once in the Supabase SQL editor of the project that hosts the log
-- (proposed: project "jobsignal", ref isqqbrferokpfzcbhivy), then set on Vercel:
--   MERCY_LOG_URL = https://<ref>.supabase.co
--   MERCY_LOG_KEY = the project's publishable (anon) key
-- One row per question asked; read weekly to find questions Mercy could not answer:
--   select created_at, question, kind, score, coverage, section
--   from mercy_questions where kind in ('weak','none') order by created_at desc;

create table if not exists public.mercy_questions (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  question text not null,
  kind text not null,              -- faq | hit | weak | none | greeting | thanks
  score real,                      -- BM25 score of the best passage (null when none)
  coverage real,                   -- share of the user's own words found in the best passage
  page smallint,                   -- Mappa page of the answer (1-4)
  section text,                    -- section › subsection of the answer
  knowledge_seq integer            -- artifact seq the answer was built from
);

comment on table public.mercy_questions is
  'Mercy (Mappa del CRM chatbot): every question asked with how well it was answered. Inserted from Vercel with the publishable key; read from the dashboard or MCP.';

create index if not exists mercy_questions_created_at_idx on public.mercy_questions (created_at desc);
create index if not exists mercy_questions_kind_idx on public.mercy_questions (kind);

alter table public.mercy_questions enable row level security;

-- The app only inserts, with the publishable key. Nobody reads through the API.
drop policy if exists "mercy_insert_anon" on public.mercy_questions;
create policy "mercy_insert_anon" on public.mercy_questions
  for insert to anon with check (true);
