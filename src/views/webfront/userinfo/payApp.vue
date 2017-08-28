
<template>
 <div>
<!--付款记录-->

     <div class="t1">
         <div style="height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333">
             <ul class="clearfix top" style="display: block;">
             <li style="margin-right: 91px">币种</li><li style="margin-right: 137px">地址与交易</li><li style="margin-right: 142px">日均算力</li><li style="margin-right: 111px">当日理论收益（1TH/s）</li><li style="margin-right: 146px">收益</li><li>时间</li>

         </ul></div>
         <div class="condition" >


             <div v-if="auth==0">
                 <div class="clearfix noLogin" >登录查看数据 <a href="javascript:;" class="noa">登录</a></div>
             </div>

             <!--登录查看预警资料-->
             <div v-if="auth==1" >
                 <div class="mpay" v-for="item in itemDate">
                     <ul class="clearfix" style="display: block">
                         <li style="width: 123px" ><div style="width: 26px;height: 26px;border-radius: 50%;background: #d8d8d8;margin-top: 14px"></div></li>
                         <li style="width: 217px">+86 {{ item.phone }}</li>
                         <li style="width: 206px">285.23 TH/s</li>
                         <li style="width: 280px">0.0005608 BTC</li>
                         <li style="width: 178px">13.36456010 BTC</li>
                         <li >2017/07/26  09:32:42</li>

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
     </div>

</template>

<script>

import Lib from 'assets/js/Lib';

import Pag from 'components/pagination'


export default {
  name: 'warn',
    beforeMount(){

    },
    beforeRouteEnter(to,from,next){
        Lib.M.ajax({
            'url':'http://localhost:3000/people/?_page=1&_limit=6',
            'type':'get',
            success(data){
                next(vm=>{vm.itemDate=data})
            }
        });
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
                    console.log(data)
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
      Pag,
  },
  data () {
    return {
        url:'', //要请求的url链接
        itemDate:[], //联系人信息
        allDate:0,  //总数据条数
        limit:6, //每页显示数据条数
        auth:1,
        page:1, //当前页数
        show:false, //显示触发资料
    }
  },
  methods: {
      goPage(data){
        this.page = data.page;
        var _this = this;
        console.log(data.page)
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
      trigger(){
//          添加触发资料
          this.show = !this.show
      }

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

    .top{
        height: 55px;
        li{
            display: block;float: left;
            color: #333;font-size: 16px;
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

    }

    .noLogin{
        margin-left:478px;margin-top: 126px;margin-right: 494px;line-height: 30px
    }
    .noa{
        width: 86px;height: 30px;line-height: 30px;background:#1C95D4;display: block;float: right;text-align: center;
        color: #fff;
    }

    /*登录触发条件列表*/
    .login-t{
        padding-top: 21px;
        font-size: 14px;
        color: #666;
        ul{
            li{display: block;float: left}
        }
    }
    /*触发*/
.trigger{
    width:150px;height: 40px;display: block;border: 1px solid #ddd;line-height: 40px;color: #666;
    margin: 0 auto;margin-top: 38px;margin-bottom: 34px;
}

    .mpay{
        height: 51px;
        line-height: 52px;
        border-bottom:1px solid #ddd;
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
    .mpay:nth-child(0){
        border:none;
    }
</style>
