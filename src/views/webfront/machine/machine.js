
import Vue from 'vue';
import App from './indexApp';

import store from './store.js';

//添加vue router
import All from './allApp.vue';
import Warn from './warnApp.vue';
import VueRouter from 'vue-router';
import Log from './Log.vue';
import Pay from './payApp.vue';
const routes = [
    { path: '/', component: All },
    { path: '/warn', component: Warn },
    { path:'/log',component: Log },
    { path:'/pay',component:Pay}
];

Vue.use(VueRouter)

const router = new VueRouter({
    routes:routes
});

new Vue({
    store,
    router: router,
  render: h => h(App)
}).$mount('#app');
