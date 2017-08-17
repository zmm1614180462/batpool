<template>
<div class="body">
   <navbar activeMeau="首页"></navbar>
   <div class="wrapper">
      <p class="tit1">重置您的BATPOOL福池账号密码</p>
      <p class="tit2">只需一个免费账号，即可享受BAT多币种矿池的左右产品和服务</p>

      <div class="login-t">

         <!--手机号忘记密码-->
         <div class="username" style="width:280px;margin: 0 auto ;padding-top: 70px;margin-bottom: 40px">
            <myinput :attr="password"></myinput>
         </div>

         <div class="password" style="width:280px;margin: 0 auto ;margin-bottom: 40px">
            <myinput :attr="again"></myinput>
         </div>
         <div @click="resetPass" class="logo-btn">重置密码</div>

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
import { Cell,Group,Divider } from 'vux'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import css from 'assets/css/common.css'
import username from 'assets/image/username.png'
import password from 'assets/image/password.png'



export default {

  data() {
    return {
        password:{name:'password',type:'password',placeholder:'重置登录密码',url:username},
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
