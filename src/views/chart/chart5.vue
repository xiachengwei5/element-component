<template>
  <div class="components-container" style='height:100vh'>
    <div class='chart-container'>
      <e-chart id='infore_e_chart' height='100%' width='100%'></e-chart>
    </div>
  </div>
</template>

<script>
  import eChart from '../../components/eChart';

  export default {
    components: { eChart }
  };
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: 90%;
  padding-bottom: 40px;
}
</style>

