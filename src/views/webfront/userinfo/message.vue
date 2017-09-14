<!--我的账户 -->
<template>
<div class=" box">
    <div style="margin-bottom:20px;min-height:655px;" class="aside-left">
        <div style="height:60px;line-height:60px;background:#187ABF" class="clearfix" >
            <div class="check" style="float:left;margin-top:18px;margin-left:24px;margin-right:5px;"></div> 
            <div style="float:left;cursor:pointer;">我的通知</div> 
            <!-- 预留伸缩 -->
        
        </div>
        <div style="">
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
    <!-- 设置路由跳转内容 -->
    <!-- 显示的内容区域 -->
    <div style="" class="aside-right">

        <!-- 公告 -->
        <div v-show="false" v-for="(item,index) in 10" style="border:1px solid #ddd;margin-bottom:20px;">
          <publish>
              <div slot="header">你好</div>
          </publish>
        </div>

        <!-- 通知设置 -->

        <div style="width:1000px;font-size:14px;color:#333;margin-bottom:9px;">
            <p>您可以在此设置通知显示提示：</p>
            <div style="height:50px;border:1px solid #ddd;border-bottom:none;line-height:50px;">
                <div style="float:left;margin-left:22px;">系统通知</div>
                  <div style="float:right;margin-right:8px;">
                   <myswitch v-model="switch1" @on-change="change('switch1')"></myswitch>
                </div>
            </div>
            <div style="height:50px;border:1px solid #ddd;border-bottom:none;line-height:50px;">
                <div style="float:left;margin-left:22px;">矿机预警</div>
                <div style="float:right;margin-right:8px;">
                   <myswitch v-model="switch2" @on-change="change('switch2')"></myswitch>
                </div>
            </div>
            <div style="height:50px;border:1px solid #ddd;line-height:50px;">
                <div style="float:left;margin-left:22px;">活动通知</div>
                 <div style="float:right;margin-right:8px;">
                   <myswitch v-model="switch3" @on-change="change('switch3')"></myswitch>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>

import Lib from 'assets/js/Lib';
// 使用animation.css
import {mapMutations} from 'vuex'
import myswitch from 'iview/src/components/switch'
import publish from './publish'

export default {
  name: 'message',
    beforeMount(){

    },  
    created(){
    
    },
    computed:{

    },
    components: {
        publish,myswitch
    },
    data () {
        return {
          switch1:false, //ajax 获取
          switch2:false, //ajax 获取
          switch3:false, //ajax  获取
        }
  },
  methods: {
      change(status){
        //   发送ajax
        console.log(this[status]) //分别获取状态
      }
  }
}
</script>

<style lang="less" scoped>
.box{
     display: -moz-box;
     display: -ms-flexbox; 
     display: -webkit-flex; 
     display: flex;
    align-items:stretch;
}
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
