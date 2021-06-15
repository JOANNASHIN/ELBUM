export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ELBUM',
    
    htmlAttrs: {
      lang: 'ko'
    },
    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, viewport-fit=cover, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Elbum' },
      { hid: 'keywords', name: 'keywords', content: 'products, elbum, ELBUM, Elbum, 이엘비유엠' },
      { name: 'naver-site-verification', content: 'f56bb5b6f28814787a8801624ef495b4b570c0a4' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'elbum' },
      { property: 'og:description', content: 'elbum' },
      { property: 'og:image', content: 'https://elbum-e2586.web.app/favicon96x96.png' },
      { property: 'og:url', content: 'https://elbum-e2586.web.app/' },
    ],
    
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '96x96', href: '/favicon96x96.png' }
    ],
    
    bodyAttrs: {
        class: "fb"
    },

    script: [
        {src: "/__/firebase/8.4.1/firebase-app.js"},
        {src: "/__/firebase/init.js"},
    ]
  },

  server: {
      port: 3001
  },

  //dev모드에서 자동 새로고침
  watchers: {
	webpack: {
	  aggregateTimeout: 300,
	  poll: 1000
	}
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/scss/app.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/global.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
