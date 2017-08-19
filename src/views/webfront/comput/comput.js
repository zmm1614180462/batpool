
import Vue from 'vue'
import App from './indexApp'

import store from './store.js'

//添加vue router
import All from './allApp.vue'
import Warn from './warnApp.vue'
import VueRouter from 'vue-router'
const routes = [
    { path: '/', component: All },
    { path: '/warn', component: Warn }
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
