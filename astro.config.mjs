import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://accessible-astro-docs.netlify.app/',
  integrations: [starlight({
    title: {
      en: 'Accessible Astro Docs'
    },
    logo: { src: './src/assets/img/logo.svg', alt: 'Accessible Astro Docs', replacesTitle: false },
    favicon: 'favicon.svg',
    editLink: { baseUrl: 'https://github.com/markteekman/accessible-astro-docs' },
    sidebar: [
      { label: 'Components', autogenerate: { directory: 'components' } },
      { label: 'Contribute', link: '/contribute' }
    ],
    social: {
      github: 'https://github.com/markteekman/accessible-astro-docs',
    },
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'English',
        lang: 'en'
      }
    },
    head: [
      // favicon fallback for Safari
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.png',
          sizes: '48x48'
        }
      },
      {
        tag: 'script',
        attrs: {
          src: '/scripts/starlight-accessibility.js',
        }
      },
      {
        tag: 'script',
        attrs: {
          src: 'https://tarptaeya.github.io/repo-card/repo-card.js',
          defer: true
        }
      }
    ]
  })]
});