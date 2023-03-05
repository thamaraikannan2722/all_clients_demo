import { createStore } from 'vuex'

export default createStore({
  state: {
    onClickLiveSites: '',
    onClickNC30Sites: '',
    //livesites: "",
  },
  mutations: {
    setLiveSites: (state, payload) => {
      state.onClickLiveSites = payload.onClickLiveSites;
      //return state.livesites=payload;
      console.log(payload);
    },
    setNC30Sites: (state, payload) => {
      state.onClickNC30Sites = payload.onClickNC30Sites;
      //return state.livesites=payload;
      console.log(payload);
    }
  },
  getters: {
    /*getLiveSites(state){
      return state.onClickLiveSites;
    }*/
  },
  actions: {
    /*BANK ({ commit }, payload) {
      commit('SET_BANK', payload.onClickLiveSites)
    }*/
  },
  modules: {
  }
})