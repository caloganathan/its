# Indonesia Tamil Sangam — website

Trilingual (English · Bahasa Indonesia · தமிழ்) static website built with Astro 5, deployed on Vercel.

- **Plan & go-live steps:** [`docs/DEV-HANDOFF-PLAN.md`](docs/DEV-HANDOFF-PLAN.md)
- **Design review:** [`docs/DESIGN-REVIEW.md`](docs/DESIGN-REVIEW.md)
- **Adding events:** [`docs/EVENTS-GUIDE.md`](docs/EVENTS-GUIDE.md)
- **Content sign-off:** [`docs/CONTENT-APPROVAL-CHECKLIST.md`](docs/CONTENT-APPROVAL-CHECKLIST.md)

```bash
npm install
npm run dev      # http://localhost:4321/en/
npm run build    # static output in dist/
npm run check    # type check
```

## Structure
```
src/site.ts                 organisation facts (contact, name, social)
src/i18n/ui.ts              all interface text, EN/ID/TA
src/content/pages/{en,id,ta} page copy (Markdown)
src/content/events/<slug>/  one folder per event (en.md + optional id.md, ta.md, images)
src/components/             Header, Footer, Seal, Kolam, EventCard, FeaturedEvent, PageHero, EnquiryForm
src/pages/[lang]/           routes: home, events, event detail, content pages
public/images/              logo, OG image, touch icon
```

The site shows a "preview" ribbon and is `noindex` until `PUBLIC_PREVIEW=false` is set in Vercel's Production environment.
