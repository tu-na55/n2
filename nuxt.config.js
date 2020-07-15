import colors from 'vuetify/es5/util/colors'
// const path = require('path')

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  srcDir: 'src',
  // modulesDir: path.resolve(__dirname, 'node_modules'),
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/variables.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/vuetify', ssr: false },
    // { src: '@/plugins/create-sw.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  loaders: {
    ts: {
      silent: true,
    },
    tsx: {
      silent: true,
    },
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/pwa',
  ],
  pwa: {
    workbox: {
      //     // キャッシュの設定
      //     // dev: true, //開発環境でもPWAできるように
      // swDest: 'static/sw.js',
      // importScripts: ['custom-sw.js'],
      skipWaiting: true,
      clientsClaim: true,
      //     // runtimeCaching: [
      //     //   {
      //     //     // APIから取得した結果
      //     //     urlPattern: '/api/xxxx/.*',
      //     //     handler: 'cacheFirst',
      //     //     method: 'GET',
      //     //     strategyOptions: {
      //     //       cacheExpiration: {
      //     //         maxAgeSeconds: 60 * 60 * 24, // 1日
      //     //       },
      //     //       cacheableResponse: {
      //     //         statuses: [200],
      //     //       },
      //     //     },
      //     //   },
      //     // ],
    },
  },
  manifest: {
    name: 'nuxt-app',
    short_name: 'nuxt-app',
    // title: 'nuxt-title',
    lang: 'ja',
    display: 'standalone',
    // display: 'minimal-ui',

    start_url: '/',
    // start_url: 'index.html',
    // start_url: '/dev',
    // start_url: '/?mode=pwa',   // アイコンから起動した時のURL

    // プッシュ通知用
    // gcm_sender_id: 'XXX',  // Push7の設定を追記
    // gcm_user_visible_only: true,     // Push7の設定を追記

    // theme_color: '#ff4a93', // アプリケーションの既定のテーマ色を定義
    // background_color: '#ffdce6',
    background_color: '#ef6530',
    icons: [
      {
        src: 'icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: 'icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
    // baseURL: "http://localhost:8000/api"
    // baseURL: "http://127.0.0.1:49588/api"
    // baseURL: 'http://django:8000',
    // browserBaseURL: 'http://localhost:8000'
  },
  proxy: {
    '/api': 'http://api:5432',
  },
  watchers: {
    webpack: {
      poll: true,
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|ts)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
  },
  // router: {
  //   middleware: ['route-log'],
  // },
}
