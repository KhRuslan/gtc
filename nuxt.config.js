import path from 'path'
import fs from 'fs'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GoToCode | Курсы программирования в Алматы  ',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: 'Качественные курсы по программированию, практические задачи на каждый уровень знаний. Учебные курсы “GoToCode” созданы для тех, кто хочет стать профессионалом в сфере IT.',
      },
      {
        hid: 'keywords',
        name:'keywords',
        content:'HTML CSS, JavaScript, VUE JS, SQL, Programming, Алматы курсы программирования, онлайн курсы программирования'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [


  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/yandex-metrika'
  ],

  yandexMetrika: {
    id: '85155529',
    webvisor: true,
    clickmap:true,
    useCDN:false,
    trackLinks:true,
    accurateTrackBounce:true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    host: '0.0.0.0',
    port: 3000
  }
}
