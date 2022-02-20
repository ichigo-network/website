import i18n from './src/locales'; // eslint-disable-line import/no-import-module-exports
import i18nEn from './src/locales/lang/en'; // eslint-disable-line import/no-import-module-exports

const APP_URL = process.env.APP_URL || 'https://www.ichigo.network';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  srcDir: 'src',
  target: 'static',
  ssr: false,

  // Generate fallback pages: https://nuxtjs.org/docs/configuration-glossary/configuration-generate#fallback
  generate: {
    fallback: true,
  },

  server: {
    host: '0.0.0.0',
  },

  // Environment variables
  publicRuntimeConfig: {
    app: {
      url: APP_URL,
    },
    nav: {
      use: {
        ichigoCrowdsale: {
          page: 'crowdsale',
        },
        ichigoWallet: {
          page: 'wallet',
        },
        sandbox: {
          page: 'sandbox',
        },
        tokenFaucet: {
          page: 'token-faucet',
        },
        faq: {
          page: 'faq',
        },
      },
      develop: {
        documentation: {},
        sdk: {},
      },
      mine: {
        provideStorage: {},
        becomeValidator: {},
        stakeIchigo: {},
      },
      community: {
        github: {
          link: 'https://github.com/ichigo-network/',
          external: true,
        },
        reddit: {
          link: 'https://www.reddit.com/r/ichigonetwork',
          external: true,
        },
        telegram: {
          link: 'https://t.me/ichigonetwork',
          external: true,
        },
        twitter: {
          link: 'https://twitter.com/ichigonetwork',
          external: true,
        },
      },
    },
    link: {
      github: 'https://github.com/ichigo-network/',
      reddit: 'https://www.reddit.com/r/ichigonetwork',
      telegram: 'https://t.me/ichigonetwork',
      twitter: 'https://twitter.com/ichigonetwork',
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: i18nEn.head.title,
    titleTemplate: `%s — ${i18nEn.head.title}`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'author', content: i18nEn.head.title },
      { name: 'description', content: i18nEn.head.description },
      { name: 'keywords', content: i18nEn.head.keywords },

      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },

      { property: 'og:title', content: i18nEn.head.title },
      { property: 'og:description', content: i18nEn.head.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: process.env.APP_URL },
      { property: 'og:image', content: `${APP_URL}/social.png` },
      { property: 'og:site_name', content: i18nEn.head.title },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: i18nEn.head.title },
      { name: 'twitter:description', content: i18nEn.head.description },
      { name: 'twitter:image', content: `${APP_URL}/social.png` },
      { name: 'twitter:site', content: '@ichigonetwork' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ],
  },

  loading: false,

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  tailwindcss: {
    configPath: '../tailwind.config.js',
    exposeConfig: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/i18n', i18n],
    '@nuxtjs/sitemap',
  ],

  // Sitemap: https://sitemap.nuxtjs.org
  sitemap: {
    hostname: APP_URL,
    gzip: true,
    i18n: i18n.defaultLocale,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
