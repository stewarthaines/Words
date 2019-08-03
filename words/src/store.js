import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    accessToken: null,
    files: []
  },
  mutations: {
    storeDropboxAccessToken (state, value) {
      state.accessToken = value
    },
    files (state, value) {
      state.files = value
    }
  },
  actions: {
  }
})
