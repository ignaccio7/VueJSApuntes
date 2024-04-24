import { createStore } from 'vuex'

export default createStore({
  state: {
    //Data
    counter: 1
  },
  getters: {
    //Computed
    multi2(state){
      return state.counter * 2;
    }
  },
  mutations: {
    //Sync
    setCounter(state, value){
      state.counter = value;
    }
  },
  actions: {
    //Async
  },
  modules: {
    //subdivide the store
  }
})
