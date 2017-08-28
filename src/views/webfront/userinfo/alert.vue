
<template>
    <transition name='fade'>
        <div class="wrap" v-if="currentAlert">
            <div class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;margin-bottom: 21px;cursor: pointer" @click="CloseAlert">X</div>
                    </div>
                    <div style="text-align: center;font-size: 24px;color: #333;margin-bottom: 20px">新建触发条件</div>
                </div>
                <div class="condition">
                    <div class="tit1">触发条件</div>
                </div>
                <div class="con clearfix">
                    <!--绑定计算属性-->
                    <div class="con-left clearfix">

                            <input class="magic-checkbox" type="checkbox" name="layout" id="c1" v-model="single" value="Nomal">
                            <label style="float: left;line-height: 30px" for="c1">开启</label>
                            <div class="inp">算力优于<input type="number">TH/s</div>

                    </div>
                    <div class="con-right clearfix" >
                            <input class="magic-checkbox" type="checkbox" name="layout" id="c2" v-model="single" value="Nomal2" >
                            <label style="float: left;line-height: 30px" for="c2">开启</label>
                            <div class="inp" style="margin-right: 130px">活跃矿工低于<input type="number">TH/s</div>
                    </div>

                </div>
                <div class="contacts" style="margin-bottom: 33px">
                    <div class="tit1">联系人</div>
                </div>
                <!--联系人内容-->
                <div class="con">
                    <!--非编辑状态-->
                    <div class="noedit clearfix" style="margin-bottom: 17px" v-for="item in contacts">
                     <myinput :id="item['id']" :name="item['name']" :email="item.email" :phone="item.phone" @removeDate="remove"></myinput>
                    </div>
                    <!--编辑状态-->
                </div>
            </div>
        </div>

    </transition>

</template>

<script>

import Lib from 'assets/js/Lib';
import Myinput from './input.vue' //使用inpu组件
import {mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    Myinput
  },
  computed:{
      ...mapGetters(['currentAlert'])
  },

  created:function () {
      /**
       * 获取出发条件 url()
       * 获取联系人   url()
       */
   var _this = this;
   Lib.M.ajax({
       url:'http://localhost:3000/alert',
       type:'get',
       success:function (data) {
         _this.contacts = data;
      }
   })

  },
  data () {
    return {
        //编辑模式
        single:[],   //触发条件
        contacts:[], //联系人
      showAlert:true,
    }
  },
  methods: {
      ...mapMutations(['CloseAlert']),
      remove(id){
          var a = [1,2,3,4];
          var _this = this;
          this.contacts.forEach(function (val,index,arr) {
              if(val.id==id){
                  _this.contacts.splice(index,1)
                  return;
              }
          })
          console.log(this.contacts);
      },
      edit(val){
         val.type = !val.type;
      },

  }
}
</script>

<style lang="less" scoped>
    input{
        text-align: center;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
 @blue1 : #D0E9F7; //弹出款下划线颜色
 @blue2 : #1C95D4; //所有按钮颜色
 .in{
     width: 100px;
     height: 200px;
     background: red;
 }
 .wrap{
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: rgba(55,55,55,.6);
     height: 100%;
     z-index: 1000;
 }
 .ivu-checkbox-checked:hover .ivu-checkbox-inner {
     border-color: red!important;
 }
 .content{
     position: relative;
     width: 1220px;
     margin: 0 auto;
     height: 610px;
     background: #fff;
     margin-top:200px;
 }
 .condition{
     margin-left: 24px;
     margin-right: 16px;
     border-bottom: 1px solid @blue1;
     .tit1{
         font-size: 16px;color: #333;margin-bottom: 10px;
     }

 }
 /*表单控价*/
 .con{
     margin-top: 17px;
     margin-bottom: 44px;
     font-size: 14px;
     color:#666;
     margin-left: 100px;
     margin-right: 16px;
     padding-left: 43px;
     .con-left,.con-right{height: 30px;}
     .con-left{
         float: left;
     }
     .con-right{
         float: right;
     }
 }
 /*算力*/
 .inp{
     float: right;
     margin-left: 46px;
     input{
         margin-left: 8px;
         margin-right:11px;
         width: 120px;
         height: 30px;
         outline: none;
         border: 1px solid #ddd;
     }
 }
/*联系人*/
 .contacts{
     margin-left: 24px;
     margin-right: 16px;
     border-bottom: 1px solid @blue1;
     .tit1{
         font-size: 16px;color: #333;margin-bottom: 10px;
     }
 }

 /*--相关的单选复选按钮--*/
 @keyframes hover-color {
     from {
         border-color: #c0c0c0; }
     to {
         border-color: #3e97eb; } }

 .magic-radio,
 .magic-checkbox {
     position: absolute;
     display: none; }

 .magic-radio[disabled],
 .magic-checkbox[disabled] {
     cursor: not-allowed; }

 .magic-radio + label,
 .magic-checkbox + label {
     position: relative;
     display: block;
     padding-left: 30px;
     cursor: pointer;
     vertical-align: middle; }
 .magic-radio + label:hover:before,
 .magic-checkbox + label:hover:before {
     animation-duration: 0.4s;
     animation-fill-mode: both;
     animation-name: hover-color; }
 .magic-radio + label:before,
 .magic-checkbox + label:before {
     position: absolute;
     top: 4px;
     left: 0;
     display: inline-block;
     width: 20px;
     height: 20px;
     content: '';
     border: 1px solid #c0c0c0; }
 .magic-radio + label:after,
 .magic-checkbox + label:after {
     position: absolute;
     display: none;
     content: ''; }

 .magic-radio[disabled] + label,
 .magic-checkbox[disabled] + label {
     cursor: not-allowed;
     color: #e4e4e4; }
 .magic-radio[disabled] + label:hover, .magic-radio[disabled] + label:before, .magic-radio[disabled] + label:after,
 .magic-checkbox[disabled] + label:hover,
 .magic-checkbox[disabled] + label:before,
 .magic-checkbox[disabled] + label:after {
     cursor: not-allowed; }
 .magic-radio[disabled] + label:hover:before,
 .magic-checkbox[disabled] + label:hover:before {
     border: 1px solid #e4e4e4;
     animation-name: none; }
 .magic-radio[disabled] + label:before,
 .magic-checkbox[disabled] + label:before {
     border-color: #e4e4e4; }

 .magic-radio:checked + label:before,
 .magic-checkbox:checked + label:before {
     animation-name: none; }

 .magic-radio:checked + label:after,
 .magic-checkbox:checked + label:after {
     display: block; }

 .magic-radio + label:before {
     border-radius: 50%; }

 .magic-radio + label:after {
     top: 7px;
     left: 7px;
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: #3e97eb; }

 .magic-radio:checked + label:before {
     border: 1px solid #3e97eb; }

 .magic-radio:checked[disabled] + label:before {
     border: 1px solid #c9e2f9; }

 .magic-radio:checked[disabled] + label:after {
     background: #c9e2f9; }

 .magic-checkbox + label:before {
     border-radius: 3px; }

 .magic-checkbox + label:after {
     top: 6px;
     left: 7px;
     box-sizing: border-box;
     width: 6px;
     height: 12px;
     transform: rotate(45deg);
     border-width: 2px;
     border-style: solid;
     border-color: #fff;
     border-top: 0;
     border-left: 0; }

 .magic-checkbox:checked + label:before {
     border: #3e97eb;
     background: #3e97eb; }

 .magic-checkbox:checked[disabled] + label:before {
     border: #c9e2f9;
     background: #c9e2f9; }

</style>
