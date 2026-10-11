# Design & technical review — Indonesia Tamil Sangam website

**Status:** DRAFT – for internal review · Reviewed 11 Oct 2026 · Branch `claude/happy-lamport-cudtsq`

## 1. Verdict on the uploaded draft

| # | Finding | Severity | Resolution in this branch |
|---|---|---|---|
| 1 | Repo was uploaded **flat** (all files at root). Astro could not build; `[...slug].astro` imported `../../layouts/Base.astro`, which did not exist. | Blocker | Restored `src/`, `public/`, `docs/` structure from the zip; zip removed from repo. |
| 2 | Root `.md` files were **Bahasa Indonesia only**; EN and Tamil pages existed only inside the zip. | Blocker | All three languages restored under `src/content/pages/{en,id,ta}/`. |
| 3 | **Logo interior is transparent** — on any dark background the emblem becomes invisible (blue on navy). | High | New `Seal` medallion (ivory disc + gold ring) used in header, hero, footer, OG image, touch icon. |
| 4 | Internal editorial notes were **rendered publicly** ("Verification required", "No names have been inferred…", "Do not publish tentative dates…"). | High | Public copy rewritten in a welcoming, institutional tone; all controls moved to `docs/` and a site-wide preview ribbon. |
| 5 | No event system — events page was static text. | High | Content-collection event engine: featured banner + live countdown, upcoming/past auto-split by date, detail pages, Google Calendar link, `Event` JSON-LD. |
| 6 | No mobile menu; 8 nav items wrapped into a 4×2 grid on phones. | Medium | Full-screen animated mobile menu, ESC-to-close, focus-safe. |
| 7 | Form options, footer links and "Media & Press" untranslated. | Medium | All UI strings centralised in `src/i18n/ui.ts` (EN/ID/TA). |
| 8 | `tel:085195548554` not dialable from abroad; JSON-LD phone local format. | Medium | E.164 `+6285195548554` everywhere; display `0851-9554-8554`. |
| 9 | OG image was the 218×224 logo (poor social previews). | Medium | 1200×630 branded `og-default.png`. |
| 10 | Hand-maintained `sitemap.xml` (will drift as events are added). | Low | `@astrojs/sitemap` generates `sitemap-index.xml` with hreflang. |
| 11 | Draft site would be indexable by Google before approval. | Low | `noindex` + ribbon while `PUBLIC_PREVIEW` ≠ `false`. |
| 12 | Root `/` redirect relied on Astro meta refresh only. | Low | Vercel edge redirect `/ → /en/` + HTML fallback. |

## 2. Design direction — "cinematic, quiet, institutional"

- **Palette** from the logo: ink `#06182b`, navy `#0b2a4a`, royal `#1f3f94`, temple gold `#c9a45b`, ivory `#f6f1e7`.
- **Type:** Fraunces (display serif) + Inter (text); Noto Serif/Sans Tamil take over automatically on `/ta/`. All fonts are **self-hosted** — no Google Fonts call, no third-party data transfer.
- **Signature motif:** a kolam-inspired line mandala (pure SVG, 0 KB images) that draws itself in the hero and rotates very slowly; reused at low opacity in page headers and footer.
- **Cinematic rhythm:** dark full-screen hero → light pillars → ivory Purananuru 192 quote ("யாதும் ஊரே; யாவரும் கேளிர்") → full-bleed dark featured-event banner with countdown → event cards → explore tiles → gold call-to-action → dark footer.
- **Motion:** scroll-reveal fades, hover lifts; all disabled under `prefers-reduced-motion`. No autoplay media.
- **Performance:** static HTML, ~3 tiny inline scripts, responsive WebP via `astro:assets` for event photos.

Screenshots: `docs/screenshots/`.

## 3. Items requiring a committee decision

| Item | Why it matters |
|---|---|
| **Official Tamil name.** The logo reads **இந்தோனேசியத் தமிழ்ச்சங்கம்**; the draft site used **இந்தோனேசியா தமிழ் சங்கம்**. | Must be consistent. One-line change in `src/site.ts` (`nameTa`). |
| Vision & mission wording | Shown publicly on About once `PUBLIC_PREVIEW=false`. Approve before switching off preview. |
| Quotation (Purananuru 192, Kaniyan Poongundranar) and its EN/ID renderings | Cultural/editorial choice; replace or remove if not preferred. |
| Gmail address as official contact | Recommend `info@indonesiatamilsangam.com` once the domain is live (credibility, deliverability). |
| Privacy notice | If any hosted form, mailing list or analytics is added, the notice must be reviewed against Indonesia's Personal Data Protection Law (UU No. 27 Tahun 2022) — local counsel review recommended. [Unverified for this specific use case] |
| Tamil & Bahasa copy | Written/edited by AI; **must** be reviewed by native reviewers before launch. |
