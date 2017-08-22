
<template>
   <div>
      <div style="width: 1220px;margin: 0 auto" >
         <navb ></navb>
         <!--预留echart位置-->
         <div style="height: 428px;margin-bottom: 20px;background: red" class="echart"></div>

         <!--广播区块-->
      </div>
      <foot></foot>
   </div>
</template>

<script>

    import Lib  from 'assets/js/Lib';
    import Foot from 'components/Foot'
    import Navb from 'components/NavBa'


    export default {
        components: {
            Foot,Navb
        },
        created:function () {
        },
        data () {
            return {
            }
        },
        methods: {


        }
    }
</script>

<style lang="less" scoped>
   @mybottom : 20px;
 .echart{
    margin-top: 60px;margin-bottom: 40px;
 }
</style>
