// nuxt.config.ts

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [200, 300, 400, 500, 600, 700],
      Jaro: [200, 300, 400, 500, 600, 700],
      'Bebas Neue': [200, 300, 400, 500, 600, 700]
    },
    display: 'swap',
    preload: true
  },

  colorMode: {
    classSuffix: '', 
  },
  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'id', iso: 'id-ID', file: 'id.json', name: 'Bahasa Indonesia' },
    ],
    defaultLocale: 'id',
    langDir: 'locales/', 
    strategy: 'no_prefix', 
    lazy: true, 
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'id'
    }
  },
  compatibilityDate: '2025-07-15',
})