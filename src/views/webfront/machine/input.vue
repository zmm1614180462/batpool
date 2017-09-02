<!--
新建弹出层的 input输入组件
-->
<template>
    <div>
                <!--联系人内容-->

                        <div style="float: left">
                            <input class="magic-checkbox" type="checkbox" name="layout" id="c3" value="小明" >
                            <label style="float: left;line-height: 30px;padding-left: 70px;width: 180px" for="c3">{{name}}</label>
                        </div>
                        <div style="width:312px; float: left;height: 30px;line-height: 30px;">
                            <div v-show="!edit"><!--联系电话-->+86 {{phone}}</div>
                            <div v-show="edit" class="clearfix">
                                <!--国旗  手机号-->
                                <div class="country" style="float: left">
                                    <select >
                                        <option value="cn">中国</option>
                                        <option value="cn"></option>
                                    </select>
                                </div>

                                <div style="position: relative;float: left" >
                                    <input class="inp-phone" type="text" v-model="myphone">
                                </div>
                            </div>

                        </div>
                        <div style="float: left;height: 30px;line-height: 30px;">
                            <div v-show="!edit"><!--邮箱地址-->{{email}}</div>
                            <div v-show="edit">
                                <!--要修改的邮箱信息  绑定邮箱事件-->
                                <input class="inp-email" type="text" v-model="myemail" >
                            </div>

                        </div>
                        <div v-show="!edit" style="float: right">
                            <img @click="changeEdit()" style="margin-right: 32px;cursor: pointer" src="../../../assets/image/编辑.png" alt="">
                            <img @click="remove()" style="cursor: pointer" src="../../../assets/image/删除.png" alt="" >
                        </div>

                        <div v-show="edit" @click="ok" style="float: right" class="mybutton">
                            确定
                        </div>

                    <!--编辑状态-->




    </div>

</template>

<script>

import Lib from 'assets/js/Lib';
import Foot from 'components/Foot'


export default {
  components: {

  },

  created:function () {
      /**
       * 获取出发条件 url()
       * 获取联系人   url()
       */
    this.myemail =this.email;

  },
  computed:{

  },
  data () {
    return {
        myemail:' ',
        myphone:'+86',
        edit:false,
        contatcs:[] //联系人列表
    }
  },
  props:{
      id:{
        type:Number, //要操作的id
        required:true,
      },
      name:{
          type:String,
          required:true
      },
      phone:{
          type:String,
          default:'',
      },
      email:{
          type:String,
          default:'502552936@qq.com',
      }

  },
  methods: {
      changeEdit(){
         this.edit = !this.edit
      },
      ok(){
          var id = this.id;
          var _this = this;
          Lib.M.ajax({
              url:'http://localhost:3000/alert/'+id,
              type:'put',
              data:{email:_this.myemail,phone:_this.myphone},
              success:function (data) {
                  //修改成功后 把email 改成和myemail phone 改成myphone
                  console.log(data)
              }
          })
          //发送后台修改数据
          //返回之前状态
          this.edit = !this.edit;
      },
      remove(){
          var id = this.id;
          var _this = this;
          _this.$emit('removeDate',id) //测试数据 注释待后台接口完毕

//          Lib.M.ajax({
//              url:'http://localhost:3000/alert/'+id,
//              type:'put',
//              data:{email:_this.myemail,phone:_this.myphone},
//              success:function (data) {
//                  //删除成功后 通知父组件id
//                  _this.$emit('removeDate',id)
//              }
//          })
      }
  }
}
</script>

<style lang="less" scoped>
    input{
        text-align: left;
        border: 1px solid #ddd;

    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
 @blue1 : #D0E9F7; //弹出款下划线颜色
 @blue2 : #1C95D4; //所有按钮颜色
 .country select,.inp-phone{
     height: 30px;
     border: 1px solid #ddd;
     color: #666;
 }
 .inp-phone{
     padding-left: 10px;outline: none;
 }
 .inp-email{
     color: #666;
     width: 180px;
     height: 30px;
     line-height: 30px;
     font-size: 14px;
     outline: none;
 }
/*确定按钮*/
 .mybutton{
     width:80px;cursor: pointer;
     height: 30px;line-height: 30px;
     background: @blue2;
     color:#fff;font-size: 14px;text-align: center;
 }

 /*--相关的单选复选按钮--*/
 @keyframes hover-color {
     from {
         border-color: #c0c0c0; }
     to {
         border-color: #3e97eb; } }

 .magic-radio,
 .magic-checkbox {
     position: absolute;
     display: none; }

 .magic-radio[disabled],
 .magic-checkbox[disabled] {
     cursor: not-allowed; }

 .magic-radio + label,
 .magic-checkbox + label {
     position: relative;
     display: block;
     padding-left: 30px;
     cursor: pointer;
     vertical-align: middle; }
 .magic-radio + label:hover:before,
 .magic-checkbox + label:hover:before {
     animation-duration: 0.4s;
     animation-fill-mode: both;
     animation-name: hover-color; }
 .magic-radio + label:before,
 .magic-checkbox + label:before {
     position: absolute;
     top: 4px;
     left: 0;
     display: inline-block;
     width: 20px;
     height: 20px;
     content: '';
     border: 1px solid #c0c0c0; }
 .magic-radio + label:after,
 .magic-checkbox + label:after {
     position: absolute;
     display: none;
     content: ''; }

 .magic-radio[disabled] + label,
 .magic-checkbox[disabled] + label {
     cursor: not-allowed;
     color: #e4e4e4; }
 .magic-radio[disabled] + label:hover, .magic-radio[disabled] + label:before, .magic-radio[disabled] + label:after,
 .magic-checkbox[disabled] + label:hover,
 .magic-checkbox[disabled] + label:before,
 .magic-checkbox[disabled] + label:after {
     cursor: not-allowed; }
 .magic-radio[disabled] + label:hover:before,
 .magic-checkbox[disabled] + label:hover:before {
     border: 1px solid #e4e4e4;
     animation-name: none; }
 .magic-radio[disabled] + label:before,
 .magic-checkbox[disabled] + label:before {
     border-color: #e4e4e4; }

 .magic-radio:checked + label:before,
 .magic-checkbox:checked + label:before {
     animation-name: none; }

 .magic-radio:checked + label:after,
 .magic-checkbox:checked + label:after {
     display: block; }

 .magic-radio + label:before {
     border-radius: 50%; }

 .magic-radio + label:after {
     top: 7px;
     left: 7px;
     width: 8px;
     height: 8px;
     border-radius: 50%;
     background: #3e97eb; }

 .magic-radio:checked + label:before {
     border: 1px solid #3e97eb; }

 .magic-radio:checked[disabled] + label:before {
     border: 1px solid #c9e2f9; }

 .magic-radio:checked[disabled] + label:after {
     background: #c9e2f9; }

 .magic-checkbox + label:before {
     border-radius: 3px; }

 .magic-checkbox + label:after {
     top: 6px;
     left: 7px;
     box-sizing: border-box;
     width: 6px;
     height: 12px;
     transform: rotate(45deg);
     border-width: 2px;
     border-style: solid;
     border-color: #fff;
     border-top: 0;
     border-left: 0; }

 .magic-checkbox:checked + label:before {
     border: #3e97eb;
     background: #3e97eb; }

 .magic-checkbox:checked[disabled] + label:before {
     border: #c9e2f9;
     background: #c9e2f9; }

</style>
