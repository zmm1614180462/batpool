import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    formdata:{}, //要提交的表单数据  手机号 短信验证码
    login:0,     //登录状态         判断用户是否登录 0 表示没登录  1表示登录
    user:{}, //用户信息，
    currentPage:1,
    atcList:'/', //当前页面路由c
    showAlert:true,  //弹出层 默认要关闭的
    showApi:true, // api弹出层 带参数的
    currentApi:'api', //默认

};


const mutations = {
    //修改表单数据
    change(state,{type,val}){
        state.formdata[type] = val;
    },
    changeUrl(state,{url}){
        state.atcList = url;
    },
    // 要打开的弹出层  由于有多个弹出层  要关闭的弹出层 
    OpenAlert(state){
        state.showAlert = true;
    },
    CloseAlert(state,{type}){
        state.showAlert = false;
    },

    //api 弹出框 
    OpenApi(state,{type}){
        state.showApi = true;
        state.currentApi= type;
    },
    CloseApi(state){
        state.showApi = false;
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
    },

    showApi(state){
        return state.showApi;
    },
    // api 当前那个窗口亮
    currentApi(state){
        return state.currentApi
    }
};


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
