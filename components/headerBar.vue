<template>
   <header
      class=""
   >
      <div 
         class="
            margin w-[87.2%] m-auto flex justify-between items-center h-[68px]
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
         <button>
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
      
      setup () {
         

         return {}
      }
   }
</script>

