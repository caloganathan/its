import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALE, TIMEZONE, type Lang } from '../site';

type Entry = CollectionEntry<'events'>;
export type SangamEvent = {
  slug: string;
  base: Entry;
  local: Entry;
  translated: boolean;
  data: Entry['data'];
  upcoming: boolean;
};

const showDrafts = import.meta.env.DEV;

export async function getEvents(lang: Lang): Promise<SangamEvent[]> {
  const all = await getCollection('events');
  const byId = new Map(all.map((e) => [e.id, e]));
  const now = Date.now();
  const out: SangamEvent[] = [];
  for (const base of all) {
    const [slug, code] = base.id.split('/');
    if (code !== 'en' || !slug) continue;
    if (base.data.draft && !showDrafts) continue;
    const local = byId.get(`${slug}/${lang}`) ?? base;
    const data = { ...base.data, title: local.data.title, summary: local.data.summary,
      highlights: local.data.highlights ?? base.data.highlights,
      programme: local.data.programme ?? base.data.programme,
      coverAlt: local.data.coverAlt ?? base.data.coverAlt,
      registrationLabel: local.data.registrationLabel ?? base.data.registrationLabel };
    const endsAt = (data.end ?? data.start)?.getTime();
    out.push({ slug, base, local, translated: local !== base || lang === 'en', data,
      upcoming: endsAt === undefined ? true : endsAt >= now });
  }
  // Upcoming soonest first, then past newest first; undated items sit after dated upcoming ones.
  const t = (e: SangamEvent) => e.data.start?.getTime() ?? Number.MAX_SAFE_INTEGER;
  const up = out.filter((e) => e.upcoming).sort((a, b) => t(a) - t(b));
  const past = out.filter((e) => !e.upcoming).sort((a, b) => t(b) - t(a));
  return [...up, ...past];
}

export function formatDate(d: Date, lang: Lang, opts: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat(LOCALE[lang], { timeZone: TIMEZONE, ...opts }).format(d);
}

export function dateParts(d: Date, lang: Lang) {
  return {
    day: formatDate(d, 'en', { day: '2-digit' }),
    month: formatDate(d, lang, { month: 'short' }),
    year: formatDate(d, 'en', { year: 'numeric' }),
    weekday: formatDate(d, lang, { weekday: 'long' }),
    time: formatDate(d, 'en', { hour: '2-digit', minute: '2-digit', hour12: false }),
  };
}

export function longDate(e: SangamEvent['data'], lang: Lang) {
  if (!e.start) return '';
  const day = formatDate(e.start, lang, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const from = formatDate(e.start, 'en', { hour: '2-digit', minute: '2-digit', hour12: false });
  const to = e.end ? formatDate(e.end, 'en', { hour: '2-digit', minute: '2-digit', hour12: false }) : '';
  return `${day} · ${from}${to ? `–${to}` : ''}`;
}

export function googleCalendarUrl(e: SangamEvent['data'], url: string) {
  if (!e.start) return undefined;
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const end = e.end ?? new Date(e.start.getTime() + 3 * 3600_000);
  const p = new URLSearchParams({ action: 'TEMPLATE', text: e.title, dates: `${fmt(e.start)}/${fmt(end)}`,
    details: `${e.summary}\n\n${url}`, location: [e.venue, e.address].filter(Boolean).join(', '), ctz: TIMEZONE });
  return `https://calendar.google.com/calendar/render?${p}`;
}
