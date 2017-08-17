<template>
<div class="body">
   <navbar activeMeau="首页"></navbar>
   <div class="wrapper">
      <p class="tit1">请创建您的BATPOOL福池账号</p>
      <p class="tit2">只需一个免费账号，即可享受BAT多币种矿池的所有产品和服务。</p>

      <div  class="login-t">
         <!--选项卡手机注册 邮箱注册-->
         <div class="tab clearfix">
            <a :class="{act:actTab==0}" @click="changeTab(0)" style="display: block;float: left;width:169px;text-align: center;height: 55px;line-height: 55px" href="javascript:;">手机注册</a>
            <div style="height: 40px;border-left:1px solid #ddd;float: left;margin-top: 8px"></div>
            <a :class="{act:actTab==1}" @click="changeTab(1)" style="display: block;float: left;width:169px;text-align: center;height: 55px;line-height: 55px" href="javascript:;">邮箱注册</a>
         </div>

         <!--手机号注册-->
         <div v-show="isFalse">
            <div class="username" style="width:280px;margin: 0 auto ;padding-top: 56px;margin-bottom: 40px">
               <myinput :attr="username"></myinput>
            </div>
            <!--输入手机号-->
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
            <!--获取手机验证码-->
            <div class="password clearfix" style="width:280px;margin: 0 auto ;margin-bottom: 33px;">

               <div style="width: 170px;overflow-x:hidden;float: left">
                  <myinput :attr="validate"></myinput>
               </div>

               <a @click="getCode" class="getc" href="javascript:;">获取验证码</a>

               <!--获取验证码-->

            </div>



            <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
               <myinput :attr="password"></myinput>
            </div>

            <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
               <myinput :attr="again"></myinput>
            </div>
         </div>

         <!--邮箱注册-->
         <div v-show="!isFalse">
            <div class="username" style="width:280px;margin: 0 auto ;padding-top: 53px;margin-bottom: 40px">
               <myinput :attr="username"></myinput>
            </div>

            <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
               <myinput :attr="email"></myinput>
            </div>
            <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
               <myinput :attr="password"></myinput>
            </div>
            <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
               <myinput :attr="again"></myinput>
            </div>


         </div>

         <div @click="resetPass" class="logo-btn">注册</div>
         <div style="color:#1879BE;width: 320px;font-size: 12px;margin-left:55px;margin-top: 10px;padding-bottom: 57px" ><span style="color:#999">已阅读并同意</span>《用户协议》《服务条款》《免责声明》</div>
         <!--获取验证码-->
      </div>



   </div>

</div>
</template>


<script>

import Lib from 'assets/js/Lib';
import Navbar  from 'components/NavBar.vue'
import Foot from 'components/Foot.vue'
import Myinput from 'components/MyInput.vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import css from 'assets/css/common.css'
import username from 'assets/image/username.png'
import password from 'assets/image/password.png'
import email from 'assets/image/email.png'
import logo from './Combined Shape.png' //短信验证码图片


export default {

  data() {
    return {
        isFalse:true,
        actTab:0,
        validate:{name:'validate',type:'text',placeholder:'短信验证码',url:logo},
        email:{name:'email',type:'email',placeholder:'邮箱',url:email},
        username:{name:'username',type:'text',placeholder:'用户名',url:username},
        password:{name:'password',type:'password',placeholder:'登录密码',url:password},
        again:{name:'again',type:'password',placeholder:'确认登录密码',url:password},
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
	Navbar,Myinput
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
      changeTab(val){
          this.actTab=val;
          if(val==0){
              this.isFalse = true
          }else{
              this.isFalse = false
          }
      },
      resetPass(){
          let _this = this
          let value = _this.$store.getters.formdata
          //发送数据
          Lib.M.ajax({
              url:'http://www.cnblogs.com/jiangxiaobo/p/5425025.html',
              data:{value},
              success:function (data) {
                  console.log(data)
              }
          })
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
         box-shadow: 0 5px 50px 0 rgba(28,149,212,0.30);
         margin: 0 auto;
         background: #fff;
         z-index: 1000;
      }

   }

   .phone{
      width: 280px;
      margin: 0 auto;
      margin-bottom: 38px;
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

   /*tab*/
   .tab{
      width: 340px;
      margin: 0 auto;
      font-size: 16px;
      a{
         color:#666;
      }
      a.act{
         color: #1879BE;
      }
      height: 55px;
      border-bottom: 1px solid #ddd;
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
</style>
