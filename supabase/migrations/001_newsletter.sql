-- Newsletter subscribers table
-- Run this in your Supabase SQL editor or via the Supabase CLI

create table if not exists newsletter_subscribers (
  id          uuid default gen_random_uuid() primary key,
  email       text unique not null,
  created_at  timestamptz default now()
);

-- Enable Row Level Security
alter table newsletter_subscribers enable row level security;

-- Only the service role (server-side) can read/write
create policy "Service role full access"
  on newsletter_subscribers
  for all
  using (auth.role() = 'service_role');

-- Index for fast upsert lookups
create index if not exists idx_newsletter_subscribers_email
  on newsletter_subscribers (email);
