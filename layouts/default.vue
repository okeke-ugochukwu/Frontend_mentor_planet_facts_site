<template>
  <div 
      class="relative"
  >
      <headerBar />

      <sideBar />

      <nuxt/>
  </div>
</template>

<script>
   import GET_PLANETS from '@/modules/planetsGetter.js'
   
   export default {
      data() {
         return {
            
         }
      },

      async fetch() {
         this.SET_STATE();
      },
      
      computed: {
         planets() {
            return this.$store.state.planets 
         }
      },

      methods: {
         SET_STATE() {
            //CHECK IF THERES DATA IN STATE THEN ACT ACCORDINGLY
            this.$store.state.planets.length === 0?
               GET_PLANETS(this.$store) : console.log('Data in store')
         }
      },

   }
</script>


