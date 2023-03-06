export const state = () => ({
   planets: []
 })

export const mutations =  ({
   SET_PLANETS(state, planets_data) {
      state.planets = planets_data
   }
 })