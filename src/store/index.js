import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: '',
    password: '',
    status: false,
    walletName: '小链一号'
  },
  getters: {},
  mutations: {
    saveUserInfo (state, obj) {
      state.name = obj.name
      state.password = obj.password
    },
    saveLoginStatus (state) {
      state.status = true
    },
    saveLoginFalse (state) {
      state.status = false
    },
    altername (state, eisodic) {
      state.walletName = eisodic
    }
  }
})

export default store
