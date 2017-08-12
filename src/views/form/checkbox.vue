<template>
  <div class="demo-wrapper">
    <h2>checkbox 多选</h2>
    <!-- `checked` 为 true 或 false -->
    <el-checkbox v-model="checked">备选项</el-checkbox>

    <h3>多个选项Demo</h3>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>

  <h3>全选和反选</h3>
  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>

  <h3>控制多选选择数量</h3>
   <el-checkbox-group v-model="checkedCities1"  :min="1"
    :max="3">
    <el-checkbox v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>


  </div>
</template>
<script>
 const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checked: true,
        checkList: ['选中且禁用','复选框 A'],
        checkAll: true,
        checkedCities: ['上海', '北京'],
        checkedCities1: ['深圳', '北京'],
        cities1 : cityOptions,
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<style>
  

</style>