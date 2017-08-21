
<template>
 <div>


<!--矿机日志-->

     <div class="t1">
         <div style="height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333">预警日志</div>
         <div class="condition">

             <div v-if="auth==0">
                 <div class="login-t2">
                     <div class="clearfix noLogin" >登录查看数据 <a href="javascript:;" class="noa">登录</a></div>
                 </div>

             </div>

             <!--登录查看预警资料-->
             <div v-if="auth==1">
                 <div class="login-t clearfix" v-for="item in itemDate">
                     <div class="log clearfix" style="">
                         <div style="float:left">{{item.name}}</div>
                         <div style="float:right">{{item.date}}</div>
                     </div>
                     <!--<ul class="clearfix" style="display: block">-->
                         <!--<li style="width: 112px" >{{ item.name }}</li>-->
                         <!--<li style="width: 182px">+86 {{ item.phone }}</li>-->
                         <!--<li style="width: 566px">您的TEXT1下的BTC活跃矿工数已低于20，当前矿机18/22，实时算力201.21TH/s。</li>-->
                         <!--<li style="width: 234px"> {{item.date}} </li>-->
                         <!--<li >-->
                            <!--发送成功-->
                         <!--</li>-->

                     <!--</ul>-->
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
  name: 'log',
    beforeMount(){

    },
    beforeRouteEnter(to,from,next){
        Lib.M.ajax({
            'url':'http://localhost:3000/people/?_page=1&_limit=6',
            'type':'get',
            success(data){
                next(vm=>{vm.itemDate=data})
//                _this.itemDate=data;
//                console.log(data)
            }
        });
    },
    created(){
//      初始化数据
        this.$store.commit('changeUrl',{url:'/log'});
      console.log(document.documentElement.clientWidth,document.body.clientWidth)
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
        margin-left:478px;margin-top: 250px;margin-right: 494px;line-height: 30px
    }
    .noa{
        width: 86px;height: 30px;line-height: 30px;background:#1C95D4;display: block;float: right;text-align: center;
        color: #fff;
    }

    /*登录触发条件列表*/
    .login-t{
        font-size: 14px;
        color: #666;
        ul{
            li{display: block;float: left}
        }
    }
    .login-t2{
        height: 640px - 21;
        padding-top: 21px;

    }
    .log{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #d8d8d8;
    }
    /*触发*/
.trigger{
    width:150px;height: 40px;display: block;border: 1px solid #ddd;line-height: 40px;color: #666;
    margin: 0 auto;margin-top: 38px;margin-bottom: 34px;
}
</style>
