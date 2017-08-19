<template>
<div>
    <div class="wrapper">
        <navbar activeMeau="首页"></navbar>
        <div class="body">
            <p class="t1">多币种矿池&nbsp;&nbsp;&nbsp;一键切换</p>
            <div class="list">
                <ul>
                    <li></li><li></li><li></li><li></li><li></li><li></li><li style="margin: 0"></li>
                </ul>
            </div>
            <div class="go-btn">
                <a href="javaScript:;">进入矿池</a>
            </div>

            <div>
                <ul class="coin_type">
                    <!--最后一个长度为0-->
                    <li :class="{ret:index==cointype.length-1,act_tive:current_type==val}" @click="changecoin(val)" v-for="(val,index) in cointype">
                        {{val}}
                        <div v-show="current_type==val" class="trang"></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <section class="desc">
        <div class="dec-tit">
            <p class="p1">
                为你提供一切增值收益的可能
            </p>

            <p class="p2">
                让挖矿变得更简单
            </p>

            <div class="dec-list">
                <ul class="clearfix">
                    <li v-for="item in provide">
                        <div style="height: 140px;width: 140px;;background:#D8D8D8"></div>
                        <p style="margin-top: 22px;margin-bottom: 25px;font-size: 18px">{{item.name}}</p>
                        <p style="font-size: 14px">{{item.title}}</p>
                    </li>
                </ul>
            </div>

        </div>

    </section>


    <!--挖矿小助手-->
    <section class="mine">

    </section>

    <!--合作伙伴-->

    <section class="partner">
        <div class="pat-warp">
            <p class="p1">合作伙伴</p>
            <p class="p2">30,000+ 点产品设计团队共同选择，50,000+ 的同时协同项目</p>
            <ul class="clearfix">
                <li style="width:210px;display: block;float: left;">
                </li>
                <li v-for="item in 4" style="width:210px;display: block;float: left;margin-left: 40px">
                </li>

            </ul>
            <ul class="clearfix">
                <li style="width:210px;display: block;float: left;">
                </li>
                <li v-for="item in 4" style="width:210px;display: block;float: left;margin-left: 40px">
                </li>
            </ul>
        </div>
    </section>


    <!--现在开始挖矿-->

    <section class="now">

    </section>


    <foot></foot>

</div>
</template>


<script>

import Lib from 'assets/js/Lib';
import Navbar  from 'components/NavBar.vue'
import Foot from 'components/Foot.vue'
import { Cell,Group,Divider } from 'vux'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import css from 'assets/css/common.css'

export default {
    computed:mapGetters(['count']),
  data() {
    return {
        provide:[
            {name:'多币种挖矿',title:'BATPool提供比特币、莱特币等多币种挖矿服务'},
            {name:'多终端支持',title:'不管是电脑、手机号还是平板都能轻松监控收益'},
            {name:'全球化服务',title:'我们针对不同国家的用户进行了专门的优化服务'}
        ]
    }
  },
   computed:{
       ...mapState(['current_type','cointype'])
   },
  components: {
	Navbar,Foot
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
      //点击切换币种
      ...mapMutations(['changecoin'])

      
  }
}
</script>

<style lang="less" scoped>


    .clearfix:after{
        content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }
.wrapper{
	height: 1000px;
	width:1220px;
	margin: 0 auto;
}

.body{
    height: 373px;
    .t1{
        margin-left: 435px;
        height: 47px;
        line-height: 47px;
        font-size: 36px;
        margin-top: 107px;
    }
    .list{
        width: 432px;
        margin: 0 auto;
        margin-top: 18px;
        margin-bottom:63px;
        height: 36px;
        ul{
            list-style: none;
            height: 36px;
            display: block;
            li{
                display: block;
                float: left;
                width: 36px;
                border-radius:50%;
                height:36px;
                background: #D8D8D8;
                margin-right: 30px;
            };
        }
    }

}
.go-btn{
    height: 50px;
    margin-bottom: 52px;
    a{
        display: block;
        width:180px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background:#1879BE 100%;
        font-size: 18px;
        color:#fff;
        margin-left:521px;
    }
}

//币种
.coin_type{
    height: 81px;
    li{
        display: block;
        float: left;
        width: 138px;
        height: 48px;
        line-height: 50px;
        text-align: center;
        margin-left: 39px;
        border: 1px solid #ddd;
        cursor: pointer;
        color: #666;
        position: relative;
    }
    li:nth-child(1){
        margin-left: 0;
    }
    li.ret{
        margin-right: 0;
    }

    li.act_tive{
        border: none;
        width: 140px;
        height: 50px;
        background: #1C95D4;
        color: #fff;
    }

    //三角形
    .trang{
        position: absolute;
        top:50px;
        left: 60px;
        width: 0px;
        height: 0;
        border-top: 10px solid #1C95D4;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
    }
}



    //中间提供收益可能
section.desc{
    background:#1C95D4;
    height: 600px;
    .dec-tit{
        width: 1220px;
        margin: 0 auto;

        .p1{
            font-size: 30px;
            color: #fff;
            padding-top: 100px;
            padding-bottom: 20px;
            text-align: center;
        }

        .p2{
            font-size: 18px;
            color: #fff;
            text-align: center;
            margin-bottom: 74px;
        }
    }

}
    .dec-list{
        ul{
            padding: 0 43px;
            li{
                @width:1220px;
                text-align: center;
                display: block;
                float: left;
                color: #fff;
                width: 295px ;
                div{
                    margin: 0 auto;
                }
            }

            li:nth-child(2){
                margin: 0 124px;
            }
        }
    }


    //挖矿小助手
    .mine{
        background: #fff;
        height: 4434px;
    }

    //合作伙伴
    .partner{
        background:#1C95D4;
        height:575px;
        p{
            text-align: center;
            color: #fff;
        }
        .p1{
            padding-top: 100px ;
            margin-bottom: 20px;
            font-size: 30px;
        }

        .p2{
            font-size: 18px;
            margin-bottom: 97px;
        }

        .pat-warp{
            width: 1220px;
            margin: 0 auto;
            ul{
                margin-bottom:40px;
                li{
                    width: 210px;
                    height: 62px;
                    background:#F3F3F3;
                }
            }
        }
    }

</style>
