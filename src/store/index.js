import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: '',
    password: '',
    status: false,
    walletName: '小链一号',
    // card: []
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
    },
    // pushCard (state) {
    //   let cardData1 = {
    //     bgColor: 'linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121))',
    //     text: '小链一号'
    //   }
    //   let cardData2 = {
    //     bgColor: 'linear-gradient(-45deg, rgb(73, 81, 254), rgb(45, 119, 255))',
    //     text: '小链二号'
    //   }
    //   let cardData3 = {
    //     bgColor: 'linear-gradient(-45deg, rgb(252, 114, 87), rgb(252, 129, 84))',
    //     text: '小链三号'
    //   }
    //   let data = [cardData1, cardData2, cardData3]
    //   for (let i of data) {
    //     state.card.push(i)
    //   }
    // }
  }
})

export default store
