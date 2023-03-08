<template>
   <div class="md:hidden">
      <!-- MARGIN -->
      <div 
         class="
            w-[87.2%] m-auto relative max-w-[450px]
            flex justify-between items-center leading-[10.08px]
             
         "
      >
         <button
            v-for="item in subHeading" :key="item"
            class="
               py-5 w-[80px] font-bold tracking-[1.93px]
               text-[9px] text-pf-inactive hover:text-white
            "
         > 
            {{ item.toUpperCase() }} 
         </button>

         <!-- ACTIVE INDICATOR -->
         <span 
            class="absolute w-[80px] bottom-0 block h-1"
            :style="{ 'background': color }"
         >
            
         </span>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'subHeaderBar',
      
      props: {
         color: {
            type: String,
            default: 'white' 
         },
      },

      data() {
         return {
            subHeading: ['overview', 'structure', 'surface']
         }
      },
   }
</script>

