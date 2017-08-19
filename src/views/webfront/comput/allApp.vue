
<template>
 <div >
     <!--预留echart位置-->
     <div style="height: 428px;margin-bottom: 20px;background: red" class="echart"></div>

     <div>
         <div class="as-le">
             <div class="list1">
                 <div class="p1">
                     <span>付款记录</span>
                     <a href="javascript:;">更多</a>
                 </div>

                 <div class="con">
                    <div class="t1">
                        <ul class="clearfix">
                            <li style="margin-left: 10px">币种</li><li style="margin-left: 34px;">地址与交易</li><li style="margin-left: 77px">日均算力</li><li style="margin-left: 65px">当日理论收益（1TH/s）</li><li style="margin-left: 15px">收益</li><li style="margin-left: 90px">时间</li>

                        </ul>

                        <div class="mpay" v-for="item in pays">
                            <ul class="clearfix">
                                <li style="margin-left: 12px"><div style="width: 26px;height: 26px;border-radius: 50%;background: #d8d8d8;margin-top: 14px">

                                </div></li><li style="margin-left: 31px"><a class="a1"  href="">我的钱包</a> <a class="a2" href="">查看交易</a></li><li style="margin-left: 19px">{{item.day}} TH/s

                            </li><li style="margin-left: 29px">{{item.earn}} BTC

                            </li><li style="margin-left: 68px">{{item.all}} BTC

                            </li><li style="margin-left: 28px">{{item.time}}

                            </li>
                            </ul>
                        </div>


                    </div>
                 </div>
             </div>

             <!--矿机日志-->
             <div class="list2">
                 <div class="p1">
                     <span>矿机日志</span>
                     <a href="javascript:;">更多</a>
                 </div>

                 <div class="con2">
                    <div v-for="item in log" class="log">
                        <div class="t-left">
                            {{ item.name }}矿机上线，当前矿机状态为：{{ item.now }}／{{ item.all }} 台，当前实时算力：{{ item.comput }} TH/s。
                        </div>
                        <div class="t-right">
                            {{ item.time }}
                        </div>
                    </div>
                 </div>

             </div>

         </div>
         <div class="as-rt">
             <!--24小时收益-->
             <div class="rt-list1">
                 <div style="height: 120px;background: #D0E9F7;text-align: center">
                     <p style="font-size: 26px;color: #333;padding-top: 34px;margin-bottom: 10px">{{ earn }}BTC</p>
                     <p style="font-size: 16px;color: #333">24小时收益</p>
                 </div>

                 <div style="height: 79px;border: 1px solid #ddd;border-top:0;">
                     <ul class="clearfix" style="display: block;padding: 0 30px">
                         <li style="display: block;float: left;width: 108px;">
                             <div style="margin-top: 18px;margin-bottom: 6px">22.3232</div>
                             <div>累计产出</div>
                         </li>
                         <li style="display: block;float: left;text-align: center;width: 123px;">
                             <div style="margin-top: 18px;margin-bottom: 6px">0.3232</div>
                             <div style="position: relative">分红
                                 <div style="top:-8px;right:27%;position: absolute;width: 14px;height: 14px;border-radius: 50%;background: #999;font-size: 12px;color: #fff">?</div></div>

                         </li>
                         <li style="display: block;float: right;text-align: center;">
                             <div style="margin-top: 18px;margin-bottom: 6px">1.3232</div>
                             <div>余额</div>
                         </li>
                     </ul>

                 </div>



             </div>
             <!--矿机设置-->
             <div class="rt-list2">
                 <div style="height: 60px;line-height: 60px;background: #D0E9F7;font-size: 16px;padding-left: 20px">矿机设置</div>
                 <div style="height: 129px;border: 1px solid #ddd;border-top:none;">
                     <div style="margin-left: 24px">
                         <p style="padding-top: 13px;margin-bottom: 5px">stratum+tcp://stratum.batpool.com:3333</p>
                         <p>stratum+tcp://stratum.batpool.com:2523</p>
                         <a href="javascript:;" class="tz-help" >获取帮助</a>
                     </div>
                 </div>
             </div>
             <div class="rt-list3">
                 <div class="p1">
                     <span>预警日志</span>
                     <router-link to='/warn'>
                         <a href="javascript:;">更多</a>
                     </router-link>

                 </div>

                 <div  class="warn-log">
                     <div v-for="item in 2" class="log-new clearfix">
                         <div class="clearfix" style="margin-top: 6px;margin-bottom: 7px"> <div style="display: block;float: left;color: #333">小明（+86 12545621523）</div>
                             <div style="display: block;float:right;color: #333">发送成功</div></div>

                         <div style="color: #666;">
                             您的TEXT1下的BTC活跃矿工数已低于20，当前矿
                             机18/22，实时算力201.21TH/s
                         </div>

                         <div style="float: right">2017.02.22</div>

                     </div>
                     <router-link to='/warn'>
                         <span class="warn-button" >预警设置</span>
                     </router-link>

                 </div>
             </div>

         </div>
     </div>



 </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Foot from 'components/Foot'

export default {
  name: 'all',
  components: {
      Foot
  },
  data () {
    return {
      earn:1.2323, //24小时收益
        //付款记录
      pays:[
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'},
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'},
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'},
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'},
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'},
          {day:'285.23',earn:'0.0005608',all:'13.36010',time:'2017/07/26  09:32:42'}
      ],
      log:[
          {name:'amoukyo.002',all:33,now:20,comput:92.21,time:'2017/02/22 15:22'},{name:'amoukyo.002',all:33,now:20,comput:92.21,time:'2017/02/22 15:22'},{name:'amoukyo.002',all:33,now:20,comput:92.21,time:'2017/02/22 15:22'},{name:'amoukyo.002',all:33,now:20,comput:92.21,time:'2017/02/22 15:22'},{name:'amoukyo.002',all:33,now:20,comput:92.21,time:'2017/02/22 15:22'},
      ]
    }
  },
  methods: {


  }
}
</script>

<style lang="less" scoped>
    @mybottom : 20px;
    .clearfix:after{
        content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }
    .as-le{
        float: left;
        width: 800px;
        .list1{
            height: 410px;
            margin-bottom: @mybottom ;

        }
        /*付款记录*/
        .con{
            height: 410px - 61;
            border: 1px solid #ddd;
            border-top:0px;

            .t1{
                width: 760px;margin: 0 auto;
                height: 33px;
                line-height: 33px;
                ul{
                    display: block;
                    li{
                        font-size: 14px;
                        color: #333;
                        display: block;
                        float: left;
                    }
                }

            }
        }

        /*矿机日志*/

        .con2{
            height: 370px - 61;
            border: 1px solid #ddd;
            border-top:0px;
            .log{
                width: 750px;
                height: 60px;
                line-height: 60px;
                border-top: 1px solid #d8d8d8;
                margin: 0 auto;
            }
            .log:nth-child(1){
                border-top:none;
            }
        }

        .t-left{
            font-size: 14px;
            display: block;
            float: left;
        }
        .t-right{
            font-size: 13px;
            color: #999;
            display: block;
            float: right;
        }


    }

    .p1{
        height:60px;
        line-height: 60px;
        background: #D0E9F7;
        a,span{
            display: block;
            font-size: 16px;
        }
        a{
            float: right;
            margin-right:28px;
            color:#1879BE;
        }
        span{
            float: left;
            margin-left: 33px;
        }
    }

    .mpay{
        height: 51px;
        line-height: 52px;
        border-top:1px solid #ddd;
        font-size: 14px;
        color: #666;
        ul{
            display: block;
            li{
                display: block;
                float: left;

            }
        }
        .a1{
            display: block;
            float: left;
            line-height:23px;
            width: 66px;height: 22px;text-align: center;border: 1px solid #ddd;margin-right: 9px;
            margin-top: 13px;
        }
        .a2{
            color: #1C95D4;
        }
    }
    .mpay:nth-child(2){
        border:none;
    }
    .as-rt{
        width:400px;
        float: right;

        .rt-list1,.rt-list2{
            margin-bottom: 20px;
        }
        .rt-list1{

        }
        .rt-list2{
            height: 190px;
        }
    }
/*获取帮助*/
    .tz-help{
        display: block;width:118px;height: 28px;border: 1px solid #ddd;margin: 0 auto;margin-top: 24px;text-align: center;line-height: 30px;
        color: #666;font-size: 14px;
    }
/*警告日志*/
    .warn-log{
        height: 289px;
        padding-top: 20px;
        border: 1px solid #ddd;
        border-top: 0px;
        .log-new{
            padding:0 12px ;
            width: 341 - 24px;
            margin: 0 auto;
            height: 98px;
            border: 1px solid #dddddd;
            margin-bottom: 20px;
        }

        .warn-button{
            display: block;width: 120px;height: 30px;border: 1px solid #ddd;
            line-height: 30px;margin: 0 auto;color: #666;text-align: center;
        }
    }
</style>
