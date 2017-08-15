import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let state = {
    cointype:['BTC矿池','LTC矿池','ETH矿池','DCR矿池','ETP矿池','HCASH矿池'], //矿池种类
    current_type:'BTC矿池', //当前矿池种类

};


const mutations = {
    //当前矿池种类
    changecoin(state,current_type){
        state.current_type = current_type;
    },
    add(context){
      context.count++
    },
    decreases(context){
        context.count--
    }
};


const actions = {
    add(add){
        setTimeout(function () {
            add.commit('add')
        },2000)

    },
    decreases(decreases){
        decreases.commit('decreases')
    }
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
