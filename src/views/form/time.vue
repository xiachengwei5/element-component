<template>
<div class="demo-wrapper">
  <h3>固定时间</h3>
  <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>

  <h3>任意时间</h3>

   <el-time-picker
    is-range
    v-model="value2"
    placeholder="请选择上班时间范围">
  </el-time-picker>


<!---->

<h3>选择日期</h3>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions0">
    </el-date-picker>
  </div>


<h3>周 月 年</h3>

<div style="text-align:none;">
<div class="block">
  <span class="demonstration">周</span>
  <el-date-picker
    v-model="value3"
    type="week"
    format="yyyy 第 WW 周"
    placeholder="选择周">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">月</span>
  <el-date-picker
    v-model="value4"
    type="month"
    placeholder="选择月">
  </el-date-picker>
</div>
<div class="block">
  <span class="demonstration">年</span>
  <el-date-picker
    v-model="value5"
    align="right"
    type="year"
    placeholder="选择年">
  </el-date-picker>
</div>
</div>


  <h3>时间范围</h3>
  <div class="block">
    <span class="demonstration">选择起止时间</span>
    <el-date-picker
      v-model="value6"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>
  </div>



<h3>时间日期</h3>

 <div class="block">
    <span class="demonstration">选择时间日期</span>
    <el-date-picker
      v-model="value7"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </div>




</div>

</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: '',
        value1:'',
        value3: '',
        value4: '',
        value5: '',
        value6:'',
        value7:'',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value2: [new Date(2017, 4, 27, 8, 30), new Date(2017, 4, 27, 21, 40)]
      };
    }
  }
</script>