<!--我的账户 -->
<template>
<div class="clearfix">
    <div style="float: left;" class="aside-left">
        <div style="height:60px;line-height:60px;background:#187ABF" class="clearfix" >
            <div class="check" style="float:left;margin-top:18px;margin-left:24px;margin-right:5px;"></div> 
            <div style="float:left;cursor:pointer;">我的通知</div> 
            <!-- 预留伸缩 -->
        
        </div>
        <div>
            <div class="sub clearfix">
                 <div class="check myicon"></div> 
                <div style="float:left;cursor:pointer;margin-left:79px;">系统通知</div> 
            </div>
             <div class="sub clearfix">
                <div class="check myicon"></div> 
                <div style="float:left;cursor:pointer;margin-left:79px;">预警通知</div> 
             </div>
             <div class="sub clearfix">
                <div class="check myicon"></div> 
                <div style="float:left;cursor:pointer;margin-left:79px;">活动通知</div> 
            </div>
         </div>  


        <div style="height:60px;line-height:60px;background:#187ABF" class="clearfix" >
            <div class="check" style="float:left;margin-top:18px;margin-left:24px;margin-right:5px;"></div> 
            <div style="float:left;cursor:pointer;">通知设置</div> 
            <!-- 预留伸缩 -->
        
        </div> 
            
        
    </div>

    <!-- 显示的内容区域 -->
    <div style="float: left;" class="aside-right">

        <!-- 公告 -->
        <div v-for="(item,index) in 5" style="border:1px solid #ddd;margin-bottom:20px;">
          <publish>
              <div >你好</div>
          </publish>
        </div>
    

       
       


        
    </div>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';
// 使用animation.css
import {mapMutations} from 'vuex'
import publish from './publish'
require('assets/css/animate.min.css');
export default {
  name: 'message',
    beforeMount(){

    },  
    created(){
    
    },
    computed:{

    },
    components: {
        publish
    },
    data () {
        return {
          
        }
  },
  methods: {

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

 .aside-left{
     margin-right:20px; 
     width: 200px;
     height: 655px;
     background:#1C95D4;
     color:#fff;
     font-size: 16px;
     
 }
 .check{
     width: 24px;height: 24px;background: rgba(216,216,216,0.33);
 }  

 .sub{
     height:39px;
     border-bottom: 1px solid #7DC4E7;
     line-height: 38px;
     position: relative;
 }

 .myicon{
     position: absolute;top:7px;left:50px;
 }
</style>
