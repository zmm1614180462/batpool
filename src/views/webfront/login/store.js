import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    formdata :{} //要提交的表单数据

};


const mutations = {
    //当前矿池种类
    change(state,{type,val}){
        state.formdata[type] = val;
    },

};


const actions = {

};
const getters = {
    count(context){
        return context.count
    },
    getOdd(context) {
        return context.count % 2 === 0 ? '偶数' : '奇数'
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
