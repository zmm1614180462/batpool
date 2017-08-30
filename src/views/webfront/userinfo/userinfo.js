
import Vue from 'vue'
import App from './indexApp'

import store from './store.js'

//添加vue router
import Count from './count.vue'
import MyCount from './mycount.vue'
import VueRouter from 'vue-router'
import Log from './Log.vue'
import Pay from './payApp.vue'
import Index from './indexApp'
import SetUser from './SetUser'   //账户设置
import Message from './message'
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
    {
        path:'/',component:Index,
        children:[
                { path: '', component: MyCount },
                { path: '/count', component: Count },
                { path:'/log',component: Log },
                { path:'/pay',component:Pay},
                { path:'/account',component:SetUser},
                { path:'/message',component:Message},
        ]
},
   
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
})
// 判断路由是否存在，匹配不存在的话 放回上一级路由
router.beforeEach((to, from, next) => {
    if (to.matched.length ===0) {                                        //如果未匹配到路由
        from.name ? next({ name:from.name }) : next('/');
    }else{
        next();
    }
})

 new Vue({
    store,
    router: router,
}).$mount('#app')
