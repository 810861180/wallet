// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './style/index.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueResource from 'vue-resource'
import vuex from 'vuex'
import store from '@/store/index'

Vue.use(vuex)
Vue.use(VueResource)
Vue.use(iView)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   const nextRoute = 'login'
//   if (nextRoute.indexOf(to.name) >= 0) {
//     next()
//   } else {
//     if (store.state.status) {
//       next()
//     } else {
//       store.commit('saveLoginFalse')
//       return false
//     }
//   }
// })
