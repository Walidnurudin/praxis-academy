import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    data: []
  },
  // syncronus (methods), menggunakan commit
  // commit = menjalankan function/mutations yg ada di store
  mutations: {
    increment(state){
      state.count++
    },
    get(state, data){
      state.data = data
    }
  },
  // asyncronus (methods), harus melalui mutation / menjalankan mutation, mrnggunakan dispatch
  // dispatch = mengirim function
  actions: {
    increment({commit}){
      commit('increment');
    },
    get({commit}){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
          commit('get', res)
      })
    }
  },
  // getter mengambil/manampilkan state, seperti computed, untuk memfilter state yg dipanggil (computed)
  getters: {
    getCount: function(state){
      if(state.count % 2 == 0) return `${state.count} even`;
      else return `${state.count} odd`
    },
    getData: function(state){
      return state.data
    }
  },

  modules: {
  }
});