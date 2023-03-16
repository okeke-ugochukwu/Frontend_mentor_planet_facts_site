<template>
   <main>

   </main>
</template>

<script>
   import GET_PLANETS from '@/modules/planetsGetter.js'

   export default {
      name: 'IndexPage',

      data() {
         return {
            // db: require('/data/db.json'),
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

      mounted () {
         this.$router.push('/planets/earth');
      },
   }
</script>
