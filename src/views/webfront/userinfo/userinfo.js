
import Vue from 'vue'
import App from './indexApp'

import store from './store.js'

//添加vue router
import All from './allApp.vue'
import Warn from './mycount.vue'
import VueRouter from 'vue-router'
import Log from './Log.vue'
import Pay from './payApp.vue'

/**
 * /   我的账户
 * "/count" 子账号
 * "/pay" 收款记录
 * "/log" 矿机日志
 * "/assign" 账户设置
 * "/message" 消息盒子
 * @type {[null,null,null,null]}
 */
const routes = [
    { path: '/', component: All },
    { path: '/warn', component: Warn },
    { path:'/log',component: Log },
    { path:'/pay',component:Pay}
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
})

new Vue({
    store,
    router: router,
  render: h => h(App)
}).$mount('#app')
