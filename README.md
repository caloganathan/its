# Indonesia Tamil Sangam — website prototype

A lightweight, multilingual Astro website for Indonesia Tamil Sangam, designed for static deployment on Vercel and content maintenance through Git-managed Markdown.

## Stack
- Astro 5, static output
- Markdown pages in `src/content/pages/{en,id,ta}/`
- Responsive CSS with minimal client-side JavaScript
- Vercel + GitHub deployment
- English, Bahasa Indonesia, and Tamil routes

## Local development
Requirements: Node.js 20.3+ (use a currently supported LTS release) and npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy to Vercel
1. Put this project in a GitHub repository owned by the Sangam or its authorised organisation.
2. In Vercel, import the repository.
3. Framework preset: Astro (auto-detected). Build command: `npm run build`. Output directory: `dist`.
4. Deploy the preview and validate all languages, pages, mobile layouts, links and form behaviour.
5. Connect `indonesiatamilsangam.com` and `www.indonesiatamilsangam.com` in Vercel, then configure DNS exactly as instructed in the Vercel dashboard and choose one canonical domain.
6. Submit `https://indonesiatamilsangam.com/sitemap.xml` to Google Search Console and Bing Webmaster Tools after launch.

Astro static deployment guidance: https://docs.astro.build/en/guides/deploy/vercel/

## Content editing
Pages are Markdown files under `src/content/pages/{language}/{slug}.md`. Keep the YAML frontmatter fields `title`, `description`, and `eyebrow`. Markdown is rendered by the shared page template.

To publish a page update:
1. Edit the relevant Markdown file.
2. For a new slug, add matching files for `en`, `id`, and `ta` unless the committee approves a language-specific launch exception.
3. Update `src/layouts/Base.astro` navigation if the page belongs in main navigation.
4. Update `public/sitemap.xml` if a new route is added.
5. Run `npm run build`, review the Git diff, and merge through a pull request.

## Important implementation notes
- The root `/` currently redirects to `/en/`.
- Main pages are available under `/en/`, `/id/`, and `/ta/`.
- `join`, `media`, and `privacy` are supporting pages linked in the footer or content.
- The registration form currently opens a prefilled `mailto:` draft. It does not store or submit data to a server. This is intentional for the prototype; it is not a full membership application backend.
- The phone, email and address originate from the uploaded NIB and must be reconfirmed by the committee before public launch.
- Social links have not been supplied; none are invented.
- No events, committee members, advisers, dates, biographies or historical claims have been invented.
- The proposed vision and mission wording is explicitly draft copy and requires committee approval.
- The privacy policy is draft copy. If hosted form processing, analytics, mailing lists or membership storage are added, review it and the applicable privacy requirements before launch.
- The logo is the supplied 218×224 PNG. Replace with a higher-resolution official asset if available.
- Verify translated content with a competent Bahasa Indonesia and Tamil reviewer before publication.

## Required before production launch
See `docs/CONTENT-APPROVAL-CHECKLIST.md` and `docs/IMPLEMENTATION-SPEC.md`.
