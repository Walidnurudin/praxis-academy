import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    data: []
  },
  // syncronus (methods), untuk merubah state, menggunakan commit
  // commit = menjalankan function(mutations)
  mutations: {
    increment(state) {
      state.count++
    },
    // Commit with Payload
    get(state, data) {
      state.data = data
    }
  },
  // asyncronus (methods), menjalankan mutation, menggunakan dispatch
  // dispatch = menjalankan function(actions)
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    get({ commit }) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
          // Commit with Payload
          commit('get', res)
        })
    }
  },

  // getter mengambil/manampilkan state, seperti computed, untuk memfilter state yg dipanggil (computed)
  getters: {
    getCount: function (state) {
      if (state.count % 2 == 0) return `${state.count} even`;
      else return `${state.count} odd`
    },
    getData: function (state) {
      return state.data
    },
    // getDetail: function(state){
    //   let a = state.data.filter((a, i) => i + 1 == this.$route.params.id)
    //   return a
    // }
  },

  modules: {
  }
});