# RESEARCH.md — madstone.dev redesign

Fact-gathering for the studio-site rebuild. One section per app. Each fact cites a source
(repo file path or URL). Every section ends with what I could **not** confirm.

Method: local repos were treated as the source of truth; live sites and app stores used to
confirm public-facing claims. Research done 2026-11-09.

**Golden rule for the copy:** only write a claim that appears below as confirmed. Everything in a
`### Unconfirmed / needs Richard` block stays a `[BRACKET]` until you tell me otherwise.

---

## Azimuth Compass (mobile — iOS + Android, live)

**No repo found on this machine.** Searched all of `/mnt/d` and `/mnt/c/Users/richa`
(maxdepth 4) for a directory or bundle-id match — nothing. So nothing about Azimuth below is
code-verified; it comes from the App Store listing, the current madstone.dev source, and the
design file. (Source: `find`/`grep` over `/mnt/d` and `/mnt/c/Users/richa`.)

**What it is:** a phone-based prismatic compass for hiking, orienteering and navigation. "Sight
a landmark through the camera, read its bearing." (Source: App Store listing,
https://apps.apple.com/au/app/azimuth-compass/id6808949289)

**Store facts (iOS):** Free, no in-app purchases listed. Category: Navigation. **Minimum iOS
16.4.** Size 35.5 MB. Age 4+. Also listed for macOS 12 (M1+, "not verified") and visionOS 1.0.
Developer MadStoneDev. App Privacy section: **"Data Not Collected"** (self-reported). Listing
says "No ads. No tracking." (Source: App Store listing.)

**Features (store + design agree):** prismatic camera sighting; bearing lock with left/right
turn guidance; degrees / NATO mils / both; true or magnetic north with location-based
declination; tilt-compensated heading; live accuracy + signal status; figure-8 calibration;
high-contrast display; keep-screen-awake. (Source: App Store listing; `design/Azimuth.dc.html`
script block.)

**Privacy (current site):** no accounts, no analytics, no third-party tracking; camera feed shown
live and never recorded; magnetometer/accelerometer readings stay on device. (Source:
`src/app/azimuth/privacy/page.tsx`.)

### ⚠️ The offline / declination problem (the brief's key question)
The current privacy page says, in the same document:
- "Data we collect: **None**. … The app works **fully offline**." and the app page says
  "Nothing you do ever leaves your device."
- **but** "The app can use your location … only to **look up** the local magnetic declination
  so it can show true north." (Source: `src/app/azimuth/privacy/page.tsx` lines 14, 22; current
  `src/app/azimuth/page.tsx` lines 31, 36, 41.)

"Look up" reads like a network request. If declination is fetched from a web API using the user's
location, then **"works fully offline" and "nothing leaves your device" are false** whenever true
north is used. If instead declination is computed on-device from a bundled model (e.g. the World
Magnetic Model), both claims hold. **I cannot tell which, because there's no repo.** The App Store
listing only says "location-based declination" and is silent on offline/network. This is the
single most important thing to resolve before the Azimuth copy can make the privacy/offline claim.

### RESOLVED 2026-11-09 (repo found: /mnt/d/development-sandbox/azimuth-compass, Expo/React Native)
- **Declination is on-device. Offline/privacy claims hold.** `src/hooks/useHeading.ts` computes
  magnetic heading from the magnetometer + accelerometer, and learns declination as
  `trueHeading - magHeading` from the OS heading (`expo-location` `watchHeadingAsync`). The OS
  derives true heading from the passive GPS fix + its built-in magnetic model, on-device. **No
  network calls exist anywhere in the app** (grep clean; only outbound URL is the Ko-fi support
  link). → Site now states "no network request" / "nothing leaves your device" as fact.
- **Min Android version: not pinned in the repo.** `app.json` sets no `minSdkVersion`, so it
  inherits the Expo SDK 57 default. The authoritative number is Google Play's "Requires Android"
  line (still JS-rendered, unreadable by a fetcher). Site platform entry is just "Android" until
  Richard confirms the Play value. (App store release versions he gave: iOS 1.1.2, Android 1.1.0.)

---

## JustSent (web, live — NO mobile app)

**Premise correction:** the brief expected an Expo app under `apps/mobile`. **It does not exist.**
The monorepo has only `apps/web` plus `packages/shared-types` and `packages/api-client`. No
Expo/React Native anywhere. JustSent is **web-only**. (Source:
`/mnt/d/development-sandbox/justsent/pnpm-workspace.yaml`, `apps/` listing, `apps/web/package.json`.)

**What it does:** fast file sharing. Send a file by short 8-char code or `/r/CODE` link (no signup
to receive). Differentiator = **Rooms** ("sessions" internally): persistent, named real-time
transfer spaces with presence, chat, per-participant download receipts, a live feed. Model:
persistent personal library (quota-limited) + ephemeral shares. Guests send up to 1 GB without an
account. (Source: `README.md`; live site https://justsent.app.)

**Plans** (internal keys guest/free/pro/business → display Solo/Studio/Crew; AUD; source of truth
`packages/shared-types/src/constants.ts`):

| Plan | Price | File size | Library | People/room | Room lifetime |
|------|-------|-----------|---------|-------------|---------------|
| Guest (no login) | Free | 1 GB | — | 2 | 6 h |
| Solo (`free`) | A$0 | 5 GB | 2 GB | 3 | 8 h |
| Studio (`pro`) | A$12/mo (A$120/yr) | 25 GB | 250 GB* | 10 | open until ended |
| Crew (`business`) | A$30/mo (A$300/yr) | 100 GB | 500 GB* | 25 | 7 days |

\* **Code says 250/500 GB; the live pricing page says 100/250 GB.** One is stale. (Source:
`constants.ts` vs https://justsent.app/pricing.) Old "Plus" tier retired. Link expiry 1 h → 1 year.

**Encryption — be careful with the claim:**
- *In transit:* **real** — client↔Cloudflare R2 over HTTPS presigned URLs, app served over TLS.
  (Source: `README.md`; `apps/web/src/lib/multipart-upload.ts`.)
- *At rest:* depends on **Cloudflare R2's default server-side encryption** — **not evidenced in
  repo code**. Normal files are **server-readable** (admin routes can download/preview/scan them),
  so they are **not** end-to-end encrypted. (Source: `apps/web/src/app/api/admin/links/[id]/…`.)
- *True E2E* exists but only as an **opt-in paid "private link"** (AES-256-GCM in browser, key in
  URL fragment), capped at 1 GB / 24 h, gated to Studio+. Not the default. (Source:
  `apps/web/src/lib/crypto/e2e.ts`, `docs/e2e-encryption-plan.md`.)
- → The homepage's blanket "Encrypted in transit & at rest" **overclaims** if read as end-to-end.
  Safe claim: "encrypted in transit; files encrypted at rest on our storage; optional
  end-to-end-encrypted private links."

**Third-party:** Cloudflare R2 (storage), self-hosted Supabase (DB + magic-link auth), Stripe
(payments, merchant of record), Resend (email), Upstash Redis (rate limiting), self-hosted ClamAV
(on-demand malware scan), hosting OVHcloud + Coolify. **No analytics SDK of any kind** (grep clean).
(Source: `README.md`, `apps/web/package.json`, `.env.example`, `Dockerfile`.)

**Data collected:** account email/auth; uploaded files + chat + metadata; room/transfer data
(codes, names, branding, participant display names, download receipts); Stripe billing status
(no card number); a browser fingerprint as guest identity; standard logs (IP, UA, timestamps).
Operated by RAVENCI Solutions (ABN 35 664 615 205). (Source: `apps/web/src/app/privacy/page.tsx`.)

### Unconfirmed / needs Richard
- **At-rest encryption**: confirm R2 bucket SSE is actually on before repeating "encrypted at
  rest." The blanket homepage wording risks overclaiming E2E for ordinary files.
- **Library sizes**: 250/500 GB (code) vs 100/250 GB (live page) — which is real?
- **Crew "API & webhooks"** and **Studio "Request links"** are advertised live but the repo shows
  only an internal client and an unbuilt hidden stub — roadmap, not shipped. Don't feature them.
- **Data residency**: R2 region not provably pinned to Oceania/AU in the repo.
- Yearly prices (A$120 / A$300) aren't shown on the live page.

---

## JustNoted (web, live — mobile planned only)

**What it is:** a calm, distraction-free **markdown note-taking** app. Notebooks, slash commands,
inline markdown rendering, word goals, dark/focus mode, sharing. Made by RAVENCI Solutions. App
lives at the root URL; marketing copy at `/welcome`. (Source: `src/app/welcome/page.tsx`,
`src/app/layout.tsx` metadata.)

**Local vs synced notes:**
- *Account notes:* save locally first, sync to self-hosted Supabase in the background; work
  offline. (Source: `src/app/welcome/page.tsx`.)
- *Local notes:* created without an account (or moved to "Local"). Kept **both in the browser and
  on Upstash Redis (Sydney)**, keyed by a random anonymous ID; recoverable via a recovery key
  (only a hash stored). Auto-deleted after 12 months inactivity. (Source:
  `src/app/privacy-policy/page.tsx`.)
- ⚠️ **Discrepancy:** the welcome page says local notes "never leave your device," but the privacy
  policy says they're stored on Upstash servers. **Don't repeat "never leaves your device."**

**Plans** (source `src/lib/plans.ts`, live at `/pricing`): two tiers.
- **Draft — Free:** unlimited notes; 10 notebooks; share-to-view only; 30-day trash; 50 version
  snapshots/note; export + templates.
- **Scribe — A$5/month (AUD, GST-free):** + unlimited notebooks; live collaboration / share-to-edit
  (unlimited collaborators); 60- or 90-day trash; 200 snapshots/note; version-history date filter.
  Billing via Stripe Payment Links. (Source: `src/lib/plans.ts`.)

**Sharing & version history:** public/private links with password, anonymous sharing, expiry.
Share-to-view both plans; live collaboration (Milkdown + Yjs, Supabase Realtime presence) is
Scribe-only. Autosave version snapshots capped 50/200; date-range filter Scribe-only. (Source:
`src/app/welcome/page.tsx`, `src/lib/plans.ts`.)

### ⚠️ Tracking — do NOT claim "no tracking"
- **Google Analytics** — rendered in root layout via `@next/third-parties/google`. (Source:
  `src/app/layout.tsx`.)
- **LogRocket** (`logrocket` v10.1.0) — **session replay** (DOM recording, network capture),
  identifies the signed-in user by id+username; gated behind an opt-in consent banner. This is
  real product analytics, not "uptime monitoring." (Source:
  `src/components/providers/logrocket-provider.tsx`, `src/hooks/use-analytics-consent.ts`.)
- **OpenPanel: NOT in the code** — only a `[confirm]` row in the draft privacy policy. The brief
  said "GA + OpenPanel"; the real stack is **GA + LogRocket**.
- Safe claim: "privacy-first; analytics only with your consent." **Not** "no tracking."

**Other third-party:** self-hosted Supabase (Postgres/Auth/Realtime, OVHcloud Canada + Sydney);
Cloudflare R2 (Oceania, public + private buckets); Resend email (MailerSend key also present);
Stripe (Payment Links); Upstash Redis + QStash (local notes, cleanup jobs; Sydney); reCAPTCHA +
Turnstile. **No live AI features** today (Anthropic key present but policy says none yet). (Source:
`.env.example`, `src/app/privacy-policy/page.tsx` line 181.)

**Data:** email, username, password/recovery-key hashes; note content + anonymous ID; Stripe
subscription status; usage/technical (pages, device, approx IP location, GA + LogRocket). Notes
encrypted in transit and at rest but **not** end-to-end. Platforms: **web only** today; no native
app on the roadmap (only optional web push). (Source: `src/app/privacy-policy/page.tsx`,
`docs/roadmap.md`.)

### Unconfirmed / needs Richard
- **OpenPanel** — planned or drop it? Code says GA + LogRocket only.
- **GA consent gating** — GA tag renders unconditionally; LogRocket is gated. Confirm GA only
  fires after consent before saying "analytics only with your consent."
- **LogRocket wording** — policy calls it "uptime monitoring"; code shows session replay. Confirm.
- **"Local-only never leaves your device"** — contradicts Upstash storage. Confirm accurate claim.
- Confirm A$5/mo AUD GST-free is current and public.

---

## Bustin' Out (game, in development — Godot)

**No repo found on this machine** (searched `/mnt/d` and `/mnt/c/Users/richa`). Everything below
is from the design file only; nothing is build-verified. (Source: `design/Game.dc.html`.)

**What the design describes:** a turn/grid-based prison-break puzzle game. Move a crew of
characters through rooms past guards, dogs, cameras, keys/doors, switches and pressure plates.
Characters and their moves (chess-like):
- **Al Cologne — "the boss"** (`#E06A2C`): moves one square in any direction; usually has to be
  the last one out.
- **Tony Oregano — "the muscle"** (`#4C9A55`): moves diagonally any distance; the only one who can
  push things out of the way.
- **Von Ditto Funnybone — [role unknown]** (`#FFF1B8`): slides until something stops him; small
  enough to fit through hatches into bonus rooms.

Mechanics: move limits per room; guards (patrol / stand-and-turn / sleep); dogs (smell adjacent,
crates don't hide you); cameras (fixed or sweeping, block with a crate); keys/doors; switches
(stay flipped) and pressure plates (only while stood on). Screenshots are all `[placeholders]`.

### Unconfirmed / needs Richard
- **Von Ditto's role** (the design leaves `[Role]` blank).
- **Hint pack price** (unknown per the brief).
- Platforms/stores it will ship on, and anything in the design that no longer matches the build.
- There's no page to build yet unless you want a teaser; the brief says don't build a thin page.

---

## QRmory (web, live)

**What it is:** dynamic QR-code generator for (mainly Australian) small businesses. Build static
or dynamic codes, style them, print them, and change where a dynamic code points without
reprinting. Scan analytics; hosted content types (menus, vCards, coupons, polls, link pages).
(Source: `/mnt/d/development-sandbox/qrmory/README.md`.)

**Plans** (generated from `src/lib/creator/gating.ts`; the numbers that actually ship):

| Plan | Price | Dynamic codes | Custom domains |
|------|-------|---------------|----------------|
| Free | Free | 3 (no time limit) | No (qrmory.com only) |
| Explorer | A$5.99/mo | 25 | Yes — 1 |
| Creator | A$12.99/mo | 50 | Yes — 3 |
| Champion | A$39.99/mo | 250 | Yes — 10 |

Guests (not signed in) get 0 dynamic codes. Styling is free on all plans; only an uploaded centre
logo gates to Explorer+. (Source: `src/lib/creator/gating.ts`, `src/components/marketing/pricing-cards.tsx`.)

**Custom domains:** Explorer and above (CNAME, routed via Coolify API); qrmory.com not counted.
**Link screening:** **Google Web Risk** (Lookup API) — deliberately Web Risk, not Safe Browsing;
checks malware / social-engineering / unwanted-software; **fails open** (outage never blocks a
code). (Source: `src/lib/url-safety.ts`.)
**Freeze-not-delete:** confirmed and real. On downgrade/cancel the newest N codes (N = new quota)
stay live, the rest freeze for **90 days** (still redirecting, with reminder emails), then show a
plain paused page — **never deleted, never a 404, no ads**. Upgrading unfreezes instantly.
(Source: `src/utils/paddle/process-webhook.ts`, `src/app/api/freeze-reminders/route.ts`.)
**Ads:** none on any plan — confirmed (no ad system in code). (Source: `src/app/(public)/page.tsx`.)

**Third-party:** Paddle (payments, **not** Stripe); **hosted** Supabase (auth/DB — the one project
on hosted Supabase); Cloudflare R2 (`qrmory-media`); Resend (email); Google Analytics + LogRocket;
Turnstile + Upstash (anti-abuse); Google Places; ip-api.com (geo fallback); optional Slack alerts.
**Scan analytics store NO IP** — country/city derived then discarded. (Source: `package.json`,
`.env.example`, `src/app/api/track-scan/route.ts`.)

### Unconfirmed / needs Richard
- **Creator (A$12.99) and Champion (A$39.99) prices** carry a code TODO to verify against the live
  Paddle config. Free + Explorer (A$5.99) are noted confirmed. Confirm the two before publishing.
- Print "AUD" or just "$"? Currency is inferred (Australian product, `$` prefix).
- A full redesign is code-complete on `beta`, not yet on `main` — some live copy may differ from
  the repo working tree.

---

## JustReel (web, live)

**What it is:** a social **TV-and-film tracking and discovery** app ("Letterboxd for TV and film").
Despite the name it is **not** a short-video/reels product. Next.js, self-hosted Supabase, TMDB for
metadata. (Source: `JUSTREEL-STRATEGY.md`, `DEV-INSTRUCTIONS.md`, live site.)

**Live today (confirmed in repo):**
- **Episode-level watch tracking** ("Reel Deck") — movies + TV, watch/rewatch, auto
  series-completion. (Source: `src/app/actions/movie-watch.ts`, `quick-watch.ts`.)
- **Shared / collaborative lists** — the headline differentiator; per-member access levels
  (editor/viewer/follower). (Source: `src/app/actions/collections.ts`.)
- **Recommendations — live, dual system:** AI recs via **Anthropic Claude Haiku** (prod key set)
  plus algorithmic recs (collaborative filtering, trending, cast affinity), refreshed daily.
  (Source: `src/app/actions/recommendations.ts`, `algorithmic-recommendations.ts`.)
- Social: follows, activity feed, direct messaging, public profiles, ratings/reactions, comments,
  achievements, leaderboards, personal analytics dashboard. "Where to Watch" (US-only, TMDB).
  (Source: `DEV-INSTRUCTIONS.md`.)
- **Platform:** web only; installable **PWA**; the FAQ says "not a native app yet." Auth =
  Supabase magic-link + Turnstile. (Source: `src/app/manifest.ts`, auth portal.)

**Planned / NOT live:**
- **Importers — not built.** No Letterboxd/Trakt/TV Time/IMDb/CSV import exists. The About page
  says imports are "on our roadmap." A `/tv-time-alternative` landing page exists but offers no
  import. **Don't claim importers.** (Source: `src/app/(public)/(general)/about/page.tsx`.)
- **Pro tier / payments — not live.** `PRO-TIER-PLAN.md` is a March-2026 proposal; "zero payment
  infrastructure," no Stripe, no pricing route. Everything is effectively free today. Proposed
  (not live): Free / Pro A$5.99 / Premium A$11.99. (Source: `PRO-TIER-PLAN.md`, `package.json`.)

**Third-party:** TMDB (metadata), Anthropic Claude Haiku (recs), self-hosted Supabase, Upstash
Redis, Resend, Google Analytics, Turnstile; hosting Coolify/OVH. (Source: `.env.example`,
`docs/PROD-STATE.md`.)

### Unconfirmed / needs Richard
- Stale README mentions **Sentry** (no package in repo) and **Vercel** (PROD-STATE says
  self-hosted Coolify). Confirm hosting + whether error monitoring is wired.
- "Where to Watch" still US-only? AI-rec cooldown value (7 vs 14 days) differs across docs.
- Confirm JustReel stores no user files (R2 not wired; Storage stripped per your CLAUDE.md).

---

## TheJury (web — repositioned for Australian organisations)

**What it is now:** Australian-hosted **polling and decision-making for organisations** — churches,
clubs/associations, councils/government, businesses, presenters. Members vote with no account via
link, QR code or 6-char code; live results; results record exportable for the minutes. The old
"make a poll, see what people think" line is gone. (Source: https://thejury.app;
`docs/FEATURES.md`.)

**AU / sensitive-data positioning (live claims):** "Your polls, votes and member data are hosted in
Australia. No overseas processing." / "Australian owned and operated." / aimed at "organisations
that can't put member or staff data in overseas tools." (Source: https://thejury.app.)
⚠️ **Honesty caveat (from the repo's own security page):** two services run overseas — **Stripe**
(payments) and **Google Analytics** (usage). So "no overseas processing" is not strictly true.
Don't repeat an absolute "nothing leaves Australia." The exact AU region is a literal
`[Australian region: to confirm]` placeholder in code. (Source: `app/(public)/security/page.tsx`.)

**Features (repo-confirmed):** 5+ question types (multiple choice, rating, ranked choice, image
options, reactions, open-ended/word cloud); no-account voting; live charts; **CSV + PDF** results
record (PDF gated to paid); **anonymous + verified voting** (built, migrations 017/018;
server-side ballot never stores voter identity); org templates (AGM motion, board election,
congregational vote, consultation, staff feedback, date finder); meeting-date → calendar invite;
password/time-limit/member-list; public API v1; server-side plan enforcement. A Discord bot is
live but **no longer marketed** — don't feature it. (Source: `docs/FEATURES.md`, `lib/stripe.ts`,
`lib/exportUtils.ts`, `lib/pdfUtils.ts`, migrations.)

**Plans** (⚠️ prices are code-flagged **placeholders**):
- **Free** — A$0. Public polls, live results, no-account voting; 2 questions/poll; no export.
- **Organisation** — ~A$9/mo or A$90/yr. Anonymous + verified voting, results record, no branding,
  unlimited questions, templates, API.
- **Council & Enterprise** — contact sales (placeholder ~A$79/mo in code).
(Source: `lib/stripe.ts` with `// CLAIM-FLAG (pricing): … PLACEHOLDERS`.)

**Third-party:** self-hosted Supabase (Sydney per CLAUDE.md); Stripe (overseas); Google Analytics
(overseas); in-memory rate limiting. **No email service** wired. No active R2/Storage found.
(Source: `package.json`, `.env.example`, `app/layout.tsx`.)

### Unconfirmed / needs Richard
- **Exact AU hosting region** (code placeholder) — don't name a city without your word.
- **Final prices** (A$9/90, A$79/790) are placeholders; Stripe prices not yet created.
- **"No overseas processing"** vs the security page's Stripe+GA admission — which line do we use?
- **Launch status**: repo reads pre-launch (seeds not run, Stripe prices not created). Is it
  actually taking customers yet?

---

## iLoveBoardGames (web, live)

**What it is:** a board-game **discovery and community** site. Tagline: "Discover amazing board
games, share your favorites with friends, and find your next game night adventure." (Source:
https://iloveboardgames.xyz.)

**Features (live):** browse/search games; category rows (Party, Card, Adventure, Fantasy); a
"Perfect for Tonight" finder (by player count + play time); Top Rated / Trending on BGG / New
Releases / Upcoming lists; a community activity feed, Game Nights and Leaderboards; sign-in at
`/auth/portal`. Data appears to come from **BoardGameGeek** (geekdo image CDN, `bgg-` IDs). Built
with Next.js. (Source: https://iloveboardgames.xyz.)

**Topdeck / trading-card side:** the header has a **Board / Cards** toggle; "Cards" links to
`/tcg`. That section isn't described on the landing page and the word "Topdeck" doesn't appear
publicly. (Source: https://iloveboardgames.xyz header.)

### Unconfirmed / needs Richard
- **The `/tcg` "Cards" side** — what is it exactly (the "Topdeck" trading-card feature you
  mentioned)? The public landing page doesn't explain it. Is there a repo I should read?
- Plans/pricing — none visible; confirm it's free.
- Confirm BGG is the data source and how you'd like that described (if at all).

---

## beforeAftr (web, live)

**One-line:** beforeAftr is a free, no-signup web tool for comparing two photos with a drag slider
— upload a "before" and an "after" image and drag a handle to wipe between them. (Source:
`src/app/layout.tsx` metadata; `src/components/image-comparison.tsx`; https://beforeaftr.me.)

**Details:** two upload zones (click / drag-drop / tap), interactive wipe slider (pointer + touch),
responsive sizing. **Entirely client-side** — images read via `FileReader` into in-browser data
URLs; nothing is uploaded. Free, no account. Tagline "Photo Comparison Tool." (Source:
`src/components/image-comparison.tsx`.)

**⚠️ Analytics:** Google Analytics (`G-NSDT7S3H6R`) **is active** on the live tool (rendered in the
root layout). So the comparison tool itself collects GA usage telemetry even though it uploads no
images. (Source: `src/app/layout.tsx`.)

**Note on the repo:** it also contains a dormant `/library` "AI image tagging" feature (with its own
Free/Explorer/Adventurer/Cartographer pricing and Stripe/MailerSend/Anthropic wiring) and a
dormant `magnepixit` tool. **None of that is the live public product** — the live site at
beforeaftr.me is just the before/after slider. Describe only the slider. (Source: `PLAN.md`,
`src/app/library/pricing/page.tsx`.)

### Unconfirmed / needs Richard
- Confirm the studio page should describe **only** the before/after slider (ignore library /
  magnepixit, which read as dormant/experimental).
- GA is active with no visible consent banner — fine to describe it as "no images uploaded, but it
  uses Google Analytics," or do you want a different framing?

---

## Removed / hidden

- **TurnTally** — remove from the site entirely (per brief). A repo exists at
  `/mnt/d/development-sandbox/TurnTally` but nothing should reference it.
- **Tabletop Chronicles** — keep its data entry with `hidden: true`, render it nowhere. (Repo at
  `/mnt/d/development-sandbox/tabletop-chronicles`.)

---

## Current-site audit items confirmed (for the build, not research)

Read from the existing repo so the rebuild removes them:
- **Agency framing in the contact form:** budget buttons `< $5K / $5K–$15K / $15K–$50K /
  $50K–$100K / $100K+ / Let's Discuss`, plus a required free-text "Project Type" with no options,
  and the purposeless "Let's Discuss". (Source: `src/app/contact/page.tsx` lines 214–259, 424–437.)
- **Contact email is inconsistent:** contact page uses `hello@madstonedev.com`; the Azimuth
  privacy page uses `hello@madstone.dev`. The domain is madstone.dev. **Which address is real?**
  (Source: `src/app/contact/page.tsx` line 496 vs `src/app/azimuth/privacy/page.tsx` line 41.)
- Phone currently listed: `+61 426 238 272` — keep it, drop it, or it was agency-only?
- Footer/privacy/terms/copyright, per-page titles + OG images, the `#about` stray anchors, the
  `next-size-adjust` empty meta, the JustReel copy bug — all handled at build time.

---

## Open decisions I need from you before writing copy / building

1. **Contact email** — `hello@madstone.dev` or `hello@madstonedev.com`? (And keep the phone?)
2. **Where should form submissions go?** The repo already uses **Resend** (`resend` + React Email
   templates in `src/components/email templates/`). Keep Resend, or MailerLite/something else? This
   covers both the contact form and the three "let me know when it's out" sign-ups.
3. **Azimuth** — repo location, and is declination on-device or a network lookup? (Governs the
   offline/privacy claims.) Plus minimum Android version.
4. **Bustin' Out** — Von Ditto's role, and the hint-pack price.
5. **Accuracy flags to confirm before I state them as fact:** JustSent library sizes + at-rest
   encryption wording; JustNoted OpenPanel/GA-consent/LogRocket wording; QRmory Creator/Champion
   prices; TheJury prices + "no overseas processing" wording + launch status; iLoveBoardGames
   `/tcg` side; beforeAftr GA framing.
6. **iLoveBoardGames repo** — is there one I should read for the Cards/Topdeck side?
