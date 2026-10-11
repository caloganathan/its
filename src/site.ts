// Single source of truth for organisation facts. Values come from the uploaded NIB
// and MUST be reconfirmed by the committee before launch (docs/CONTENT-APPROVAL-CHECKLIST.md).
export const SITE = {
  url: 'https://indonesiatamilsangam.com',
  name: 'Indonesia Tamil Sangam',
  nameTa: 'இந்தோனேசியா தமிழ் சங்கம்',
  legalName: 'Persekutuan dan Perkumpulan Paguyuban Indonesia Tamil Sangam',
  email: 'indonesiatamilsangaminfo@gmail.com',
  phoneDisplay: '0851-9554-8554',
  phoneE164: '+6285195548554',
  address: {
    street: 'Citra Tower Kemayoran, Level 3, Unit H1, Kavling A6, Jl. Benyamin Sueb, Kebon Kosong, Kemayoran',
    locality: 'Jakarta Pusat',
    region: 'DKI Jakarta',
    postalCode: '10630',
    country: 'ID',
    short: 'Citra Tower Kemayoran, Level 3, Unit H1, Jakarta Pusat 10630',
  },
  // Add official profile URLs only once the committee confirms them, e.g.
  // { label: 'Instagram', href: 'https://www.instagram.com/<handle>/' }
  social: [] as { label: string; href: string }[],
  logo: '/images/indonesia-tamil-sangam-logo.png',
  ogImage: '/images/og-default.png',
};

export const LANGS = ['en', 'id', 'ta'] as const;
export type Lang = (typeof LANGS)[number];
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', id: 'ID', ta: 'தமிழ்' };
export const LOCALE: Record<Lang, string> = { en: 'en-GB', id: 'id-ID', ta: 'ta-IN' };
export const TIMEZONE = 'Asia/Jakarta';

// Shows a thin "preview" ribbon on every page. Set PUBLIC_PREVIEW=false in Vercel
// Production environment variables once the committee signs off the content.
export const PREVIEW = import.meta.env.PUBLIC_PREVIEW !== 'false';
