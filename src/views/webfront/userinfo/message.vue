<!--我的账户 -->
<template>

 <div>
     <p style="margin-bottom: 20px;font-size: 18px">我的账户</p>
	 <div class="t2" style="margin-bottom: 40px;position: relative">
       <img class="" src="" alt="">
       <div class="info">
           <p>小明同学</p>
           <div class="qq">
               <ul>
                   <li style="margin-right:20px"><img style="width:20px;height:20px" :src="img[0]" alt=""></li>
                   <li style="margin-right:67px"><img style="width:20px;height:20px" src="" alt=""></li>
                   <li>
                       <div style="width:98px;height:28px;border:1px solid 
                       ;"></div>
                       </li>      
                   <li style="margin-right:0"></li>
               </ul>
           </div>
       </div>
     </div>


     <p style="margin-bottom: 20px;font-size: 18px">我的矿机收益</p>
    <!-- 我的矿机收益 -->
     <div class="mechine">
         <ul class="clearfix">
            <li class="clearfix">
                <div class="clearfix"><div style="float:right;margin-top:17px;margin-right:17px;color:#999">矿机：<span style="color:#0C0000">23</span>/40</div></div>
                <div style="width:100px;height:100px;background:#979797;margin:0 auto;margin-top:43px;opacity: 0.37;"></div>
                <p style="text-align:center;margin-top:10px;margin-bottom:11px;">比特币</p>
                <div style="text-align:center">0.2456254 BTC</div>
                <div style="text-align:center;margin-top:50px;color:#999;">昨日收益：0.2451256 BTC</div>
            </li>
            <li class=""  style=""></li>
            <li></li>
            <li style="margin:0;"></li>
         </ul>
     </div>

  

<!--预警日志-->

     <div class="t1">
         <p style="margin-bottom: 20px;font-size: 18px;margin-top:35px;">我的资产</p>
         <div class="count-head clearfix" style="">
                <ul class="clearfix top">
                 <li style="margin-right: 227px">币种</li><li style="margin-right: 256px">余额
                     </li><li style="margin-right: 299px">历史收益
                         </li><li style="">矿外收入</li>
             </ul>
         </div>
         <div class="condition">
             <div v-if="auth==1">
                 <div class="login-t" v-for="item in itemDate">
                     <ul class="clearfix" style="display: block">
                         <li style="width: 259px" class="clearfix" >
                             <div style="dispaly:block;float:left;width:30px;height:30px;background: #A3A3A3;border-radius:50%"></div>
                             <div style="display:block;float:left;line-height:30px;margin-left:13px">达世币（BTC）</div>
                         </li>
                         <li style="width: 286px;">0.231526</li>
                         <li style="width: 365px">0.265489</li>
                         <li style=""> 0.265489</li>
                
                     </ul>
                 </div>

                 <!--分页-->
                 <div class="clearfix" style="margin-top: 56px;margin-bottom: 38px;margin-left: 10%">

                        <pag
                                :total-page="totalPage"
                                :init-page="page"
                                @go-page="goPage"></pag>


                        <div class="clearfix" style="float: left;font-size: 15px;line-height: 32px;margin-left: 30px">
                            <div style="float: left">显示&nbsp;&nbsp;</div>
                            <input class="ys" style="float: left" type="number" v-model="limit">
                            <div style="float: left">&nbsp;&nbsp;条数据</div>
                        </div>
                    </div>


                 </div>

                 <!--每页显示多少条数据-->


             </div>
         </div>
         <alert></alert>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import Pag from 'components/pagination'

import Alert from './alert.vue'
import {mapMutations} from 'vuex'
require('./qq-oc.png');
export default {
  name: 'all',
    beforeMount(){

    },  
    created(){
      this.allDate = 100;
      let _this = this;
      let limit = this.limit;
    },
    computed:{

        totalPage(){ //总页数
            var _this = this;
            Lib.M.ajax({
                'url':'http://localhost:3000/people/?_page=1&_limit='+_this.limit,
                'type':'get',
                success(data){
                    _this.itemDate=data;
                }
            });
            if(this.limit==0){
                this.page=0;
                return Math.ceil(this.allDate/1)
            }else{
                return Math.ceil(this.allDate/this.limit)
            }

        },

    },
  components: {
      Pag,Alert
  },
  data () {
    return {
        img:[require('./qq-oc.png')],
        url:'', //要请求的url链接
        itemDate:[], //联系人信息
        allDate:0,  //总数据条数
        limit:6, //每页显示数据条数
        auth:1,
        page:1, //当前页数
    }
  },
  methods: {
      ...mapMutations(['OpenAlert']),
      goPage(data){
        this.page = data.page;
        var _this = this;
        let limit = _this.limit;

          Lib.M.ajax({
              'url':'http://localhost:3000/people/?_page='+data.page+'&_limit='+limit,
              'type':'get',
              success(data){
                  _this.itemDate=data;
              }
          })
      },
      edit(id){

      },
      remove(id){

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
 .ys{
    margin-left: 2px;
    margin-right: 2px;
    width: 60px;
    height: 32px;
    outline: none;
    border: 1px solid #ddd;
    font-size: 14px;
    vertical-align: top;
}   
.t2{
    height: 190px - 2;
    border: 1px solid #ddd;
    img{
        float: left;display: block;width: 80px;height: 80px;margin-top: 16px;margin-right: 29px;
    }
    .info{
        margin-top:28px;
        p{margin-bottom:28px}
        ul{
            display: block;
            li{
                display: block;float: left;
            }
        } 
    }

}
.clearfix:after{
    content: '';
    height:0;//高度为0
    line-height:0;//行高为0
    display:block;//将文本转为块级元素
    visibility:hidden;//将元素隐藏
    clear:both//清除浮动
}
    .condition{
        padding-left:33px;
        padding-right: 16px;
        border: 1px solid #ddd;
        border-top:none;
        .top{
            height: 55px;border-bottom: 1px solid #ddd;
            li{
                display: block;float: left;
                padding-top: 24px;color: #333;font-size: 16px;
            }
        }
    }

    .noLogin{
        height: 150px;
        margin-left:478px;margin-top: 126px;margin-right: 494px;line-height: 35px
    }
    .noa{
        width: 86px;height: 30px;line-height: 30px;background:#1C95D4;display: block;float: right;text-align: center;
        color: #fff;
    }

    .login-t{
        padding-top: 21px;
        padding-bottom: 9px;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #ddd;
        ul{
            li{display: block;float: left}
            line-height: 30px;
        }
    }

.count-head{
    height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333;
    ul {display: block};li{display: block;float: left}
}

// 我的矿机收益
.mechine{
    ul{
        display: block;
        li{
            display: block;float: left;width: 300px - 2;height: 370px - 2;border: 1px solid #ddd;margin-right: 9px;
        }
    }
}
</style>
