<template>
  <div class="demo-wrapper">
    <h2>radio 单选控件</h2>
    <el-radio class="radio" v-model="radio" label="1">男</el-radio>
    <el-radio class="radio" v-model="radio" label="2">女</el-radio>

    <h3>单选</h3>
    <p>最强大的国家</p>
  <el-radio-group v-model="radio2">
    <el-radio :label="3">美国</el-radio>
    <el-radio :label="6">中国</el-radio>
    <el-radio :label="9">日本</el-radio>
  </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1',
        radio2: 6,
      };
    }
  }
</script>