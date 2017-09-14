<template>
  <div class="note">
	测试vue数次
  </div>
</template>

<script>

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
	
	
	
      
  }
}
</script>

<style lang="less" scoped>
    .note{
        color:red;
        padding:10px;
        font-size:12px;

    }

.headfix{
	position: fixed!important;
	z-index: 77;
	width: 100%;
	left: 0;
	top: 0;
}

.headMargin{
clear:both;
height:50px;
}

</style>
