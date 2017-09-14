
import Vue from 'vue';
import App from './indexApp';

import store from './store.js';

//添加vue router
import Index from './indexApp'
import Warn from './warnApp.vue';
import VueRouter from 'vue-router';
const routes = [
    {
        path:'/',component:Index,
        children:[
                { path: '', component:Warn },
                { path:'/:userid',  component:Warn } 
        ]
},
   
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
});
router.beforeEach((to, from, next) => {
 
    if (to.matched.length ===0) {                                        //如果未匹配到路由
        from.name ? next({ name:from.name }) : next('/all');
    }else{
        next();
    }
})
new Vue({
    store,
    router: router,
}).$mount('#app')
