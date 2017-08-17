<template>
  <div class="wrap">
	<div class="logo">
        <a href="/">BATPOOL</a>
    </div>
    <div class="lang">
        <a :class="{act:activeName=='zh'}" @click="toggle('zh')" href="javascript:;">中文</a>
        <span>/</span>
        <a :class="{act:activeName=='en'}" @click="toggle('en')" href="javascript:;">EN</a>
    </div>
     <div class="ul">
         <ul>
             <li v-for="item in meau">
                 <a :class="{actMeau:activeMeau==item}" href="javascript:;">{{item}}</a>
             </li>
         </ul>
     </div>

     <div class="login">
         <a style="margin-right: 26px" href="javascript:;">登录</a>
         <a class="reg-act" href="">注册</a>
     </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XHeader } from 'vux'


export default {
  data() {
    return {
        activeName:'zh',
        meau:['首页','统计','下载','帮助'],
    }
  },
  components: {
	XHeader
  },
  props:['activeMeau'],
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
	
	toggle:function (val) {
        this.activeName = val;
    }
	
      
  }
}
</script>

<style lang="less">
    @import "../assets/css/color";

    .wrap{
        height: 60px;
        width: 1220px;
        margin: 0 auto;
        font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"SimSun";
    }
    .logo{
        height: 29px;
        float: left;
        margin: 15px 41px 16px 0;
        a{
            display: block;
            height: 29px;
            text-indent: -999px;
            width: 155px;
            background: url('./Bitmap.png');
        }
    }

    .lang{
        font-size:14px;
        float: left;
        margin-top:28px;
        margin-bottom: 13px;
        a{
            display: block;
            float: left;
        }
        span{
            display: block;
            float: left;
            margin: 0 9px;
        }

    }
    .act{
        color:@blue1;
    }


    .ul{
        float: left;
        margin-left: 404px;
        margin-right: 80px;
        height: 60px;
        background: #fff;
        ul{
            li{
                height: 58px;
                line-height: 60px;
                width: 80px;
                float: left;
                display: block;
                list-style: none;
                a{
                    font-size: 16px;
                    display: block;
                    height: 58px;
                    line-height: 60px;
                    text-align: center;
                }
            }
        }
    }
    .reg-act{
        height: 40px;
        width: 90px;
        margin-top: 10px;
        color: #fff!important;
        background:@blue1;
        text-align:center;
        line-height: 40px;
    }

    .actMeau{
        border-bottom: 2px solid #1AA8F0;
    }

    .login{
        font-size: 14px;
        float: left;
        height: 60px;
        line-height: 60px;
        a{
            display: block;
            float: left;
            font-size: 16px;
            color:@blue1;
        }
    }
.headfix{
	position: fixed!important;
	z-index: 77;
	width: 100%;
	left: 0;
	top: 0;
}

.headMargin{
clear:both;
height:50px;
}

</style>
