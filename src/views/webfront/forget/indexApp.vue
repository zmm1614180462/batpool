<template>
<div class="body">
   <navbar activeMeau="首页"></navbar>
   <div class="wrapper">
      <p class="tit1">重置您的BATPOOL福池账号密码</p>
      <p class="tit2">只需一个免费账号，即可享受BAT多币种矿池的左右产品和服务</p>

      <div class="login-t">

         <!--手机号忘记密码-->

         <div class="phone">
            <div style="margin-bottom: 10px">
               <img  src="./phone.png" alt="" style="margin-right: 13px ">

               <span style="color:#666;display: inline-block;position: relative;top: -3px">手机号</span>
            </div>

            <div class="input-phone">
               <div style="position: absolute;width: 20px;height: 12px;background: red;top: 9px;"></div>
               <div style="position: absolute;width: 11px;height: 7px;background: cadetblue;left: 29px;top: 11px;"></div>
               <div style="position: absolute;left: 58px">+86</div>
               <input v-model="phone"  style="border: none;padding-left: 89px;font-size: 14px;color: #666" type="text">
            </div>

         </div>



         <div class="password clearfix" style="width:280px;margin: 0 auto ;margin-bottom: 33px;">

            <div style="width: 170px;overflow-x:hidden;float: left">
               <myinput :attr="validate"></myinput>
            </div>

            <a @click="getCode" class="getc" href="javascript:;">获取验证码</a>

            <!--获取验证码-->

         </div>



         <div @click="resetPass" class="logo-btn">重置密码</div>

      </div>
   </div>

</div>
</template>


<script>

import Lib from 'assets/js/Lib';
import Navbar  from 'components/NavBar.vue'
import Foot from 'components/Foot.vue'
import Myinput from 'components/MyInput.vue'
import { Cell,Group,Divider } from 'vux'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import css from 'assets/css/common.css'
import logo from './Combined Shape.png' //短信验证码图片




export default {

  data() {
    return {
        validate:{name:'validate',type:'text',placeholder:'短信验证码',url:logo},
    }
  },
   computed:{
      phone:{
          get(){
              return this.$store.state.formdata.phone
          },
          set(value){
              this.$store.commit('change',{type:'phone',val:value})
          }
      }
   },
  components: {
	Navbar,Myinput,Divider
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
  
  
	
  },
  //相关操作事件
  methods: {
      getCode(){
          let _this = this
          //获取短信验证码调用ajax方法
          Lib.M.ajax({
              url:'http://www.cnblogs.com/jiangxiaobo/p/5425025.html',
              success:function (data) {
                  console.log(data)
              }
          })
      },
      resetPass(){
          let value = this.$store.getters.formdata
          console.log(value);
      }
      
  }
}
</script>

<style lang="less">
   input{
      border: none;
      outline: none;
   }
   .body{
      height: 1080px;
      background: url('./362341852116950014.png');
   }
   img{
      top:0px!important;
   }
    .clearfix:after{
        content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }

   .wrapper{
      width: 1220px;
      margin: 0 auto;
      margin-top: 110px;
      p{

         text-align: center;
      }
      .tit1{
         color: #000;
         font-size:28px;
      }
      .tit2{
         color: #000;
         font-size: 14px;
         margin-top: 21px;
         margin-bottom: 50px;
      }

      .login-t{
         width:390px;
         height: 327px;
         box-shadow: 0 5px 50px 0 rgba(28,149,212,0.30);
         margin: 0 auto;
         background: #fff;
         z-index: 1000;
      }

   }

   .phone{
      width: 280px;
      margin: 0 auto;
      margin-bottom: 34px;
      padding-top: 60px;
      height: 67px;

   }
   /*登录按钮*/
   .logo-btn{
      cursor: pointer;
      color:#fff;
      width: 280px;
      height:50px;
      font-size: 18px;
      text-align: center;
      line-height: 50px;
      margin: 0 auto;
      background:#1879BE;
   }
   /*获取验证码*/
   .getc{
      position: relative;
      top:-5px;
      display: block;
      float: right;
      width: 96px;
      height: 30px;
      border: 1px solid #ddd;
      color: #999;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
   }

   .input-phone{
      position: relative;
      width: 250px;
      margin-left: 30px;
      height: 31px;
      border-bottom: 1px solid #d8d8d8;
      line-height: 31px;
      font-size: 14px;

   }

</style>
