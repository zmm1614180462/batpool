<template>
  <div>
    <div class="wrap">
        <ul >
            <li ><a href="javascript:;"></a></li>
            <li><a href="javascript:;"></a></li>
        </ul>

    </div>
  </div>
</template>

<script>

import Lib from 'assets/js/Lib';

export default {
  data() {
    return {

    }
  },
  components: {
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
	
	toggle:function (val) {
        this.activeName = val;
    }
	
      
  }
}
</script>

<style lang="less" scoped>
    @import "../assets/css/color";

    @footheight: 258px; //底部高度
    @background: #27364E; //背景颜色
    @footwidth: 1220px;
    @listwidth: 1220-(256*2);

    .clearfix:after {
        content: '';
        height: 0; //高度为0
        line-height: 0; //行高为0
        display: block; //将文本转为块级元素
        visibility: hidden; //将元素隐藏
        clear: both //清除浮动
    }

    .wrap {
        width: 100px;
        position: fixed;
        top:388px;right: 0;
        z-index: 1001;
        ul{
            background: url('./fixed.png');
            display: block;
            li{display: block;height: 80px;cursor: pointer}

        }
    }

</style>
