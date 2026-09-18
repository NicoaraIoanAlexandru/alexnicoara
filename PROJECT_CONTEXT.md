# Alex Nicoară Studio Project Context

_Generated: 2026-09-17. Updated: 2026-09-18. Verify `git log` and `git status` for current repository state before making time-sensitive assumptions._

## 1. Project purpose

- **Personal brand purpose (VERIFIED):** personal portfolio/brand site for Alex Nicoară, positioned as "AI Product Developer | Cybersecurity Engineer | Digital Builder" (`AGENTS.md`, layout metadata in `app/[locale]/layout.tsx`).
- **Commercial purpose (VERIFIED, per AGENTS.md):** intended to generate digital product clients, AI consulting, and cybersecurity consulting leads. This is a stated business goal in project docs, not something independently validated by code (e.g., no analytics/CRM confirmed — see §11).
- **Target audiences (ASSUMPTION, inferred from copy/CTAs):** prospective clients for AI/digital products and cybersecurity consulting; recruiters/professional network (LinkedIn CTA present).
- **Primary conversion goal (VERIFIED):** drive visitors to the Contact section, which offers a `mailto:` link and a LinkedIn profile link (`components/sections/Contact.tsx`). No form, no CRM/lead-capture backend.

## 2. Brand / positioning

- **Positioning tagline (VERIFIED, AGENTS.md + layout metadata):** "AI Product Developer | Cybersecurity Engineer | Digital Builder"; message "Building digital products. Securing systems. Challenging limits."
- **Visual direction (VERIFIED, AGENTS.md + globals.css/Tailwind classes):** dark theme, cyan accent, minimalist, "Premium Technical" identity. Accent color now sourced consistently from CSS custom properties (`var(--brand-cyan)`, `var(--brand-cyan-soft)` in `app/globals.css`) — the earlier stray `text-cyan-400`/`cyan-300` Tailwind-default usages in `FeaturedProjects.tsx`, `Experience.tsx`, `Button.tsx`, and `Contact.tsx` have been replaced with the token, closing a prior visual-inconsistency gap.
- **Service categories (VERIFIED, `components/sections/Services.tsx` and `WhatIBuild.tsx`, content read via `messages/en.json`/`messages/ro.json`):** the two sections are now deliberately differentiated — `WhatIBuild` is a capability showcase (AI-Powered Products / Secure Digital Infrastructure / High-Performance Platforms, framed as "what Alex creates"), `Services` is a commercial-engagement menu (AI Product Development / Cybersecurity Consulting / Digital Product Delivery, framed as "what a client can hire Alex for"). Copy and tags no longer overlap between the two sections.
- **Established vs proposed:** the visual system, section structure, and bilingual content are established (implemented and committed). No proposed/roadmap document exists in the repo — anything beyond current code is OPEN QUESTION.

## 3. Current technical stack

- **Framework (VERIFIED):** Next.js `16.3.1`, App Router (`app/[locale]/...`), `next dev`/`next build`/`next start` scripts.
- **React (VERIFIED):** React 19.2.8 / React DOM 19.2.8.
- **TypeScript (VERIFIED):** TS ^5, `tsconfig.json` present.
- **Styling (VERIFIED):** Tailwind CSS 4 via `@tailwindcss/postcss`, custom tokens in `app/globals.css`.
- **i18n (VERIFIED):** `next-intl` ^4.13.6.
- **Animation (VERIFIED per package.json; usage NOT AUDITED in this pass):** `framer-motion` ^13.1.0 is a dependency; actual usage sites not inspected — check `Hero.tsx`/`Navbar.tsx` (both `"use client"`) for confirmation.
- **Icons:** `lucide-react` `^1.31.0` — ASSUMPTION/NOT VALIDATED: this version number looks unusually low for lucide-react's actual release history; worth double-checking `package-lock.json` if icon behavior seems off.
- **Deployment (VERIFIED via Vercel API, `list_teams`/`list_projects`):** repo has a GitHub remote (`github.com/NicoaraIoanAlexandru/alexnicoara`) and a linked Vercel project named `alexnicoara` (`prj_s3rIqxloVZ6nJApDWyFTswzSCTbQ`) under team `nicoaraioanalexandrus-projects` (hobby plan), linked to the same GitHub repo. No local `.vercel/` directory exists in this working copy (link is account/API-side, not a local project link file) — deployment branch/workflow specifics (preview vs. production triggers) were NOT further inspected.
- **Verified external services:** GitHub (git remote) and Vercel (project link, confirmed via API) — see §11.

## 4. Repository / architecture overview

- **Locale routing (VERIFIED):** `app/[locale]/` dynamic segment; `i18n/routing.ts` defines locales `["en", "ro"]`, default `en`; `proxy.ts` wires `next-intl` middleware with matcher `["/", "/(en|ro)/:path*"]`.
- **Homepage structure (VERIFIED, `app/[locale]/page.tsx`):** composes, in order: `Hero`, `WhatIBuild`, `FeaturedProjects`, `About`, `Experience`, `Services`, `Contact`.
- **Layout (VERIFIED, `app/[locale]/layout.tsx`):** wraps children with `NextIntlClientProvider`, `Navbar`, and `Footer`; sets locale-aware `<html lang>`; `generateStaticParams` pre-renders both locales; `dynamicParams = false` (no locales beyond en/ro are served).
- **Section components (VERIFIED, `components/sections/`):** `About.tsx`, `Contact.tsx`, `Experience.tsx`, `FeaturedProjects.tsx`, `Hero.tsx`, `ProjectVideo.tsx` (new — `"use client"`, extracted from `FeaturedProjects.tsx`), `Services.tsx`, `WhatIBuild.tsx`.
- **UI primitives (VERIFIED, `components/ui/`):** `Badge.tsx`, `Button.tsx`, `Container.tsx`, `Section.tsx` — reused across sections per AGENTS.md convention.
- **Layout components (VERIFIED, `components/layout/`):** `Navbar.tsx` (`"use client"`), `Footer.tsx`.
- **SEO files (VERIFIED, `app/`):** `robots.ts`, `sitemap.ts`, `opengraph-image.tsx` (locale-aware, added in latest commit), `icon.png`, `apple-icon.png`.
- **Assets/media (VERIFIED, `public/`):** `alex-logo.png` (131KB, 320×320 — resized from 1.3MB/1070×1070; still transparent PNG, displayed at 40×40 in `Navbar.tsx`/`Footer.tsx`), `alex_hero.jpeg` (284KB), `swim4dreams_admin.png` (704KB), `swim4dreams_video.mp4` (1.8MB, 18s loop, H.264/no audio — trimmed and re-encoded from 6.1MB/100s), `swim4dreams_poster.jpg` (new, 40KB — poster frame for `ProjectVideo.tsx`). Default Next.js SVG placeholders (`file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`) were grepped for references (none found) and removed from `public/`.
- **Service/contact/lead flows (VERIFIED):** `Contact.tsx` provides a `mailto:nicoara.ioan.alexandru@gmail.com` button, a LinkedIn profile link, and a WhatsApp value displayed as text (not a clickable `wa.me` link — NOT VALIDATED if intentional). No server-side form handler, no email service (Resend/SendGrid/etc.) found.

## 5. Bilingual/i18n behavior

- **Locales (VERIFIED):** `en` (default), `ro` — `i18n/routing.ts`.
- **Routing (VERIFIED):** locale-prefixed paths via `next-intl` middleware in `proxy.ts`; static params generated for both locales; unknown locales trigger `notFound()`.
- **Messages files (VERIFIED):** `messages/en.json` and `messages/ro.json`, both with identical top-level namespaces: `Navbar`, `Hero`, `WhatIBuild`, `FeaturedProjects`, `About`, `Experience`, `Services`, `Contact`, `Footer` (key-set diff at top level showed zero differences).
- **Hardcoded user-facing content risk (VERIFIED, low-severity finding):** `layout.tsx` hardcodes locale-conditional title/description strings inline (not sourced from `messages/*.json`) via `isRomanian ? ... : ...` ternaries for SEO metadata. This works but duplicates the "never hardcode" rule in AGENTS.md for metadata specifically — ASSUMPTION that this is an accepted exception for `<head>` metadata (not page copy), not yet reconciled explicitly in docs.
- **EN/RO parity (VERIFIED at the namespace-key level only):** namespace keys match exactly; deep key-by-key parity inside each namespace was NOT independently checked in this pass.

## 6. SEO state

- **Metadata (VERIFIED):** per-locale `generateMetadata` in `layout.tsx` sets title, description, keywords, authors, creator, canonical/alternates, Open Graph, and Twitter card.
- **Canonical (VERIFIED):** `alternates.canonical` set to `/${locale}`.
- **Hreflang (VERIFIED):** `alternates.languages` includes `en`, `ro`, and `x-default: /en`.
- **Robots (VERIFIED):** `app/robots.ts` allows all user agents, points to `https://alexnicoara.com/sitemap.xml`.
- **Sitemap (VERIFIED):** `app/sitemap.ts` lists `/en` and `/ro` with alternates, monthly change frequency, priority 1.
- **Open Graph (VERIFIED):** dynamic `opengraph-image.tsx` with locale-aware tagline/alt text (most recent commit, uses `generateImageMetadata` per Next.js 16 API since static `alt` export is no longer sufficient).
- **Structured data (VERIFIED):** `Person` JSON-LD now present, rendered as a static `<script type="application/ld+json">` in `app/[locale]/layout.tsx` (`personJsonLd` constant). Includes `name`, `url`, `jobTitle`, and `sameAs` (LinkedIn) only — no invented credentials/employers/awards.
- **Locale-specific SEO behavior (VERIFIED):** title/description/keywords all branch on `isRomanian`.

## 7. Performance state

- **Server vs Client Components (VERIFIED):** `Hero.tsx`, `Navbar.tsx`, and `ProjectVideo.tsx` (new) are `"use client"`; all other inspected components (page, layout, Contact, Footer, `FeaturedProjects.tsx` itself) are Server Components by default — consistent with AGENTS.md's "minimize Client Components" rule. `ProjectVideo.tsx` was deliberately kept small/isolated (just the video/poster toggle) rather than converting the whole `FeaturedProjects.tsx` section to a client component.
- **Animation usage (VERIFIED for reduced-motion handling):** `framer-motion`'s `useReducedMotion()` is used in `Hero.tsx` and now also in `ProjectVideo.tsx` (renders the static poster instead of the autoplay video when reduced motion is preferred). Full animation call-site inventory beyond these two NOT VALIDATED.
- **Images/video (VERIFIED, resolved):** `alex-logo.png` reduced 1.3MB → 131KB (320×320, matches 40×40 display size at 2x/retina). `swim4dreams_video.mp4` reduced 6.1MB → 1.8MB via trim (100s → 18s loop) and H.264 re-encode; a 40KB `swim4dreams_poster.jpg` was added as the `poster` attribute / reduced-motion fallback. NOT VALIDATED: whether `alex_hero.jpeg` (284KB) or `swim4dreams_admin.png` (704KB) warrant similar optimization — out of scope for the approved changes so far.
- **Rendering mode (VERIFIED):** static rendering per locale (`generateStaticParams` + `dynamicParams = false`) — homepage is prerenderable.
- **Routing (VERIFIED):** single dynamic `[locale]` segment, no nested route groups beyond the locale root.
- **Bundle/performance concerns (ASSUMPTION):** large video/image assets in `public/` are the most likely performance risk; no evidence of a CDN/media-optimization service being used.
- **Existing optimization work (VERIFIED):** `next/font` (Geist, Geist Mono) used for font loading in `layout.tsx`.

## 8. Conversion / lead-generation state

- **Current CTAs (VERIFIED):** `Contact.tsx` — "start a conversation" mailto button and LinkedIn button; a live project link (`https://72ore-swim4dreams.ro`) appears twice in `FeaturedProjects.tsx`.
- **Contact flow (VERIFIED):** no in-site form; purely `mailto:` + external LinkedIn link + displayed (non-linked) WhatsApp value. No lead is captured or stored anywhere in this codebase.
- **Service positioning (VERIFIED, existence only):** `Services.tsx` renders on the homepage; content not read in this pass.
- **Trust/credibility sections (VERIFIED, existence only):** `About.tsx` and `Experience.tsx` render on the homepage as credibility-building sections; content not read in this pass.
- **Missing conversion elements (OPEN QUESTION, not invented):** no analytics, no CRM/email-capture integration, no case-study detail pages beyond the one featured project link found. Whether this is intentional (early stage) or a gap is a business decision, not something to assume.

## 9. Current project state

- **Implemented capabilities (VERIFIED):** bilingual portfolio structure; consistent cyan brand-token theming (`var(--brand-cyan)`/`var(--brand-cyan-soft)`, no stray Tailwind-default cyan); favicon and live-project-link integration; localized OG image metadata; `Person` JSON-LD structured data; optimized logo and Swim4Dreams video/poster assets; the isolated `ProjectVideo.tsx` client component with reduced-motion handling; Navbar Escape-to-close with focus restore; a `typecheck` script in `package.json`; differentiated `WhatIBuild` (capability showcase) vs `Services` (commercial-engagement menu) copy in EN/RO; removal of unused default Next.js SVG placeholders.
- **Validation status (VERIFIED):** `npm run typecheck`, `npm run lint`, and `npm run build` all pass against the current codebase.
- **Known bugs (NOT VALIDATED):** none identified in this pass; no test suite exists to surface regressions automatically (see §10).
- **Staging/production constraints (NOT VALIDATED):** no staging environment or branch strategy found in the repo (single `main` branch, no CI config files found in top-level listing).

## 10. Known risks / technical debt

- **SEO completeness — VERIFIED, resolved:** `Person` JSON-LD now present (see §6); core metadata/sitemap/robots/OG remain solid.
- **Hardcoded content — VERIFIED, low risk:** locale-conditional SEO strings hardcoded in `layout.tsx` rather than sourced from `messages/*.json` (see §5). Page-body copy itself does appear to route through `next-intl` (`useTranslations` used in `Contact.tsx`).
- **Client-side JS — VERIFIED, minimal:** `Hero`, `Navbar`, and `ProjectVideo` (new, small/isolated) are client components; footprint remains intentionally small.
- **Media optimization — VERIFIED, resolved for logo/video:** `alex-logo.png` and `swim4dreams_video.mp4` optimized (see §7/§9). `alex_hero.jpeg` and `swim4dreams_admin.png` NOT optimized in this pass — still worth revisiting if further performance work is approved.
- **Missing lead capture — VERIFIED gap:** no form, CRM, or analytics integration; conversion relies entirely on `mailto:`/LinkedIn.
- **Service/productization differentiation — VERIFIED, resolved:** `WhatIBuild` and `Services` copy was rewritten to remove overlap and give each section a distinct commercial purpose (see §2).
- **CI/tests — PARTIALLY resolved:** `npm run typecheck` (`tsc --noEmit`) now exists in `package.json`, matching CLAUDE.md's testing workflow. No test files or CI workflow files (e.g. `.github/workflows`) found — that gap remains.

## 11. External systems

- **GitHub (VERIFIED):** remote `https://github.com/NicoaraIoanAlexandru/alexnicoara.git`.
- **Vercel (VERIFIED via API):** a Vercel project named `alexnicoara` (`prj_s3rIqxloVZ6nJApDWyFTswzSCTbQ`) is linked to the `NicoaraIoanAlexandru/alexnicoara` GitHub repo under team `nicoaraioanalexandrus-projects`. No local `vercel.json`/`.vercel/`/`vercel.ts` exists in the repo — the link is account-side (GitHub integration), not a local project config. Deployment branch/workflow (preview vs. production triggers, env vars) NOT further inspected — do not assume production-push behavior without checking.
- **Domain (VERIFIED, referenced only):** `https://alexnicoara.com` is hardcoded as `siteUrl`/`baseUrl` in `layout.tsx`, `sitemap.ts`, `robots.ts` — actual DNS/domain ownership/live status NOT VALIDATED from this session.
- **Analytics:** NOT FOUND — no analytics package or script identified.
- **Email/contact:** no email-sending service; contact is a raw `mailto:` link.
- **Other:** LinkedIn profile link (`linkedin.com/in/nicoara-ioan-alexandru-44a59978`) and one external live client project (`72ore-swim4dreams.ro`) are referenced as outbound links only, not integrations.

## 12. Approval boundaries

Per `CLAUDE.md`/`AGENTS.md`, the following require Alex / Project Director (CTO) approval before any agent proceeds:
- Architecture changes
- Product/business decisions
- Destructive actions (deleting assets, rewriting git history)
- Deployments, pushes to production, domain/DNS changes, production config changes
- Introducing new paid services/dependencies without approval

This document does not authorize any of the above; it is a read-only snapshot.

## 13. Canonical sources

Future agents should read, in this order:
1. `AGENTS.md` — project vision, brand, tech stack, dev rules (source of truth for product/design intent).
2. `CLAUDE.md` — operating workflow, code quality, security, testing, git rules for this agent.
3. This file, `PROJECT_CONTEXT.md` — current-state snapshot (re-verify before trusting if stale).
4. `i18n/routing.ts`, `proxy.ts` — locale/routing behavior.
5. `app/[locale]/layout.tsx` — metadata/SEO source of truth.
6. `messages/en.json` / `messages/ro.json` — all bilingual copy.
7. `components/sections/*` and `components/ui/*` — actual page content and reusable primitives (not fully read in this audit; read directly before touching copy/design in `Services.tsx`, `About.tsx`, `Experience.tsx`, `WhatIBuild.tsx`, `FeaturedProjects.tsx`).

## 14. Open questions

- What is the actual Vercel deployment branch/workflow (preview vs. production triggers, env var setup)? Project linkage is confirmed (§11), but workflow specifics were not inspected.
- Is the WhatsApp value in `Contact.tsx` intentionally non-clickable text rather than a `wa.me` link?
- What lead-capture/analytics strategy (if any) is planned, given the site's stated commercial/conversion purpose but current reliance on `mailto:`/LinkedIn only?
- Should `alex_hero.jpeg` (284KB) or `swim4dreams_admin.png` (704KB) also be optimized, or are they already at an acceptable size/quality tradeoff?

---
**Verification note:** this document was originally produced via read-only inspection of project instructions, git history/status, i18n/routing config, layout/metadata, SEO files, the Contact section, and file listings; `Services.tsx`, `About.tsx`, `Experience.tsx`, `WhatIBuild.tsx`, `FeaturedProjects.tsx`, `Hero.tsx`, `Navbar.tsx`, `Footer.tsx`, and deep per-key i18n parity were **not** read in full at that time. This update pass (2026-09-18) re-verified the specific facts listed as stale in the update request — asset sizes/dimensions (via `ls`/`sips`/`ffprobe`), `package.json` typecheck script, JSON-LD presence (grep), SVG references (grep) and removal, cyan-token usage (grep), and Vercel project linkage (via Vercel API `list_teams`/`list_projects`) — but did not re-read `About.tsx`, `Experience.tsx`, or `Hero.tsx` in full; treat any claim about their exact content as still NOT VALIDATED until read directly.
