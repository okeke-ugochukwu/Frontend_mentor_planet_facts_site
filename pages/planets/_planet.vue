<template>
   <div>
      <subHeaderBar 
         :color="planet.assets_color"
         :tab="activeTab"
         @UPDATE_TAB_IN_VIEW="UPDATE_TAB_IN_VIEW"
      />

      <main>
         
         <!-- MARGIN -->
         <div
            class="
               margin w-[87.2%] max-w-[500px] m-auto flex flex-col justify-between items-center
               md:max-w-none xl:w-[77.083%]
            "
         >

            <!-- PLANET IMAGE + DESCR & TABS -->
            <div
               class="w-full mb-7 lg:mb-[27px] lg:flex lg:justify-between "
            >

               <!-- IMAGE -->
               <div 
                  class="
                     h-[304px] flex justify-center items-center
                     md:h-[460px] lg:h-[541px] lg:w-[calc(100%-300px)]
                     xl:w-[calc(100%-350px)]
                  "
               >
                  <picture class="xl:ml-[-130px]">
                     <source 
                        media="(min-width: 1024px)" 
                        :srcset="require(`@/assets/imgs/${planet.name.toLowerCase()}/${planet.images.planet}-desktop.svg`)"
                     >
                     <source 
                        media="(min-width: 768px)" 
                        :srcset="require(`@/assets/imgs/${planet.name.toLowerCase()}/${planet.images.planet}-tab.svg`)"
                     >
                     <img 
                        :src="require(`@/assets/imgs/${planet.name.toLowerCase()}/${planet.images.planet}-mobile.svg`)" 
                        alt=""
                     >                     
                  </picture>
               </div>

               <!-- DESCR & TABS -->
               <div
                  class="
                  md:flex md:justify-between md:items-center
                  lg:flex-col lg:justify-start lg:gap-[39px] lg:w-[300px] lg:items-stretch
                  xl:w-[350px] xl:max-w-[350px]
                  "
               >

                  <!-- PLANET DESCR-->
                  <div class="text-white text-center md:text-left md:w-[49.2%] lg:w-full">
                     <h1
                        class="
                           font-antonio font-medium text-[40px] leading-[51.76px] mb-4
                           md:text-5xl md:leading-[62.11px]
                           xl:text-[80px] xl:leading-[103.52px]
                        "
                     >
                        {{ planet.name.toUpperCase() }}
                     </h1>

                     <p
                        ref="tabContent"
                        class="
                           font-spartan font-normal text-[14px] leading-[22px] mb-8
                           lg:text-[18px] lg:leading-[25px] lg:mb-6
                        "
                     >
                        {{ planet[activeTab].content }}
                     </p>

                     <a 
                        :href="planet[activeTab].source"
                        class="
                           w-max m-auto flex items-center text-sm leading-[25px] opacity-50 font-normal
                           md:m-0 lg:text-sm
                        "
                     >
                        Source : &nbsp; <span class="underline font-bold">Wikipedia</span>
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           width="12" 
                           height="12"
                           class="[&>path]:fill-white [&>path]:opacity-50 ml-1"
                        >
                           <path d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"/>
                        </svg>
                     </a>
                  </div>

                  <!-- TABS -->
                  <div
                     class="
                        hidden md:flex md:flex-col md:gap-[23px] md:w-[40.78%]
                        lg:gap-4 lg:w-full
                     "
                  >
                     <button
                        v-for="item in subHeadings" :key="item.id"
                        class="
                           tab-controls
                           font-spartan font-bold text-white text-[10px] leading-[25px] tracking-[1.93px] px-5 
                           w-full border-solid border-pf-border2 border-[1px] text-left h-[40px]
                           lg:text-xs lg:tracking-[2.57px]
                        "
                        @click="UPDATE_TAB_IN_VIEW(item)"
                        :style="{ 'background': CHECK_ACTIVE_TAB(item) }"
                     >
                        <span class="mr-[17px] opacity-50">{{ item.id }}</span>
                        <span>{{ item.heading.toUpperCase() }}</span>
                     </button>
                  </div>

               </div>

            </div>

            <!-- PLANET PROPERTIES -->
            <div class="w-full flex flex-col gap-2 mb-[47px] md:flex-row md:gap-[30px] md:mb-[36px] lg:mb-[56px]">
               <div
                  v-for="property in Object.entries(planetProperties)" :key="property[0]"
                  class="
                     w-full text-white flex justify-between items-center [&>span]:h-max
                     h-12 border-[1px] border-pf-border2 border-solid px-6
                     md:flex-col md:h-[88px] md:px-[15px] md:justify-start md:items-start
                     md:pt-4 md:gap-[6px] lg:pr-0 lg:h-[128px] lg:pt-5 lg:pl-[23px]
                  "
               >
                  <span class="
                     opacity-50 font-spartan font-bold text-[10px] leading-4 tracking-[0.73px] 
                     lg:text-[11px] lg:tracking-[1px]
                  "
                  >
                     {{ property[0].replace('_', ' ').toUpperCase() }}
                  </span>

                  <span 
                     class="
                     font-antonio font-medium text-[20px] h-12 
                     md:text-[24px] md:leading-[25.88px] tracking-[-0.75px]
                     lg:text-[40px] lg:leading-[51.76px] lg:tracking-[-1.5px]
                     "
                  >
                     {{ property[1].replace('_', ' ').toUpperCase() }}
                  </span>
               </div>
            </div>
            
         </div>
         
      </main>
   </div>
</template>

<script>
   import GET_PLANETS from '@/modules/planetsGetter.js'
import { setTimeout } from 'timers'

   export default {
      name: 'planet',

      head() {
         return {
            title: `Planets Fact | ${this.planet.name}`
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
            activeTab: 'overview',

            subHeadings: [
               {id: '01', heading: 'overview', isActive: true}, 
               {id: '02', heading: 'internal structure', isActive: false},
               {id: '03', heading: 'surface geology', isActive: false}
            ]
         }
      },
   
      computed: {
         planets() {
            return this.$store.state.planets 
         },

         planet() {
            return this.planets.filter(planet => planet.name.toLowerCase() === this.planetName)[0]
         },

         planetProperties() {
            return {
               rotation_time: this.planet.rotation,
               revolution_time: this.planet.revolution,
               radius: this.planet.radius,
               'average_temp.': this.planet.temperature,
            }
         }
      },

      methods: {
         SET_STATE() {
            //CHECK IF THERES DATA IN STATE THEN  ACT ACCORDINGLY
            this.$store.state.planets.length === 0?
               GET_PLANETS(this.$store) : console.log('Data in store')
         },
         
         UPDATE_TAB_IN_VIEW(tabObject) {

            //CHECK IF TAB IS ALREAY ACTIVE
            if(tabObject.heading.includes(this.activeTab)) {
               console.log('Tab already in view')
            }
            else {
               //TURN OFF ACTIVE STATUS FOR ALL HEADINGS
               this.subHeadings.forEach(heading => {
                  heading.isActive = false
               });

               //TURN ON ACTIVE STATUS FOR HEADING BOUND TO THE EVENT'S ORIGIN BUTTON
               var summonedHeading = this.subHeadings.find(object => object.heading.includes(tabObject.heading))
               summonedHeading.isActive = true

               //FADE OUT THE CONTENT PARAGRAPH
               setTimeout(() => {
                  this.$refs.tabContent.style.opacity = '0'
               }, 100)

               //CHANGE TAB > CHANGES CONTENT. FADE IN PARAGRAPH
               setTimeout(() => {
                  switch (true) {
                     case tabObject.heading.includes('overview'):
                        this.activeTab = 'overview'
                        this.$refs.tabContent.style.opacity = '1'
                        break;

                     case tabObject.heading.includes('structure'):
                        this.activeTab = 'structure'
                        this.$refs.tabContent.style.opacity = '1'
                        break;
                  
                     case tabObject.heading.includes('surface'):
                        this.activeTab = 'geology'
                        this.$refs.tabContent.style.opacity = '1'
                        break;
                  }
               }, 500)
            }
         },

         CHECK_ACTIVE_TAB(subHeadingObject) {
            if (subHeadingObject.isActive) {
               return this.planet.assets_color
            }
            else {
               return 'transparent'
            }
         }
      },
   }
</script>

