<!--我的账户 -->
<template>

 <div>


	 <div class="t1" style="margin-bottom: 40px;position: relative">
         <div style="height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333">触发条件列表</div>
         <div class="condition">
             <ul class="clearfix top" style="display: block;">
                 <li style="margin-right: 153px">联系人</li><li style="margin-right: 196px">联系方式</li><li style="margin-right: 245px">条件</li><li style="margin-right: 264px">设置时间</li><li >操作</li>
             </ul>
             <!--没登录-->
             <div v-if="auth==0">
                 <div class="clearfix noLogin" >登录查看数据 <a href="javascript:;" class="noa">登录</a></div>
             </div>
             <!--登录-->

             <div v-if="auth==1">
                <div class="clearfix" v-for="item in 6">
                    <div class="login-t">
                        <ul class="clearfix" style="display: block">
                            <li style="width: 200px" >小明</li>
                            <li style="width: 258px">短信、邮箱、站内</li>
                            <li style="width: 278px">低于 29.21 TH/s 或 低于 19 台</li>
                            <li >2017-07-23 16:17:35</li>
                            <li style="float: right;margin-right: 28px">
                                <!--要删除的id-->
                                <img @click="edit(0)" style="margin-right: 32px;cursor: pointer" src="../../../assets/image/编辑.png" alt="">
                                <img @click="remove(0)" style="cursor: pointer" src="../../../assets/image/删除.png" alt="" >
                            </li>
                        </ul>
                    </div>

                </div>

                 <!--新建出发资料-->
                 <a @click="trigger" class="trigger clearfix" href="javascript:;">
                     <div style="font-size: 24px;float: left;margin-left: 18px">+</div>

                     <div @click="OpenAlert" style="font-size: 14px;float: right;margin-right: 18px">添加触发资料</div>
                 </a>
             </div>
         </div>
         <!--&lt;!&ndash;弹出框&ndash;&gt;-->
         <!--<div class="" style="position: fixed;top:0;right: 0;left: 0;bottom: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.6);overflow: hidden">-->
                <!--<div class="" style="width: 200px;height: 300px;margin: 0 auto;background: red"></div>-->
         <!--</div>-->
     </div>

     <alert></alert>

<!--预警日志-->

     <div class="t1">
         <div style="height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333">预警日志</div>
         <div class="condition">
             <ul class="clearfix top" style="display: block;">
                 <li style="margin-right: 66px">联系人</li><li style="margin-right: 134px">手机号</li><li style="margin-right: 533px">内容</li><li style="margin-right: 167px">发送时间</li><li>状态</li>

             </ul>

             <div v-if="auth==0">
                 <div class="clearfix noLogin" >登录查看数据 <a href="javascript:;" class="noa">登录</a></div>
             </div>

             <!--登录查看预警资料-->
             <div v-if="auth==1">
                 <div class="login-t" v-for="item in itemDate">
                     <ul class="clearfix" style="display: block">
                         <li style="width: 112px" >{{ item.name }}</li>
                         <li style="width: 182px">+86 {{ item.phone }}</li>
                         <li style="width: 566px">您的TEXT1下的BTC活跃矿工数已低于21，当前矿机18/22，实时算力201.21TH/s。</li>
                         <li style="width: 234px"> {{item.date}} </li>
                         <li >
                            发送成功
                         </li>

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

import Alert from './alert.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'warn',
    beforeMount(){

    },

    created(){
//      初始化数据
 this.$store.commit('changeUrl',{url:'/warn'});
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
        height: 150px;
        margin-left:478px;margin-top: 126px;margin-right: 494px;line-height: 35px
    }
    .noa{
        width: 86px;height: 30px;line-height: 30px;background:#1C95D4;display: block;float: right;text-align: center;
        color: #fff;
    }

    /*触发*/
.trigger{
    width:150px;height: 40px;display: block;border: 1px solid #ddd;line-height: 40px;color: #666;
    margin: 0 auto;margin-top: 38px;margin-bottom: 34px;
}

    .login-t{
        padding-top: 21px;
        font-size: 14px;
        color: #666;
        ul{
            li{display: block;float: left}
        }
    }
</style>
