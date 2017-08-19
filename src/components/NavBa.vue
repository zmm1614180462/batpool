<template>
  <div class="wrap">
	<div class="logo">
        <a href="/">BATPOOL</a>
    </div>
    <div class="lang">
        <div class="la-lf"></div>
        <div class="la-rt">BTC矿池</div>

    </div>
     <div class="ul">
         <ul>
             <li v-for="item in meau">
                 <a :class="{actMeau:activeMeau==item}" href="javascript:;">{{item}}</a>
             </li>
         </ul>
     </div>

     <div class="login">
         <img style="float:left;margin-top: 14px;margin-right: 5px" src="../assets/image/头像.png" alt="">
         <div class="lo-name">

         </div>

         <div class="news">
             <img src="../assets/image/信息.png" alt="">
             <div class="count" style="" >2</div>
         </div>
     </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import headcoin from 'assets/image/头像.png'



export default {
  data() {
    return {
        activeName:'zh',
        meau:['算力面板','矿机列表','统计','下载','帮助'],
    }
  },
  components: {
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

<style lang="less" scoped>
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
        margin: 15px 18px 16px 0;
        a{
            display: block;
            height: 29px;
            text-indent: -999px;
            width: 155px;
            background: url('./Bitmap.png');
        }
    }

    .lang{
        height: 32px;
        margin-top: 15px;

        font-size:14px;
        float: left;
        .la-lf{
            height: 32px;
            width: 32px;
            float: left;
            border-radius:50%;
            background:#d8d8d8;
        }
        .la-rt{
            color:@blue1;
            float: left;
            margin-top: 8px;
            margin-left: 10px;
            font-size: 14px;
        }
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
        margin-left: 324px;
        height: 60px;
        background: #fff;
        ul{
            li{
                height: 60px -19;
                margin-top: 19px;
                float: left;
                display: block;
                list-style: none;
                a{
                    font-family:"Microsoft YaHei",Arial,Helvetica,sans-serif,"SimSun";
                    color: #333;
                    font-size: 16px;
                    display: block;
                    margin-left: 44px;
                }

            }
            li:nth-child(1){
                a{
                    margin-left: 0px;
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
        width: 1220px - 1052;

        font-size: 14px;
        float: right;
        height: 60px;
        line-height: 60px;
        .count{
            position: absolute;font-size: 12px;width: 15px;height: 15px;border-radius: 50%;line-height: 15px;
            background: rgba(28, 149, 212, 0.78);top:8px;right: -8px;
            text-align: center;color: #fff;
        }

    }


    .news{
        cursor: pointer;
        margin-right: 9px;
        float: right;
        position: relative;
        img{
            margin-top: 19px;
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
