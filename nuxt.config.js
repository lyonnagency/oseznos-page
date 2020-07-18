
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: 'Oseznos | El Equipo de Fútbol Americano de Morelia',
    titleTemplate: 'Oseznos de Morelia | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '4)	Oseznos, el equipo de fútbol americano infantil y juvenil para niños de 8 a 16 años en Morelia que pretende formar seres humanos de calidad por medio de este deporte.' },
      { hid: 'theme-color', name: 'theme-color', content: '#17173a' },
      { hid: 'msapplication-navbutton-color', name: 'msapplication-navbutton-color', content: '#17173a' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: '#17173a' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

//     <!-- Chrome, Firefox OS and Opera -->
// <meta name="theme-color" content="#4285f4">
// <!-- Windows Phone -->
// <meta name="msapplication-navbutton-color" content="#4285f4">
// <!-- iOS Safari -->
// <meta name="apple-mobile-web-app-status-bar-style" content="#4285f4"></meta>
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  // Axios
  axios: {
    // proxyHeaders: false
    // baseUrl:''
  },
  server:{
    // host:'192.168.100.4'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   transpile: ["vee-validate/dist/rules"],
    extend (config, ctx) {
    }
  }
}
