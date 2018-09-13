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
    // 交易记录
    {
      path: '/index/tradingRecord',
      name: 'tradingRecord',
      component: resolve => require(['@/views/property/tradingRecord'], resolve)
    },
    // 交易详情
    {
      path: '/index/deal',
      name: 'Deal',
      component: resolve => require(['@/views/property/deal'], resolve)
    },
    // 交易记录（! 转账）
    {
      path: '/index/tradingRecord/transfer',
      name: 'transfer',
      component: resolve => require(['@/views/property/transfer'], resolve)
    },
    // 交易记录（! 转账-确认密码）
    {
      path: '/index/tradingRecord/verifyPassword',
      name: 'verifyPassword',
      component: resolve => require(['@/views/property/verifyPassword'], resolve)
    },
    // 交易记录（! 收款）
    {
      path: '/index/tradingRecord/gathering',
      name: 'gathering',
      component: resolve => require(['@/views/property/gathering'], resolve)
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
    // 通讯录(！添加联系人)
    {
      path: '/my/addressBook/linkman',
      name: 'linkman',
      component: resolve => require(['@/views/my/linkman'], resolve)
    },
    // 通讯录(！修改联系人)
    {
      path: '/my/addressBook/alertLinkman',
      name: 'alertLinkman',
      component: resolve => require(['@/views/my/alertLinkman'], resolve)
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
    // 钱包详情
    {
      path: '/my/manage/details',
      name: 'walletDetails',
      component: resolve => require(['@/views/my/walletDetails'], resolve)
    },
    // 钱包详情(！修改名称)
    {
      path: '/my/manage/details/alert',
      name: 'alertName',
      component: resolve => require(['@/views/my/walletDetailss/alterName'], resolve)
    },
    // 钱包详情(！修改密码)
    {
      path: '/my/manage/details/changePassword',
      name: 'changePassword',
      component: resolve => require(['@/views/my/walletDetailss/changePassword'], resolve)
    },
    // 钱包详情(！导出KEY)
    {
      path: '/my/manage/details/deriveKey',
      name: 'deriveKey',
      component: resolve => require(['@/views/my/walletDetailss/deriveKey'], resolve)
    },
    // 钱包详情(！导出私钥)
    {
      path: '/my/manage/details/privateKey',
      name: 'privateKey',
      component: resolve => require(['@/views/my/walletDetailss/privateKey'], resolve)
    },
    // 管理钱包(！创建钱包)
    {
      path: '/my/establishWallet/foundWallet',
      name: 'foundWallet',
      component: resolve => require(['@/views/my/establishWallet/foundWallet'], resolve)
    },
    // 管理钱包(！导入钱包)
    {
      path: '/my/establishWallet/leadWallet',
      name: 'leadWallet',
      component: resolve => require(['@/views/my/establishWallet/leadWallet'], resolve)
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
    },
    // 资讯详情
    {
      path: '/info/details',
      name: 'details',
      component: resolve => require(['@/views/information/infromSon'], resolve)
    }
  ]
})
