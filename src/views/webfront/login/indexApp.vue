<template>
<div class="body">
   <navbar activeMeau="首页"></navbar>
   <div class="wrapper">
      <p class="tit1">BATPOOL福池，挖矿从未如此轻松</p>
      <p class="tit2">和全球153个国家，59万用户一起享受挖矿新方式</p>

      <div class="login-t">
         <div class="username" style="width:280px;margin: 0 auto ;padding-top: 53px;margin-bottom: 40px">
            <myinput :attr="username"></myinput>
         </div>

         <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 50px">
            <myinput :attr="password"></myinput>
         </div>

         

         <!--人机交互-->

         <div style="width: 300px;margin: 0 auto;margin-bottom: 48px;margin-left:55px;" class="">
           <div style="text-align:center" v-show="show">正在加载验证码</div>
           <div v-show="!show" style="margin:0 auto;" id="captcha"></div>
         </div>

         <!--人机验证待定-->

         <div @click="login" class="logo-btn">登录</div>

         <div class="forget">
            <a href="">忘记密码 ?</a>
            <a href="">注册账号</a>
            
         </div>
         <div style="width: 280px;margin: 0 auto;margin-top: 42px;font-size: 14px;color: #666!important;margin-bottom: 12px">
            <divider>快捷登录</divider>
         </div>

         <div class="kj">
            <a href="">微信</a>
            <a href="">QQ</a>
         </div>
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
import logo from 'assets/image/username.png'
import logo1 from 'assets/image/password.png'
import {setStore} from 'assets/js/mUtils'
import {validate_code} from 'assets/js/mUtils'

export default {
  created(){
  },
  mounted(){
    var _this = this;
    // 发送验证码
    
   validate_code(function(captchaObj){
                captchaObj.appendTo('#captcha');
                captchaObj.onReady(function () {
                _this.show = false;
                _this.validate = captchaObj.getValidate();
               });
               
            }); 
  },
    computed:mapGetters(['count']),
  data() {
    return {
      username:{name:'username',type:'text',placeholder:'用户名',url:logo},
      password:{name:'password',type:'password',placeholder:'密码',url:logo1},
      show:true,
      validate:{},
    }
  },
   computed:{

   },
  components: {
	Navbar,Myinput,Divider
  },
  //相关操作事件
  methods: {
    login(){
      // 在后台登录成功后写入本地存储
      setStore('login',{username:'张三'});
      if(document.querySelector("[name=geetest_challenge]")&&document.querySelector("[name=geetest_validate]")&&document.querySelector("[name=geetest_seccode]")){
       var 
       geetest_challenge= document.querySelector("[name=geetest_challenge]").value;
       var geetest_validate = document.querySelector("[name=geetest_validate]").value;
       var geetest_seccode  = document.querySelector("[name=geetest_seccode]").value;
      }
      // 获取验证码的值
    
    }
      
  }
}
</script>

<style lang="less" scoped>
   input{
      border: none;
      outline: none;
   }
   .body{
      height: 1080px;
      background: url('./362341852116950014.png');
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
         height: 520px;
         box-shadow: 0 5px 50px 0 rgba(28,149,212,0.30);
         margin: 0 auto;
         background: #fff;
         z-index: 1000;
      }

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

   /*忘记密码*/
   .forget{
      width: 280px;
      margin: 0 auto;
      margin-top: 8px;
      a{
         color:#1C95D4;
         font-size: 12px;
         display: block;
      }
      a:nth-child(1){
         float: left;
      }
      a:nth-child(2){
         float: right;
      }
   }

   /*快捷登录*/
   .kj{
      a{
         display: block;
         width: 30px;
         height: 30px;
         text-indent: -99999px;
         line-height: 30px;background-repeat:no-repeat;

      }
      a:nth-child(1){
         float: left;
         margin-left: 130px;
         background-image: url('./wx.png') ;

      }
      a:nth-child(2){
         float: right;
         margin-right: 130px;
         background-image: url('./qq-oc.png') ;
      }
   }

</style>
