/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './assets/**/*.{css, scss}',
      './components/*.{vue,js}',
      './components/**/*.{vue,js}',
      './pages/*.vue',
      './pages/**/*.vue',
      './*.{vue,js,ts}',
      './nuxt.config.{js,ts}',
  ],

   purge: [
      './assets/**/*.{css, scss}',
      './components/*.{vue,js}',
      './components/**/*.{vue,js}',
      './pages/*.vue',
      './pages/**/*.vue',
      './*.{vue,js,ts}',
      './nuxt.config.{js,ts}',
   ],

  theme: {
    extend: {
      colors: {
         'pf-deep-blue': '#070724',
         'pf-desat-grey': '#38384F',
         'pf-desat-grey2': '#D8D8D8',
         'pf-grey': '#838391',
         'pf-desat-teal': '#419EBB',   
         'pf-deep-cream': '#EDA249',   
         'pf-purple': '#6D2ED5',   
         'pf-clay': '#D14C32',   
         'pf-desat-red': '#D83A34',   
         'pf-desat-orange': '#CD5120',   
         'pf-sea-green': '#1EC1A2',  
         'pf-blue': '#2D68F0',
         'pf-border1': 'rgba(255, 255, 255, 0.089)',   
         'pf-border2': 'rgba(255, 255, 255, 0.2)',   
         'pf-inactive': 'rgba(255, 255, 255, 0.5)'
      },

      fontFamily: {
         antonio: ['Antonio', 'sans-serif'],
         spartan: ['League Spartan', 'sans-serif']
      }
    },
  },
  plugins: ['@nuxtjs/tailwindcss'],
}
