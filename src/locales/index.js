const dateTimeFormats = require('./dateTimeFormats');

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      file: 'lang/en.js',
    },
  ],
  defaultLocale: 'en',
  seo: true,
  lazy: true,
  baseUrl: process.env.APP_URL,
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: false,
  },
  langDir: 'locales/',
  parsePages: false,
  vueI18n: {
    dateTimeFormats,
    fallbackLocale: 'en',
  },
};
