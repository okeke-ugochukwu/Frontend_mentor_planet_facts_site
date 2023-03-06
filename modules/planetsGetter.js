const GET_PLANETS = (store) => {
   store.commit('SET_PLANETS', require('/data/db.json'))
}


export default GET_PLANETS;