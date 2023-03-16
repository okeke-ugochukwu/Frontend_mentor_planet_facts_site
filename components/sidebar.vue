<template>
   <nav 
      class="
         absolute top-[68px] z-10
         h-[calc(100vh-68px)] pt-6 w-full ml-[-100%] 
         bg-pf-deep-blue
      "
      :class="{'open': sideBar.isShown}"
   >  
      <!-- MARGIN -->
      <div class="w-[87.2%] m-auto">
         <ul>
            <li 
               v-for="planet in planets" :key="planet.name" 
               class="
                  font-spartan font-bold text-white
                  [&:not(:first-child)]:border-pf-border1
                  [&:not(:first-child)]:border-t-[1px] [&:not(:first-child)]:border-solid
                  tracking-[1.36px] leading-[25px] text-[15px]
               "
               @click="goToPage(planet.name)"
            >  
               <nuxt-link 
                  :to="`/planets/${planet.name.toLowerCase()}`"
                  class="flex justify-between items-center py-[20px]"    
               >

                  <span class="flex items-center">
                     <!-- PLANET COLOR CODE -->
                     <span 
                        class="w-5 h-5 inline-block mr-[25px] rounded-full "
                        :style="{'background': planet.nav_color}"
                     >

                     </span>

                     <!-- PLANET NAME -->
                     <span>
                        {{ planet.name.toUpperCase() }}
                     </span>
                  </span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                     <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                  </svg>

               </nuxt-link>
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
   export default {
      name: 'sideBar',

      props: {
         activeSubHeading: {
            type: Number,
            default: 1
         },
      },

      computed: {
         planets() {
            return this.$store.state.planets 
         },

         sideBar() {
            return this.$store.state.sideBar
         }
      },
      
      methods: {
         goToPage() {
            this.$store.commit('TOGGLE_SWITCH', 'sideBar')
         }
      },
   }
</script>

<style lang="scss">
   nav.open {
      margin-left: 0;
   }
</style>

