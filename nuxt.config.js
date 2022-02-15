import i18n from './src/locales'; // eslint-disable-line import/no-import-module-exports
import i18nEn from './src/locales/en'; // eslint-disable-line import/no-import-module-exports

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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
};
