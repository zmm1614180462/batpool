<template>
<div id="app">
    <navbar activeMeau="首页"></navbar>
    <div class="body">
        <p class="t1">多币种矿池&nbsp;&nbsp;&nbsp;一键切换</p>
        <div class="list">
            <ul>
                <li></li><li></li><li></li><li></li><li></li><li></li><li style="margin: 0"></li>
            </ul>
        </div>
        <div class="go-btn">
            <a href="javaScript:;">进入矿池</a>
        </div>

        <div>
            <ul class="coin_type">
                <li class="">BTC矿池</li>
            </ul>
        </div>
    </div>

</div>
</template>


<script>

import Lib from 'assets/js/Lib';
import Navbar  from 'components/NavBar.vue'
import { Cell,Group,Divider } from 'vux'
import {mapState,mapGetters,mapActions} from 'vuex'
import css from 'assets/css/common.css'

export default {
    computed:mapGetters(['count']),
  data() {
    return {

    }
  },
   computed:{
       ...mapState(['current_type','cointype'])
   },
  components: {
	Navbar
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

#app{
	height: 1000px;
	width:1220px;
	margin: 0 auto;
}

.body{
    height: 373px;
    .t1{
        margin-left: 435px;
        height: 47px;
        line-height: 47px;
        font-size: 36px;
        margin-top: 107px;
    }
    .list{
        width: 432px;
        margin: 0 auto;
        margin-top: 18px;
        margin-bottom:63px;
        height: 36px;
        ul{
            list-style: none;
            height: 36px;
            display: block;
            li{
                display: block;
                float: left;
                width: 36px;
                border-radius:50%;
                height:36px;
                background: #D8D8D8;
                margin-right: 30px;
            };
        }
    }

}

.go-btn{
    height: 50px;
    a{
        display: block;
        width:180px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        background:#1879BE 100%;
        font-size: 18px;
        color:#fff;
        margin-left:521px;
    }
}

//币种
.coin_type{
    height: 81px;

}
.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;	
}

/*
 * less 展示
 */ 
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}


</style>
