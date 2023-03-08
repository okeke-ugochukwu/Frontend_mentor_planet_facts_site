<template>
   <div>
      <subHeaderBar 
         :color="planet[0].assets_color"
      />
   </div>
</template>

<script>
   import GET_PLANETS from '@/modules/planetsGetter.js'

   export default {
      name: 'planet',

      head() {
         return {
            title: `Planets Fact | ${this.planet[0].name}`
         }       
      },

      async asyncData({ params }) {
         const planetName = params.planet
         
         return { planetName }
      },

      async fetch() {
         this.SET_STATE();
      },

      data() {
         return {
            
         }
      },
   
      computed: {
         planets() {
            return this.$store.state.planets 
         },

         planet() {
            return this.planets.filter(planet => planet.name.toLowerCase() === this.planetName)
         },
      },

      methods: {
         SET_STATE() {
            //CHECK IF THERES DATA IN STATE THEN  ACT ACCORDINGLY
            this.$store.state.planets.length === 0?
               GET_PLANETS(this.$store) : console.log('Data in store')
         }
      }
   }
</script>

