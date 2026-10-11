# Adding an event (10 minutes, no coding)

Events live in `src/content/events/<event-slug>/`. Start by copying `example-pongal/`.

```
src/content/events/pongal-2027/
  en.md        ← required: all facts + English text
  id.md        ← optional: title, summary, Bahasa text
  ta.md        ← optional: title, summary, Tamil text
  cover.jpg    ← optional: 2400 px wide, landscape, < 1 MB
  photo-1.jpg  ← optional: post-event gallery
```

## `en.md` fields

| Field | Example | Notes |
|---|---|---|
| `title` | `"Pongal Celebration 2027"` | |
| `summary` | one sentence | Used on cards, banner, Google/social previews |
| `start` / `end` | `2027-01-17T15:00:00+07:00` | **Always include `+07:00`** (WIB) |
| `venue`, `address` | | |
| `mapUrl` | Google Maps share link | |
| `cover`, `coverAlt` | `"./cover.jpg"`, description | Auto-converted to responsive WebP |
| `registrationUrl`, `registrationLabel` | Google Form / Loket / Eventbrite link | Shows the gold "Register now" button |
| `organiser` | defaults to the Sangam | |
| `status` | `scheduled` · `postponed` · `cancelled` · `full` | Badge + schema.org status |
| `featured` | `true` | Puts the event in the full-screen homepage banner with countdown |
| `draft` | `true` | Hidden from the live site; visible in `npm run dev` |
| `highlights` | list of strings | "Event features" — rendered as Highlights |
| `programme` | `- { time: "15:00", item: "Welcome" }` | Rendered as a timetable |
| `gallery` | `- { src: "./photo-1.jpg", alt: "…" }` | Shown after the event |

`id.md` / `ta.md` need only `title`, `summary` (optionally `highlights`, `programme`, `coverAlt`) and body text. If missing, the English version is shown with a "translation will follow" note.

## Automatic behaviour

- Upcoming vs past is decided by the date at **build time**. Vercel rebuilds on every commit; add a daily Deploy Hook (see DEV-HANDOFF-PLAN, task B6) so finished events move to "Past" automatically.
- Homepage banner = the upcoming event with `featured: true`, else the next upcoming event.
- Photo consent: do not publish identifiable photos (especially of children) without consent.
