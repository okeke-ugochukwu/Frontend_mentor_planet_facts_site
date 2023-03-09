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
            margin w-[87.2%] m-auto flex justify-between items-center
            md:justify-center md:flex-col
            lg:w-[93%] lg:flex-row lg:justify-between
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
               hidden md:flex pt-[39px] pb-[27px]
               w-full lg:py-0 lg:w-max
            "
         >
            <ul
               class="
                  w-full flex justify-between font-spartan
                  lg:gap-[33px] lg:justify-start
               "
            >
               <li 
                  v-for="planet in planets"
               >
                  <nuxt-link 
                     :to=" `/planets/${planet.name.toLowerCase()}` "
                     class="
                        block text-pf-inactive font-bold 
                        text-[11px] leading-[25px] tracking-[1px]
                        hover:text-white 
                        lg:text-[14px] 
                     "
                  >
                     {{ planet.name.toUpperCase() }}
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

         sideBar() {
            return this.$store.state.sideBar
         }
      }
      
   }
</script>

<style lang="scss">
   button.clicked {
     svg {
         & > g {
            fill: rgba(255, 255, 255, 0.5);
         }
     }
   }
</style>

