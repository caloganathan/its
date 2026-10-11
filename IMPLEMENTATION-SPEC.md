# Implementation specification

## Objective
Deliver a lightweight, accessible and multilingual official website for Indonesia Tamil Sangam, suitable for public relations, community information, events and cultural education.

## Architecture
- Framework: Astro 5, static output (`output: static`).
- Hosting: Vercel, connected to the Sangam-controlled GitHub repository.
- Content: Markdown in Git, one file per language and page.
- Routes: `/en/`, `/id/`, `/ta/`; common page slugs include `about`, `events`, `culture`, `news`, `gallery`, `resources`, `contact`, `join`, `media`, `privacy`.
- Forms: current prototype validates fields in the browser and opens a `mailto:` draft. It does not transmit or persist submissions. A real registration system requires an approved processing endpoint, privacy notice, access controls, retention policy and spam protection.
- No database, authentication, analytics or third-party form service is included.

## Design requirements
- Institutional identity using the supplied blue logo, navy, ivory and restrained gold.
- Responsive navigation, keyboard-accessible controls, skip link, semantic page headings, visible focus styles and meaningful image alt text.
- Avoid autoplay media, heavy client frameworks and unnecessary scripts.
- Optimise image sizes and use appropriate alternative text; obtain permission for event photographs.

## SEO/AEO requirements
- Unique page title and description.
- Canonical URLs and language alternate links.
- Organization JSON-LD based only on verified organisation/contact information.
- `robots.txt` and `sitemap.xml`.
- Use event structured data only after confirmed events are published, and ensure markup matches visible page content.
- Publish FAQs only when answers are approved and useful.
- Search Console and Bing Webmaster Tools setup after DNS is live.
- Do not promise search rankings, rich results or inclusion in AI answers.

## Deployment
- Vercel build command: `npm run build`.
- Output directory: `dist`.
- Preview deployment for every pull request; production deploy from the approved main branch.
- Domain: `indonesiatamilsangam.com`, subject to ownership/DNS confirmation. Choose a canonical host and redirect the alternate (`www` or apex) consistently.
- Configure DNS only using the records shown in the Vercel project; do not guess records.

## Acceptance criteria
1. `npm run build` completes successfully.
2. All routes render in English, Bahasa Indonesia and Tamil.
3. All internal navigation and language switchers resolve correctly.
4. No invented names, committee positions, history or events are visible.
5. Registration form clearly states that it opens an email draft and does not store data.
6. Contact details are confirmed by the committee.
7. Privacy notice and mission/vision wording are approved.
8. Mobile, keyboard, screen-reader basics, broken links and metadata are reviewed.
9. Sitemap contains every intended indexable page and no draft-only URLs.
10. Domain, SSL, analytics consent (if any), and search console are validated before launch.
