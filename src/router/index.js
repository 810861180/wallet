import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 登录
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login_component/login'], resolve)
    },
    /** 首页（资产） **/
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/views/index'], resolve)
    },
    // 交易详情
    {
      path: '/index/deal',
      name: 'Deal',
      component: resolve => require(['@/views/property/deal'], resolve)
    },
    /** 我的 **/
    {
      path: '/my',
      name: 'My',
      component: resolve => require(['@/views/my/index'], resolve)
    },
    // 管理钱包
    {
      path: '/my/manage',
      name: 'ManageWallet',
      component: resolve => require(['@/views/my/manageWallet'], resolve)
    },
    // 通讯录
    {
      path: '/my/addressBook',
      name: 'AddressBook',
      component: resolve => require(['@/views/my/addressBook'], resolve)
    },
    // 通知公告
    {
      path: '/my/inform',
      name: 'Inform',
      component: resolve => require(['@/views/my/inform'], resolve)
    },
    // 关于我们
    {
      path: '/my/aboutUS',
      name: 'AboutUS',
      component: resolve => require(['@/views/my/aboutUS'], resolve)
    },
    /** 锁仓钱包 **/
    {
      path: '/wallet',
      name: 'Wallet',
      component: resolve => require(['@/views/closeWallet/closeWallet'], resolve)
    },
    /** 资讯 **/
    {
      path: '/info',
      name: 'Info',
      component: resolve => require(['@/views/information/information'], resolve)
    }
  ]
})
