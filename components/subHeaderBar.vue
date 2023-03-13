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
            v-for="item in subHeadings" :key="item.id"
            class="
               py-5 w-[80px] font-bold tracking-[1.93px]
               text-[9px] text-pf-inactive hover:text-white
            "
            @click="(event) => SECLECT_TAB(item, event)"
         > 
            {{ item.heading.toUpperCase() }} 
         </button>

         <!-- ACTIVE INDICATOR -->
         <div class="absolute h-full w-full z-[-1]">
            <span 
               class="w-[80px] block h-1 absolute bottom-0 left-0"
               :style="{ 'background': color }"
               ref="activeTabIndicator"
            >
               
            </span>
         </div>
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

         tab: {
            type: String,
            default: 'overview'
         }
      },

      data() {
         return {
            subHeadings: [
               { id: '01', heading: 'overview' }, 
               { id: '02', heading: 'structure' },
               { id: '03', heading: 'surface' }
            ]
         }
      },

      methods: {
         SECLECT_TAB(tabItem, event) {
            this.$emit('UPDATE_TAB_IN_VIEW', (tabItem))

            this.$refs.activeTabIndicator.style.left = `${event.target.offsetLeft}px`
            
         }
      },
   }
</script>

