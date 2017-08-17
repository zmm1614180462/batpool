<template>
  <!--input输入框样式-->
    <div style="position: relative;width:280px;border-bottom: 1px solid #ddd;padding-bottom: 6px; ">
        <img :src="attr.url" alt="">
        <input  :placeholder="attr.placeholder" :type="attr.type"  @input="updateMessage">

    </div>
</template>

<script>

import Lib from 'assets/js/Lib';
import { mapMutations } from 'vuex'
export default {
   computed:{
   },
  data() {
    return {
        list:[{
            name: '关于我们', url: '',
        },{
            name:'使用教程',url:'',
        },{
            name:'常见问题',url:'',
        }, {
            name:'工具下载',url:'',
        },{
            name:'服务协议',url:'',
        }]
    }
  },
  components: {
  },
  props:['attr'],
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
      updateMessage(e){
          let name = this.attr.name
          let value = e.target.value
          this.$store.commit('change',{type:name,val:value})
      },
  }
}
</script>

<style lang="less" scoped>
    img{
        position: absolute;
        top:-2px;
        width:18px;height: 18px;
    }
   input{
       color: #666;
       border: none;
       outline: none;
       font-size: 14px;
       width: 280 - 28px;

       height: 20px;
       padding-left: 28px;
   }

    .clearfix:after{
       content: '';
        height:0;//高度为0
        line-height:0;//行高为0
        display:block;//将文本转为块级元素
        visibility:hidden;//将元素隐藏
        clear:both//清除浮动
    }

</style>
