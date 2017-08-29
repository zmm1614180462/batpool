// 修改弹窗
<template>
    <transition name='fade'>
        <div class="wrap" v-if="currentAlert">
            <div class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseAlert">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">绑定更多</div>
                </div>
                <!-- 选择币种 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:152px;margin-right:7px;line-height:30px;">选择币种：</div>
                    <div style="float:left">
                        <Select  placeholder="请输入..." style="width: 220px;">
                            <Option v-for="item in kinds" :value="item.id" :key="item.name">{{ item.name }}</Option>
                        </Select>
                    </div>
                </div>

                   <div class="kinds clearfix">
                    <div style="float:left;margin-left:152px;margin-right:7px;line-height:30px;">输入地址：</div>
                    <div style="float:left">
                       <Input v-model="value" placeholder="请输入..." style="width: 220px"></Input>
                    </div>

                    
                </div>

                <div class="more clearfix"> <span style="float:left;display:block;margin-left:15px;">添加地址即可使用完整功能</span> <span style="color:#1C95D4;float:right;display:block;margin-right:15px;cursor:pointer">查看更多</span></div>

                <div class="submit">确定绑定</div>

              
            </div>
        </div>

    </transition>

</template>

<script>

import Lib from 'assets/js/Lib';
import {mapGetters,mapMutations} from 'vuex'
import {Input,Select} from 'iview'
export default {
  components: {
      Input,Select
  },
  computed:{
      ...mapGetters(['currentAlert'])
  },

  created:function () {
      /**
       * 获取出发条件 url()
       * 获取联系人   url()
       */
   var _this = this;
   Lib.M.ajax({
       url:'http://localhost:3000/alert',
       type:'get',
       success:function (data) {
         _this.contacts = data;
      }
   })

  },
  data () {
    return {
        //编辑模式
        single:[],   //触发条件
        contacts:[], //联系人
      showAlert:true,
      value:'',
      kinds:[{
          name:'DCR',id:1},
          {name:'BTC',id:2}
          ], //货币种类
    }
  },
  methods: {
      ...mapMutations(['CloseAlert']),
      remove(id){
          var a = [1,2,3,4];
          var _this = this;
          this.contacts.forEach(function (val,index,arr) {
              if(val.id==id){
                  _this.contacts.splice(index,1)
                  return;
              }
          })
          console.log(this.contacts);
      },
      edit(val){
         val.type = !val.type;
      },

  }
}
</script>

<style lang="less" scoped>
 @blue1 : #D0E9F7; //弹出款下划线颜色
 @blue2 : #1C95D4; //所有按钮颜色
 .in{
     width: 100px;
     height: 200px;
     background: red;
 }
 .wrap{
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background-color: rgba(55,55,55,.6);
     height: 100%;
     z-index: 1000;
 }

 .content{
     position: relative;
     width: 600px;
     margin: 0 auto;
     height: 400px;
     background: #fff;
     margin-top:10%;
 }
 .condition{
     margin-left: 24px;
     margin-right: 16px;
     border-bottom: 1px solid @blue1;
     .tit1{
         font-size: 16px;color: #333;margin-bottom: 10px;
     }

 }
 /*表单控价*/
 .con{
     margin-top: 17px;
     margin-bottom: 44px;
     font-size: 14px;
     color:#666;
     margin-left: 100px;
     margin-right: 16px;
     padding-left: 43px;
     .con-left,.con-right{height: 30px;}
     .con-left{
         float: left;
     }
     .con-right{
         float: right;
     }
 }
 /*算力*/
 .inp{
     float: right;
     margin-left: 46px;
     input{
         margin-left: 8px;
         margin-right:11px;
         width: 120px;
         height: 30px;
         outline: none;
         border: 1px solid #ddd;
     }
 }
/*联系人*/
 .contacts{
     margin-left: 24px;
     margin-right: 16px;
     border-bottom: 1px solid @blue1;
     .tit1{
         font-size: 16px;color: #333;margin-bottom: 10px;
     }
 }

 /*--相关的单选复选按钮--*/

// 货币种类
.kinds{
    height: 30px;
    margin-bottom: 30px;
}
.more{border: 1px solid #ddd;height: 40px;width:400px;line-height: 40px;margin: 0 auto}
.submit{
    cursor: pointer;
    width:150px;height: 50px; 
    margin: 0 auto;
    font-size: 16px;color: #fff;
line-height: 50px;text-align: center;
background: #1C95D4;
margin-top: 50px}


</style>
