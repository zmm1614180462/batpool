
// 联系人列表组件
<template>

    <div @mousemove="show=false" @mouseout="show=true" style="border:1px solid #ddd;margin-right:20px;width:290px;height:300px;margin-bottom:20px;border-radius: 4px;">
            <!-- <transition name="fade" mode="out-in"> -->
                    <div v-show="show">
                    <div class="head">
                        <p class="name" style="">王小明</p>
                        <p class="kinds">矿场员工</p>
                        <p class="contacts">手机：+86 15215632541</p>
                        <p class="contacts">邮箱：15215632541@qq.com</p>
                    </div>
                    <div class="foot clearfix">
                     <div class="f-left">已设置登录</div>
                         <div class="f-dot"></div>
                     </div>
                    </div>  
                   <div v-show="!show">
                    <button :class="{ active:addbtn }" @mousemove="addbtn=true" @mouseout="addbtn=false" style="margin-top:84px;margin-bottom:20px;" class="editBtn">编辑联系人</button>
                    <button :class="{ active:removeBtn }" @mousemove="removeBtn=true" @mouseout="removeBtn=false" class="editBtn">删除</button>
                    </div> 
        <!-- </transition>   -->
    </div>


</template>

<script>

import Lib from 'assets/js/Lib';
import {mapGetters,mapMutations} from 'vuex'
export default {
  components: {
  },
  computed:{
      ...mapGetters(['currentAlert'])
  },

  created:function () {

  },
  data () {
    return {
        show:true,
        addbtn:false,
        removeBtn:false,

    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>


    .head{
        border-bottom:1px solid  #ddd;
        height: 239px;
    }
    .name{
        text-align: center;padding-top: 54px;margin-bottom: 11px;font-size: 18px;color:#333;
    }
    .kinds{
         text-align: center;color: #666;margin-bottom: 26px;
    }
    .contacts{
        margin-left: 63px;margin-bottom:10px;font-size:14px; color:#666;
    }

    .foot{
        .f-left{
            float: left;margin-left: 17px;line-height: 59px;color:#1879BE;
        }
        .f-dot{
            float: left;
            position: relative;
            top:15px;
            margin-left: 20px;width: 22px;height:22px;background: #D8D8D8;border-radius: 50%;
        }
    }



.editBtn{
    display: block;
    margin: 0 auto;
    width: 180px;cursor: pointer;
    background: #fff;
    height: 50px;line-height: 50px;text-align: center;
    border: 1px solid #999;font-size: 16px;color:#333;
}
.active{
    background: #1C95D4;
    color:#fff;border: none;
}

</style>
