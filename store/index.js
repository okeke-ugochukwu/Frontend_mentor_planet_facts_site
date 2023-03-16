export const state = () => ({
   planets: [],

   sideBar: {
      isShown: false
   }

 })

export const mutations =  ({
   SET_PLANETS(state, planets_data) {
      state.planets = planets_data
   },

   TOGGLE_SWITCH(state, switchToToggle) {
      state[switchToToggle].isShown ? 
         state[switchToToggle].isShown = false :
         state[switchToToggle].isShown = true
   }
 })