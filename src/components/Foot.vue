<template>
  <footer>
        <div class="wrap">

            <div class="tit1">
                <ul class="clearfix">
                    <li v-for="item in list">
                        <a :href="item.url">
                            {{item.name}}
                        </a>
                    </li>
                </ul>
            </div>

            <section class="foot-logo">
                <ul class="clearfix">
                    <li>
                        <a class="lo" style="" href="">微博</a>
                    </li>
                    <li>
                        <a class="lo" style=" " href="">qq</a>
                    </li>
                    <li>
                        <a class="lo" style=" " href="">微信</a>
                    </li>
                    <li style="float: right">
                        <a class="lo" style="" href="">百度</a>
                    </li>
                </ul>
            </section>

            <section class="lang-t">
                <a href="">中文</a>
                <span>|</span>
                <a href="">EN</a>
            </section>

            <div class="line"></div>

            <div style="text-align: center;font-size: 12px;color: #999;margin-top: 20px">
                Copyringht &copy 2017 Bitmain Technologies. All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;京公网安备 11010802022514号&nbsp;&nbsp;&nbsp;京ICP备15028173号-2
            </div>
        </div>
  </footer>
</template>

<script>

import Lib from 'assets/js/Lib';

import { XHeader } from 'vux'


export default {
  data() {
    return {
        list:[{
            name: '关于我们', url: '',
        },{
            name:'使用教程',url:'',
        },{
            name:'常见问题',url:'',
        }, {
            name:'工具下载',url:'',
        },{
            name:'服务协议',url:'',
        }]
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

<style lang="less" scoped>
    @import "../assets/css/color";
    @footheight:258px; //底部高度
    @background:#27364E; //背景颜色
    @footwidth:1220px;
    @listwidth:1220-(256*2);
footer{
    background: @background;
}
    .clearfix:after{
       content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }
    .wrap{
        width: @footwidth;
        margin:  0 auto;
        height:@footheight
    }
    .tit1{
        ul{
            width: 708px;
            margin: 0 auto;
            li{
                width: 141.6px;
                display: block;
                float: left;

                a{
                    display: block;
                    font-size:14px;
                    color:#ddd;
                    text-align: center;
                    margin-top: 42px;
                    margin-bottom: 48px;
                }
            }
        }
    }

    .foot-logo{
        width: @footwidth - 538 - 538;
        margin: 0 auto;
        margin-bottom: 27px;
        ul{
            li{
                display: block;
                float: left;
                width: ( @footwidth - 538 - 538 ) / 4;
                text-align: center;
                a{
                    color: #fff;
                    width: 21px;

                    text-indent: -9999px;
                    display: block;
                    margin: 0 auto;
                }
            }


            li:nth-child(1)>a.lo{
                width: 21px;
                height: 16px;
                background:url('./weiboicon.png')
            }
            li:nth-child(2)>a{
                width: 16px;
                height: 18px;
                background:url('./qqicon.png')
            }
            li:nth-child(3)>a{
                width: 21px;
                height: 18px;
                background:url('./weixinicon.png')
            }
            li:nth-child(4)>a{
                width: 20px;
                height: 21px;
                background:url('./baiduicon.png')
            }
        }


    }

    .lang-t{
        text-align: center;
        color:#999;
        font-size: 14px;
        margin-bottom: 28px;
        a{
            color: #999;
            font-size: 14px;
        }
        span{
            color: #999;
        }
    }

    .line{
        border-bottom: 1px solid #3f4b5e;
    }
</style>
