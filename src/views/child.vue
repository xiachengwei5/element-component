<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
     <div >{{name}}</div>
     <solt name="defalut">slot -{{name}}</solt>
  </div>
</template>
<script>
// 测试数据
 // const cityOptions = ['上海', '北京', '广州', '深圳'];

  export default {
    data() {
      return {
        title:'我是title',
       
      };
    },
    props:{
      name:String
    },
    methods: {
      methodA(){
        console.log(this.name);
      }
    }
  };
</script>
<style>
  

</style>