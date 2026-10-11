import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
  }),
});

// One folder per event: src/content/events/<slug>/en.md (required) + id.md / ta.md (optional).
// Shared facts (dates, venue, image, links) live in en.md; id/ta files only need title + summary + body.
// See docs/EVENTS-GUIDE.md.
const events = defineCollection({
  loader: glob({ pattern: '**/[a-z][a-z].md', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      start: z.coerce.date().optional(),
      end: z.coerce.date().optional(),
      venue: z.string().optional(),
      address: z.string().optional(),
      mapUrl: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      registrationUrl: z.string().url().optional(),
      registrationLabel: z.string().optional(),
      organiser: z.string().optional(),
      status: z.enum(['scheduled', 'postponed', 'cancelled', 'full']).optional(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      highlights: z.array(z.string()).optional(),
      programme: z.array(z.object({ time: z.string(), item: z.string() })).optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).optional(),
    }),
});

export const collections = { pages, events };
