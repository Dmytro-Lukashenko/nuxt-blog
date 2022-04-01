// eslint-disable-next-line nuxt/no-cjs-in-config
const bodyParser = require('body-parser')

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'icons/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap',
      },
    ],
  },
  loading: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/global-components.js', '~plugins/date-filter.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      'https://nuxt-blog-37d55-default-rtdb.firebaseio.com/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://nuxt-blog-37d55-default-rtdb.firebaseio.com/',
    fbAPIKey: 'AIzaSyCnX7V7hu19JbJCQskl5j_jeAcxZFCJpYs',
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  serverMiddleware: [bodyParser.json(), '~/api'],
}
