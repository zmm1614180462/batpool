
<template>
 <div >
     <p style="margin-bottom: 20px;font-size: 18px">子账户算力与收益</p>


     <div class="t1" style="margin-bottom: 40px;position: relative">
         <div class="clearfix head" >
             <ul class="clearfix">
                 <li style="margin-left: 358px">5分钟算力
                 </li><li style="margin-left: 128px">24小时算力
             </li><li style="margin-left: 110px">矿机数
             </li><li style="margin-left: 112px">24小时收益
             </li><li style="margin-left: 112px">更多</li>
             </ul>
         </div>

         <div class="body">
             <div  class="items" >
               <ul class="list1 clearfix" >
                   <li><img style="width: 40px;height: 40px" src="" alt=""></li><li></li><li></li>
               </ul>
             </div>
         </div>


     </div>



 </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import Foot from 'components/Foot'
import Pag from 'components/pagination'

import Alert from './alert.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'count',
  created:function () {
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
    //蓝框头部分
    .head{
        height: 60px;padding-left:33px;background: #D0E9F7;font-size: 16px;line-height: 60px;color: #333;
        ul{display: block;}
        li{display: block;float: left;font-size: 16px};

    }

    .clearfix:after{
        content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }
    //子账户算力与收益  内容部分
    .body{
        padding-left:24px;padding-right: 16px;height: 600px;
        border: 1px solid #ddd;border-top:none;
    }
    .items{
        font-size: 14px;color: #666;
        border-bottom: 1px solid #ddd;
        ul{display: block};li{display: block;float: left}

        .list1{font-size: 16px;color:#333}
    }

</style>
