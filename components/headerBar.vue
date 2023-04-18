<template>
   <header
      class="
         relative h-[68px] flex items-center z-10 
         bg-transparent border-solid border-pf-border2 border-b-[1px]
         md:h-[159px] lg:h-[85px] lg:mb-[126px]
      "
   >

      <!-- MARGIN -->
      <div 
         class="
            margin w-[87.2%] h-full m-auto flex justify-between items-center
            md:justify-center md:flex-col
            lg:w-[93.8%] lg:flex-row lg:justify-between
         "
      >
         <!-- SITE PIN -->
         <nuxt-link 
            to="/"
            class="md:pt-8 lg:pt-0"
         >
            <h2
               class="font-antonio text-white text-[28px] leading-[36.23px] tracking-[-1.05px]"
            >
               THE PLANETS
            </h2>
         </nuxt-link>
         
         <!-- MAIN NAVIGATION -->
         <nav 
            class="
               hidden md:flex 
               w-full h-full lg:py-0 lg:w-max
            "
         >
            <ul
               class="
                  w-full h-full flex justify-between items-center font-spartan
                  lg:gap-[33px] lg:justify-start
               "
            >
               <li 
                  v-for="planet in planets" :key="planet.name"
                  class="lg:h-full lg:flex lg:items-center lg:justify-center"
               >
                  <nuxt-link 
                     :to=" `/planets/${planet.name.toLowerCase()}` "
                     class="
                        pt-[39px] pb-[27px]
                        block text-pf-inactive font-bold relative
                        text-[11px] leading-[25px] tracking-[1.5px]
                        hover:text-white 
                        lg:text-[13px] lg:py-0 
                     "
                     
                  >
                     {{ planet.name.toUpperCase() }}

                     <!-- ACTIVE PAGE INDICATOR -->
                     <span class="absolute bottom-0 w-full h-1 block lg:bottom-[unset] lg:top-[-29px]" :style="{ 'background': CHECK_ACTIVE_PAGE(planet.name) }">

                     </span>
                  </nuxt-link>
               </li>
            </ul>
         </nav>

         <!-- HAMBURGER -->
         <button 
            @click="$store.commit('TOGGLE_SWITCH', 'sideBar')"
            :class="{'clicked': sideBar.isShown}" class="md:hidden"
         >
            <svg 
               xmlns="http://www.w3.org/2000/svg" width="24" height="17"
               class="[&>g]:fill-white" 
            >
               <g  fill-rule="evenodd">
               <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g>
            </svg>
         </button>
      </div>

   </header>
</template>

<script>
   export default {
      nme: 'headerBar',

      computed: {
         planets() {
            return this.$store.state.planets
         },

         planet() {
            return this.planets.filter(planet => planet.name.toLowerCase() === this.$route.params.planet)[0]
         },

         sideBar() {
            return this.$store.state.sideBar
         }
      },

      methods: {
         CHECK_ACTIVE_PAGE(planetName) {
            if(this.$route.params.planet === planetName.toLowerCase()) {
               return this.planet.assets_color
            }
            else {
               return 'transparent'
            }
         }
      },

   
      
   }
</script>

<style lang="scss" scoped>
   button.clicked {
     svg {
         & > g {
            fill: rgba(255, 255, 255, 0.5);
         }
     }
   }

   .nuxt-link-active {
      color: white
   }
</style>

