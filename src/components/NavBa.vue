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

     <div class="login clearfix">
         <div class="clearfix userinfo" style="">
             <img style="float:left;margin-top: 7px;margin-right: 5px" src="../assets/image/头像.png" alt="">
             <div style="float:left;"class="lo-name clearfix">
             <div @click="down" style="float:left;">{{username}}</div>
                <div class="" style="float:right;height:60px;width:30px;">
                <div class="down-icon" style="margin-top:17px;margin-left:5px;"></div>
                </div>
            </div>

            
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
import {getStore} from 'assets/js/mUtils'


export default {
  created(){
      this.username = JSON.parse(getStore('login')).username;
      console.log(this.username);
  },  
  data() {
    return {
        activeName:'zh',
        meau:['算力面板','矿机列表','统计','下载','帮助'],
        username:'',
    }
  },
  components: {
  },
  props:['activeMeau'],
  //相关操作事件
  methods: {
	
	toggle:function (val) {
        this.activeName = val;
    },
    down(){

    },  
  }
}
</script>

<style lang="less" scoped>
    @import "../assets/css/color";

    .clearfix:after{
        content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }
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
        width: 190px;
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

.down-icon{
    background: url('../assets/image/spritesheet.png');
    background-repeat: no-repeat;
    width: 18px;
    height: 10px;
    background-position: -91px -5px;
}
.userinfo{
    float:left;margin-top:7px;border:1px solid #ddd;height:52px;line-height:52px;
    border-bottom: none;
    padding-left: 5px;
}
</style>
