# Plan of action — development team handoff

**DRAFT – for internal review.** Owner: Loganathan A · Prepared 11 Oct 2026
Repository: `caloganathan/its` · Working branch: `claude/happy-lamport-cudtsq`

---

## Status (11 Oct 2026)
| Item | Status |
|---|---|
| Code, `vercel.json`, sitemap, robots, preview switch (`PUBLIC_PREVIEW`) | ✅ Done and merged to `main` |
| Indigo Mono theme, globe hero, contact email `contact@indonesiatamilsangam.com`, Management Committee 2026–28 | ✅ Done |
| A2–A4 Vercel project, deploy, domain/DNS | ⏳ **Manual – needs Vercel account + registrar access** (not possible from the code repository) |
| A5 `PUBLIC_PREVIEW=false` launch switch | ⏳ Manual, after section C sign-off |
| Mailbox `contact@…` created | ⏳ Manual (B9) |

## A. Go live in one day (preview URL today, domain when approved)

| # | Task | Who | Time |
|---|---|---|---|
| A1 | Merge branch `claude/happy-lamport-cudtsq` into `main` (via PR). | Dev lead | 10 min |
| A2 | vercel.com → **Add New → Project → Import** `caloganathan/its`. Framework auto-detects **Astro**. Build `npm run build`, output `dist`. Node 20+ (Project Settings → Node.js Version 22.x). | Dev | 10 min |
| A3 | Deploy. Share the `*.vercel.app` URL with the committee. Gold ribbon + `noindex` stay on automatically. | Dev | 5 min |
| A4 | Settings → Domains → add `indonesiatamilsangam.com` and `www.indonesiatamilsangam.com`; set apex as primary, `www` redirects. Enter **exactly** the DNS records Vercel shows at the registrar. | Dev + domain owner | 30 min + DNS propagation |
| A5 | **Launch switch** (only after section C sign-off): Settings → Environment Variables → `PUBLIC_PREVIEW` = `false` (Production) → Redeploy. Ribbon and `noindex` disappear. | Dev lead | 5 min |
| A6 | Google Search Console + Bing Webmaster: verify domain, submit `https://indonesiatamilsangam.com/sitemap-index.xml`. | Dev | 20 min |

Local run: `npm install && npm run dev` → http://localhost:4321/en/ (drafts such as the template event are visible locally only).

## B. Build backlog (prioritised)

| ID | Task | Priority | Effort | Acceptance criteria |
|---|---|---|---|---|
| B1 | **Load the latest event(s)** from the committee brief using `docs/EVENTS-GUIDE.md`; delete `src/content/events/example-pongal/`. | P0 | 1–2 h per event | Event shows on home banner, `/en/events/`, detail page in 3 languages; Google Rich Results Test passes on detail page. |
| B2 | Replace the logo with an official high-resolution **SVG** (or ≥1000 px PNG); regenerate `og-default.png` and `apple-touch-icon.png`. | P0 | 1 h | Logo crisp at 2× on retina; social share preview correct (opengraph.xyz). |
| B3 | Native-speaker review of `src/i18n/ui.ts` and all `id/` and `ta/` pages. | P0 | 0.5 day | Reviewer sign-off recorded in checklist. |
| B4 | Leadership section on About: committee, advisers with approved photos (square, ≥800 px) and short bios. Build as a `people` content collection. | P1 | 0.5 day | Only approved names/photos; consistent card grid. |
| B5 | Real registration: replace `mailto:` form with Tally/Google Forms embed **or** Formspree/Vercel function + spam protection. Update privacy notice first. | P1 | 1 day | Submission received by committee inbox; privacy notice updated; consent captured. |
| B6 | Vercel **Deploy Hook** + GitHub Action cron (daily 00:05 WIB) so past events move automatically. | P1 | 1 h | Event auto-moves to "Past" the day after it ends. |
| B7 | Gallery: content collection by event/year with lightbox; photo consent field required. | P1 | 1 day | Lazy-loaded WebP; alt text on every image. |
| B8 | News: content collection (`date`, `author`, `summary`) with list + article pages + RSS. | P2 | 0.5 day | Latest 3 on homepage. |
| B9 | Create mailbox `contact@indonesiatamilsangam.com` (site already uses it) with SPF/DKIM/DMARC. | **P0** | 1 h | Test mail from the site form reaches the inbox. |
| B10 | Optional hero film: 10–15 s muted loop (≤4 MB, WebM + MP4, poster image), respecting reduced-motion and a pause control. | P3 | 0.5 day | LCP < 2.5 s on 4G. |
| B11 | Privacy-friendly analytics (Vercel Web Analytics or Plausible) — **only** after privacy notice update. | P3 | 1 h | No cookies banner needed if cookieless. |

## C. Launch gate (all must be ✅ before A5)

- [ ] Contact email, phone, office address reconfirmed (`src/site.ts`).
- [ ] Official Tamil name decided (logo spelling **இந்தோனேசியத் தமிழ்ச்சங்கம்** vs site **இந்தோனேசியா தமிழ் சங்கம்**).
- [ ] Vision & mission approved (About page).
- [ ] Quote (Purananuru 192) approved or removed.
- [ ] Bahasa Indonesia and Tamil reviewed by native reviewers.
- [ ] Privacy notice approved.
- [ ] At least one confirmed event or the "next programme" empty state accepted.
- [ ] `npm run build` and `npm run check` pass; Lighthouse ≥ 90 (Performance, Accessibility, SEO) on `/en/`, `/ta/`.
- [ ] Mobile check: iPhone Safari + Android Chrome; keyboard-only navigation; language switcher on every page.
- [ ] Social channel URLs added to `SITE.social` (only official ones).

## D. Where things live (for editors)

| To change… | Edit |
|---|---|
| Phone, email, address, social links, Tamil name | `src/site.ts` |
| Menu labels, buttons, homepage text (all languages) | `src/i18n/ui.ts` |
| About / Culture / Join / Privacy etc. | `src/content/pages/{en,id,ta}/*.md` |
| Events | `src/content/events/<slug>/` — see `docs/EVENTS-GUIDE.md` |
| Colours, fonts | `src/styles/global.css` (`:root`) |
| Logo | `public/images/indonesia-tamil-sangam-logo.png` |

Edits can be made directly in GitHub's web editor → commit → Vercel deploys automatically in ~1 minute.

## E. Suggested timeline

| Week | Deliverable |
|---|---|
| 1 | A1–A3 preview live; B1 event loaded; B2 logo; B3 language review started |
| 2 | B3 complete; B4 leadership; section C sign-off; A4–A6 launch |
| 3–4 | B5 registration, B6 automation, B7 gallery, B8 news |

Effort estimates are indicative – subject to confirmation by the development team.

## F. "The live site looks outdated" — how to check in 2 minutes
1. Open `<your-site-url>/build.json` (or scroll to the footer: "Build abc1234 · date"). Compare the `sha` with the latest commit on `main` in GitHub.
2. Same sha → the deployment is current; hard-refresh (Ctrl/Cmd+Shift+R) or open in a private window.
3. Older sha, or no `build.json` → you are viewing a different deployment/project. This repository is connected to **two** Vercel projects (`its` and `its-cgwv`); keep one, remove the other (Vercel → Project → Settings → Delete), and make sure `indonesiatamilsangam.com` is attached to the one you keep (Settings → Domains), with Production Branch = `main`.
4. Vercel → Deployments: the top "Production" row must show the latest commit and status Ready.
