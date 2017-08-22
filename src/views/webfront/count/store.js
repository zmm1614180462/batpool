import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    formdata:{} //要提交的表单数据  手机号 短信验证码

};


const mutations = {
    //修改表单数据
    change(state,{type,val}){
        console.log(type,val)
        state.formdata[type] = val;
    },

};


const actions = {

};
const getters = {
    formdata(state){
        return state.formdata
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
