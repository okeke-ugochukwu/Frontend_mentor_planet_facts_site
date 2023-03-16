export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
   base: '/Frontend_mentor_planet_facts_site/'
 },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Planets Fact',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend Mentor Challenge' },
      { hid: 'keywords', name: 'keywords', content: 'frontend, mentor, challenge, vue, nuxt, okeke-ugochukwu, github, developer, tailwind, planet, facts, wiki,' },
      { hid: 'theme-color', name: 'theme-color', content: '#070724' },

      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Planets Fact Site' },
      { hid: 'og:description', property: 'og:description', content: 'Frontend Mentor Challenge' },
      { hid: 'og:url', property: 'og:url', content: 'https://okeke-ugochukwu.github.io/Frontend_mentor_planet_facts_site' },
      { hid: '', property: '', content: '' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '717' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Website Image Snippet' },
      { hid: 'robots', name: 'robots', content: 'follow, index' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Planets Fact Site' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Frontedn Mentor Challenge' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://okeke-ugochukwu.github.io/Frontend_mentor_planet_facts_site' },
      { hid: 'twitter:image', name: 'twitter:image', content: '#070724' },
    ],
    
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap'}

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   '@/assets/styles/main'
  ],

  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
   '@nuxt/postcss8'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  
  }
}
