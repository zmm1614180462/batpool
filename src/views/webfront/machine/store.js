import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let state = {
    formdata:{}, //要提交的表单数据  手机号 短信验证码
    login:0,     //登录状态         判断用户是否登录 0 表示没登录  1表示登录
    user:{}, //用户信息，
    currentPage:1,
    atcList:'/', //当前页面路由
    showAlert:true  //弹出层

};


const mutations = {
    //修改表单数据
    change(state,{type,val}){
        state.formdata[type] = val;
    },
    changeUrl(state,{url}){
        state.atcList = url;
    },
    OpenAlert(state){
        state.showAlert = true;
    },
    CloseAlert(state){
        state.showAlert = false;
    }

};


const actions = {

};
const getters = {
    formdata(state){
        return state.formdata
    },
    currentUrl:state => {return state.atcList},
    currentAlert(state){
        return state.showAlert;
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
