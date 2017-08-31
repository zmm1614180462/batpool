<!--账号资料修改-->
<template>

 <div>
     <p style="margin-bottom: 20px;font-size: 18px;margin-left:2px;">账号资料修改</p>
      <div class="userinfo">
          <div class="clearfix" style="margin-bottom:17px;height:82px;line-height:82px;">
              <div style="float:left;margin-left:44px;">用户头像：</div>
              <div style="float:left;">用户头像：</div>
          </div>

          <div class="inp clearfix">
              <div style="float:left;margin-left:59px;">用户名：</div>
              <div style="float:left;">
                  <input type="text" value="小明同学">
              </div>
              <div style="float:left;">
                  <a style="display:block;color:#1879BE;" href="javascript:;">登录密码修改</a>
              </div>
          </div>
          <div class="inp clearfix">
              <div style="float:left;margin-left:59px;">昵&emsp;称：</div>
              <div style="float:left;"><input type="text" value="小明"></div>
          </div>
          <div class="inp clearfix">
              <div style="float:left;margin-left:59px;">手&emsp;机：</div>
              <div style="float:left;">
                  <input type="text" value="15215632542">
              </div>
              <div style="float:left;">
                  <a style="display:block;color:#1879BE;" href="javascript:;">修改</a>
              </div>
          </div>
          <div class="inp clearfix">
              <div style="float:left;margin-left:59px;">邮&emsp;箱：</div>
              <div style="float:left;">
                  <input type="text" value="15215632542qq.com">
              </div>
              <div style="float:left;">
                  <a style="display:block;color:#1879BE;" href="javascript:;">修改</a>
              </div>
          </div>


          
    </div> 


     <!--联系人列表  -->
     <div class="clearfix" style="margin-bottom: 37px;font-size: 18px;margin-left:2px;">
         <div style="float:left;">联系人列表</div> <div style="float:right;color:#1879BE;cursor:pointer;">新建联系人</div>
     </div>
     <div class="list clearfix">
         <div v-for="list in 5" class="list-con">
             <div style="float:left;">
             <list></list>
            </div>
             <!-- hover 事件  -->
         </div>
     </div>
     


</div>
</template>

<script>

import Lib from 'assets/js/Lib';

import Pag from 'components/pagination'

import Alert from './alert.vue'
import {mapMutations} from 'vuex'
import List from './list.vue'
export default {
  name: 'account',
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
      Pag,Alert,List
  },
  data () {
    return {
        show:true,
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
.clearfix:after{
    
    content: '';
    height:0;//高度为0
    line-height:0;//行高为0
    display:block;//将文本转为块级元素
    visibility:hidden;//将元素隐藏
    clear:both//清除浮动
   }

.userinfo{
    margin-bottom: 85px;
}
.inp{
    height: 40px;
    line-height: 40px;
    margin-bottom:20px; 
    input{
        width: 178px;height: 38px;border:1px solid #ddd;padding-left: 15px;color: #999;border-radius: 4px;outline: none;
        margin-left: 18px;margin-right: 30px;
        
    }
}

// 联系人列表信息
.list{
  width: 1240px;
}




</style>
