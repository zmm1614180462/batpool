<template>
<div class="body">
   <navb activeMeau="首页"></navb>

   <div class="wrap clearfix" >
      <!--选项卡  可以做成组件-->
      <div class="nav-t clearfix">
         <ul style="float:left;">
            <li v-for="item in list">
            
               <a @click="changeTab(item.name,item.url)" :class="{act:currentUrl==item.url}"  >{{ item.name }}</a>
            </li>
         </ul>
         <div style="float:right;">
             
         </div>
      </div>
      <!--预览窗口-->
      <div>
         <router-view></router-view>
      </div>
   </div>

   <div style="margin-top: 80px">  <foot></foot></div>




</div>
</template>


<script>
import Lib from 'assets/js/Lib';
import Navbar  from 'components/NavBar.vue'
import Navb from 'components/NavBa.vue'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import css from 'assets/css/common.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Foot from 'components/Foot'



export default {
  created(){
      this.currentUrl = this.$route.path;
  },
  data() {

    return {

      list:[{name:'总览',url:'/'},{name:'预警设置',url:'/warn'},{name:'矿机日志',url:'/log'},{name:'付款记录',url:'/pay'}],
      currentUrl :'',
    }
  },
   computed:{
      phone:{
          get(){
              return this.$store.state.formdata.phone
          },
          set(value){
              this.$store.commit('change',{type:'phone',val:value})
          }
      }
   },
  components: {
	Navbar,Navb,Foot
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
      changeTab(name,url){
          this.currentUrl = url;
          this.$router.push({path:url})
      },
      resetPass(){
          let _this = this
          let value = _this.$store.getters.formdata
          //发送数据
          Lib.M.ajax({
              url:'http://www.cnblogs.com/jiangxiaobo/p/5425025.html',
              data:{value},
              success:function (data) {
            
              }
          })
      }

      
  }
}
</script>

<style lang="less" scoped>
   @bashwidth : 1220px;
   .clearfix:after{
      content: '';
      height:0;//高度为0
      line-height:0;//行高为0
      display:block;//将文本转为块级元素
      visibility:hidden;//将元素隐藏
      clear:both//清除浮动

   }
.wrap{
   width: @bashwidth;
   margin: 0 auto;
   .nav-t{
      height: 80px;
      ul{
         display: block;
         li{margin-top: 27px;
            display: block;
            float: left;
            height: 22px;
            line-height: 22px;
            padding-left: 22px;
            margin-left: 22px;
            border-left: 2px solid #1C95D4;
            a{
               display: block;
               font-size:16px;
               color: #333;
               cursor: pointer;
            }
            a.act{
               color:#1879BE;
            }
         }
         li:nth-child(1){
            margin-left: 0;
            border-left: 0;
            padding-left: 0;
         }
      }
   }

}
</style>
