<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
    
    <div id="main" class="baidu-base-demo"></div>


  </div>
</template>
<script>
// 测试数据
 // const cityOptions = ['上海', '北京', '广州', '深圳'];

var echarts = require('echarts');

  export default {
    data() {
      return {
        title:'百度图表',
       
      };
    },
    mounted(){
      this.methodA();
    },
    methods: {
      methodA(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      console.log("myChart",myChart);
      // 绘制图表
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["java","js","c#","node","swift"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [8, 9, 7, 6, 20]
          }]
      });
      }
    }
  };
</script>
<style>
  .baidu-base-demo{
    width: 100%;
    height: 400px;
  }

</style>