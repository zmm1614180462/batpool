
<template>
   <div >
      <fixed></fixed>
      <div style="width: 1220px;margin: 0 auto" >
         <navb >zzzzz</navb>
         <!--预留echart位置-->
         <div style="height: 428px;margin-bottom: 20px;background: red" class="echart"></div>

         <!--广播区块-->
         <div class="t1">
            <div style="height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333">广播区块</div>
            <div class="condition">
               <ul class="clearfix top" style="display: block;">
                  <li style="margin-right: 82px">高度</li><li style="margin-right: 144px">时间</li><li style="margin-right: 489px">区块哈希</li><li style="margin-right: 117px">报块用户</li><li>区块奖励</li>

               </ul>

               <div v-if="auth==0">
                  <div class="clearfix noLogin" >登录查看数据 <a href="javascript:;" class="noa">登录</a></div>
               </div>

               <!--登录查看预警资料-->
               <div v-if="auth==1">
                  <div class="login-t" v-for="item in itemDate">
                     <ul class="clearfix" style="display: block">
                        <li style="width: 113px;color: #1C95D4 " >477592</li>
                        <li style="width: 176px">2017/07/26  09:32:42</li>
                        <li style="width: 553px">0000000000000000003c787dd78sc78s6d8c8d9s8cd78sfq7q98v0s865f43bs1k。</li>
                        <li style="width: 180px"> 北方联通（多线）</li>
                        <li>13.36456010 BTC</li>
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
      <foot></foot>
   </div>
</template>

<script>

    import Lib  from 'assets/js/Lib';
    import Foot from 'components/Foot'
    import Navb from 'components/NavBa'
    import Pag from 'components/pagination'
    import Fixed from 'components/Fixed.vue'


    export default {
        components: {
            Foot,Navb,Pag,Fixed
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
        data () {
            return {
                allDate:0,
                itemDate:[],//总数据条数
                limit:6, //每页显示数据条数
                auth:1,
                page:1, //当前页数
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

        }
    }
</script>

<style lang="less" scoped>
   @mybottom : 20px;
 .echart{
    margin-top: 60px;margin-bottom: 40px;
 }
 .t1{
    margin-bottom: 81px;
 }
   .clearfix:after{
      content: '';
      height:0;//高度为0
      line-height:0;//行高为0
      display:block;//将文本转为块级元素
      visibility:hidden;//将元素隐藏
      clear:both//清除浮动
   }
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
      font-size: 14px;
      color: #666;
      ul{
         li{display: block;float: left}
      }
   }
</style>
