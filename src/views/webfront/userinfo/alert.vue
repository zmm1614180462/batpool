
<template>
    <transition name='fade'>
        <div class="wrap" v-if="currentAlert">
            <!-- 绑定更多 -->
            <div v-show="false"  class="content">
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

            <!-- 修改 -->

             <div v-show="false"  class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseAlert">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">修改收款地址</div>
                </div>
                <!-- 选择币种 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:152px;margin-right:7px;line-height:30px;">选择币种：1U67GYF7gtiuHG6897uTfrd5RRyUYIUYGfr4t</div>
                </div>

                   <div class="kinds clearfix">
                    <div style="float:left;margin-left:180px;margin-right:7px;line-height:30px;">标签：</div>
                    <div style="float:left">
                       <Input placeholder="输入备注地址，以方便识别" style="width: 300px"></Input>
                    </div>

                    
                </div>

                <div class="kinds clearfix"> <span style="float:left;display:block;margin-left:138px;margin-right:7px">新付款地址：</span> 
                <span style="color:#1C95D4;float:left;display:block;cursor:pointer">
                    <Input  style="width: 300px"></Input>
                    
                    </span></div>

                <div class="submit">下一步</div>

              
            </div>

            <!-- 修改收款地址 -->
             <div v-show="true"  class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseAlert">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">修改收款地址</div>
                </div>
                <!-- 选择币种 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:152px;margin-right:7px;line-height:30px;">安全凭证：</div>
                    <div style="float:left">
                        <Select  placeholder="请输入..." style="width: 220px;">
                            <Option v-for="item in type" :value="item.id" :key="item.name">{{ item.name }}</Option>
                        </Select>
                    </div>
                </div>

                   <div style="height:40px" class="kinds clearfix">
                    <div style="float:left;margin-left:110px;margin-right:7px;line-height:40px;">当前绑定手机号：</div>
                    <div style="float:left" class="clearfix">
                        <div style="float:left;line-height:40px;">
                            123****1234
                        </div>
                        <!--  -->
                       <div @click="sendCode()"  :class="{click:disabled}"  style="float:left;margin-left:43px;" class="send">
                           {{time}}
                       </div>
                    </div>

                    
                </div>

                <div  class="kinds clearfix"> <span style="float:left;display:block;margin-left:166px;line-height:30px;margin-right:7px">验证码：</span> 
                <span style="color:#1C95D4;float:left;display:block;cursor:pointer">
                    <Input  style="width: 220px"></Input>
                    
                    </span></div>

                <div class="submit">确定修改</div>

              
            </div>

        </div>

    </transition>

</template>

<script>

import Lib from 'assets/js/Lib';
import {mapGetters,mapMutations} from 'vuex'
import {Input,Select} from 'iview'
import CountDown from 'components/Time'
export default {
  components: {
      Input,Select,CountDown
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
        disabled:false, //禁止点击事件
        time:'发送验证码',
        single:[],   //触发条件
        contacts:[], //联系人
      showAlert:true,
      value:'',
      kinds:[{
          name:'DCR',id:1},
          {name:'BTC',id:2}
          ], //货币种类
      type:[{name:'手机',id:1},{name:'邮箱',id:2}],    
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
    // 发送验证码
      sendCode(){
          var _this = this;
        //   判断按钮是否可以点击啊
        if(this.disabled==false){
            this.time = 60;
            this.disabled=true;
              var set = setInterval(function(){
              if(_this.time==0){
                  _this.disabled = false;
                  _this.time = '发送验证码';
                  clearInterval(set); 
              }else{
                  _this.disabled = true;
                 _this.time =  _this.time-1;  
              console.log( _this.time);
              }
             
          },1000)
        }
         
        
        
      }  

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

// 发送验证码按钮
.send{
    width: 98px;
    height: 38px;
    font-size: 14px;color:#666;
    border: 1px solid #ddd;line-height: 40px;text-align: center;
    cursor: pointer;
}

// 禁止点击
.click{ 
   cursor:not-allowed;
   background: #ddd;
}
</style>
