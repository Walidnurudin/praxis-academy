import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  // syncronus (methods), untuk merubah state, menggunakan commit
  // commit = menjalankan function(mutations)
  mutations: {
    dataAll: function(state, payload){
      state.data = payload;
    }
  },
  // asyncronus (methods), menjalankan mutation, menggunakan dispatch
  // dispatch = menjalankan function(actions)
  actions: {
    get: function({commit}){
      fetch('http://192.168.1.44:8000/toys')
      .then(res => res.json())
      .then(res => {
        commit('dataAll', res)
        console.log(res)
      })
    }
  },

  // getter mengambil/manampilkan state, seperti computed, untuk memfilter state yg dipanggil (computed)
  getters: {
    getData: function(state){
      return state.data
    }
  },

  modules: {
  }
});