<template>
   <header
      class="
         relative h-[68px] flex items-center z-10 
         bg-transparent border-solid border-pf-border2 border-b-[1px]
      "
   >
      <div 
         class="
            margin w-[87.2%] m-auto flex justify-between items-center
         "
      >
         <!-- SITE PIN -->
         <nuxt-link to="/">
            <h1
               class="font-antonio text-white text-[28px] leading-[36.23px] tracking-[-1.05px]"
            >
               THE PLANETS
            </h1>
         </nuxt-link>
         
         <!-- MAIN NAVIGATION -->
         <nav>

         </nav>

         <!-- HAMBURGER -->
         <button 
            @click="$store.commit('TOGGLE_SWITCH', 'sideBar')"
            :class="{'clicked': sideBar.isShown}"
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

