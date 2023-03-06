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
         'pf-grey': '#838391',
         'pf-desat-teal': '#419EBB',   
         'pf-deep-cream': '#EDA249',   
         'pf-purple': '#6D2ED5',   
         'pf-clay': '#D14C32',   
         'pf-desat-red': '#D83A34',   
         'pf-desat-orange': '#CD5120',   
         'pf-sea-green': '#1EC1A2',  
         'pf-blue': '#2D68F0',   
      },

      fontFamily: {
         antonio: ['Antonio', 'sans-serif'],
         spartan: ['Spartan', 'sans-serif']
      }
    },
  },
  plugins: ['@nuxtjs/tailwindcss'],
}
