<template>
  <div class="demo-wrapper">
    <h2>{{title}}</h2>
    
    <div id="main"></div>


  </div>
</template>
<script>
// 测试数据
 // const cityOptions = ['上海', '北京', '广州', '深圳'];

var echarts = require('echarts');

  export default {
    data() {
      return {
        title:'百度图标',
       
      };
    },
    mount(){
      this.methodA();
    },
    methods: {
      methodA(){
        
      

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
      // 绘制图表
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
      }
    }
  };
</script>
<style>
  

</style>