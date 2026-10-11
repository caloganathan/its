import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://indonesiatamilsangam.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', id: 'id', ta: 'ta' } },
      filter: (page) => page !== 'https://indonesiatamilsangam.com/',
    }),
  ],
});
