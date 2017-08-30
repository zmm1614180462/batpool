// 新建子账号
<template>
    <transition name='fade'>
        <div class="wrap" v-if="showApi">
            <!-- 绑定更多 -->
            <div v-if="currentApi=='new'"  class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseAlert({type:'showApi'})">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">新建子账号</div>
                </div>
                <!-- 选择币种 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:139px;margin-right:7px;line-height:30px;">昵称：</div>
                    <div style="float:left">
                       <Input  placeholder="" style="width: 220px"></Input>
                    </div>
                </div>

                 <div class="kinds clearfix">
                    <div style="float:left;margin-left:125px;margin-right:7px;line-height:30px;">用户名：</div>
                    <div style="float:left">
                       <Input  placeholder="首字母开头至多8位字符" style="width: 220px"></Input>
                    </div>
                 </div> 

                <div class="kinds clearfix">
                    <div style="float:left;margin-left:111px;margin-right:7px;line-height:30px;">登录密码：</div>
                    <div style="float:left">
                       <Input  placeholder="6-32位字符" style="width: 220px"></Input>
                    </div>    
                </div>

                  <div class="kinds clearfix">
                    <div style="float:left;margin-left:111px;margin-right:7px;line-height:30px;">确认密码：</div>
                    <div style="float:left">
                       <Input  placeholder="和上面保持一致" style="width: 220px"></Input>
                    </div>    
                </div>

                <div style="position:relative;width:402px;height:78px;border:1px solid #ddd;padding:5px;margin:0 auto;color:#666;line-height:26px;">
                   多用于矿场多客户区分管理，我们建议为托管客户开通子账户以方便监控和结算。 
                   <a style="display:block;position:absolute;bottom:0;right:5px;color:#1C95D4;" >
                        查看更多
                       </a>    
                </div>


                <div class="submit">确定</div>

              
            </div>


            <div v-if="currentApi=='api'"  class="content">
                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseApi()">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">API</div>
                </div>
                <!-- 选择币种 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:35px;margin-right:7px;line-height:40px;">AccessKey：</div>
                    <div style="float:left">
                       <input id="access"  value="0MH72tgIBGYUT756f87gBUi8huy87tF6yg8uhiOIH8" style="width: 400px"></input>
                    </div>
                    <div @click="copy('0MH72tgIBGYUT756f87gBUi8huy87tF6yg8uhiOIH8','access')" style="float:left;margin-left:15px;line-height:40px;cursor:pointer;">复制</div>
                </div>

                 <div class="kinds clearfix">
                    <div style="float:left;margin-left:77px;margin-right:7px;line-height:40px;">puid：</div>
                    <div style="float:left">
                       <input id="puid" value="26548"   style="width: 220px"></input>
                    </div>
                    <div @click="copy('26548','puid')" style="float:left;margin-left:15px;line-height:40px;cursor:pointer;">复制</div>
                 </div> 

            

                <div style="width:298px;height:48px;border:1px solid #ddd;line-height:50px;color:#666;margin-left:125px;padding-left:15px;border-radius:4px;">
                   如果您不知道如何使用，请查阅 <a href="" style="color: #1879BE;">API文档</a>
                </div>


                <div class="submit">完成</div>

              
            </div>

        
            <div v-if="currentApi=='share'" class="content">

                <div class="title">
                    <div class="close clearfix">
                        <div  style="float: right;width: 20px;height:20px;margin: 12px;cursor: pointer" @click="CloseApi()">X</div>
                    </div>
                    <div style="text-align: center;font-size: 18px;color: #333;margin-bottom: 42px">分享</div>
                </div>
                <!-- 分享 -->
                <div class="kinds clearfix">
                    <div style="float:left;margin-left:35px;margin-right:7px;line-height:40px;">链接地址：</div>
                    <div style="float:left">
                       <input id="access"  value="0MH72tgIBGYUT756f87gBUi8huy87tF6yg8uhiOIH8" style="width: 400px"></input>
                    </div>
                    <div @click="copy('0MH72tgIBGYUT756f87gBUi8huy87tF6yg8uhiOIH8','access')" style="float:left;margin-left:15px;line-height:40px;cursor:pointer;">复制</div>
                </div>

                 <div class="kinds clearfix">
                    <div style="float:left;margin-left:77px;margin-right:7px;line-height:40px;">密码：</div>
                    <div style="float:left">
                       <input placeholder="可为空" id="puid" value="26548"   style="width: 220px"></input>
                    </div>
                    <div @click="copy('26548','puid')" style="float:left;margin-left:15px;line-height:40px;cursor:pointer;">复制</div>
                 </div> 

            

                <div style="width:298px;height:48px;border:1px solid #ddd;line-height:50px;color:#666;margin-left:125px;padding-left:15px;border-radius:4px;">
                   如果您不知道如何使用，请查阅 <a href="" style="color: #1879BE;">API文档</a>
                </div>


                <div class="submit">完成</div>
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
      ...mapGetters(['showApi','currentApi'])
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
      ...mapMutations(['CloseApi']),
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
         
        
        
      },  
    //copy 复制到粘贴板
    copy(value,dom){
        // dom 对象必须是 input   area
        document.querySelector('#'+dom).select();
        document.execCommand("copy");
    }  
  }
}
</script>

<style lang="less" scoped>
 @blue1 : #D0E9F7; //弹出款下划线颜色
 @blue2 : #1C95D4; //所有按钮颜色
 input{
     border: 1px solid #ddd;width: 398px;height: 38px; border-radius: 4px;padding-left: 15px;
 }
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
     background: #fff;
     margin-top:10%;
     padding-bottom: 30px;
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
margin-top: 26px;}

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
