import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // syncronus (methods), menggunakan commit
  // commit = menjalankan function/mutations yg ada di store
  mutations: {
    increment(state){
      state.count++
    }
  },
  // asyncronus, harus melalui mutation / menjalankan mutation, mrnggunakan dispatch
  // dispatch = mengirim function
  actions: {
  },
  // getter mengambil/manampilkan state, seperti computed, untuk memfilter state yg dipanggil (computed)
  getters: {
    getCount: function(state){
      return state.count
    }
  },
  modules: {
  }
});