/***
    This module was setup with server rendering in mind, 
   but github pages doesn't support server activity 
   so the db.json module is instead 
***/

import planets from './db.js';

const GET_PLANETS = (store) => {
   //store.commit('SET_PLANETS', require('/data/db.json'))
   store.commit('SET_PLANETS', planets)
}


export default GET_PLANETS;