<template>
  <div class="demo-wrapper">
    <div  v-show="false" v-for="item in demos" :key="item.name" >
      <span>{{item.name}}</span>
      <span>{{item.value}}</span>
    </div>
    <div class="components-container">
      <div class='chart-container'>
        <e-yi-biao-pan height='400px' width='400px' :value="data1"  @on-value-change="change1"  series-name="温度" series-data-name="水温计" series-formatter="℃"></e-yi-biao-pan>
        <div>
          <h2>调节温度</h2>
          <el-slider v-model="data1" :change="changeTemp" :format-tooltip="formatTooltip"></el-slider>
        </div>
      </div>
    </div>

   <div class="components-container">
    <div class='chart-container'>
      <e-yi-biao-pan1 id="chart2" height='400px' width='400px' :value="data2"  series-name="数值" series-data-name="水表"></e-yi-biao-pan1>
      <div>
        <h2>调节水压</h2>
        <el-slider v-model="data2" :change="changeTemp" :min="0" :max="2"  :step="1" show-stops></el-slider>
      </div>
    </div>
  </div>

  <div>
    <h3>速度计</h3>
    <e-yi-biao-pan2 id="chart3" height='400px' width='400px' :value="60"  series-formatter="" :min="0" :max="220" :split-number="11" series-name="速度" series-data-name="KM/H"></e-yi-biao-pan2>
  </div>

    <div>
      <h3>开关</h3>
      <div>
        <el-switch v-model="isOpen" on-text="" off-text=""> </el-switch>
        <el-switch v-model="isOpen" on-color="#13ce66" off-color="#ff4949"> </el-switch>
        <el-switch v-model="isOpen" on-text="开" off-text="关"  on-color="#111" off-color="#eee"> </el-switch>
        <span class="infore-switch" :class="{'on':isOpen}" @click="isOpen=!isOpen"></span>
        <span class="infore-switch1" :class="{'on':isOpen}" @click="isOpen=!isOpen"></span>
        <span class="infore-switch2" :class="{'on':isOpen}" @click="isOpen=!isOpen"></span>
      </div>
    </div>


    <div>
      <h3>百分比组件--进度条控件</h3>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="p1" style="width:100px;"></el-progress>
      <div class="gap"></div>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="p1"></el-progress>
      <div class="gap"></div>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="p1" status="success"></el-progress>
      <div class="gap"></div>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="p1" status="exception"></el-progress>
      <div class="gap"></div>
      <el-progress type="circle" :percentage="p1" :width="50"></el-progress>
      <el-progress type="circle" :percentage="p1" :width="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="p1" :width="126" status="exception"></el-progress>
      <h2>调节百分比值</h2>
      <el-slider v-model="p1"></el-slider>
    </div>

    <div>
      <h3>告警灯e-alarm</h3>
      <span class="yx-alarm yx-small"></span>
      <span class="yx-alarm" :class="{'on':isOpen}"></span>
      <span class="yx-alarm1 yx-small"></span>
      <span class="yx-alarm1"></span>
      <e-alarm></e-alarm>
      <e-alarm height="60px" width="60px" type="yx-alarm1"></e-alarm>
      <e-alarm height="30px" width="25px" type="yx-alarm"></e-alarm>
    </div>

    <div>
      <h3>数码管e-shumaguan</h3>
      <e-shu-ma-guan id="shumaguan1" :value="v1" color="#f00"></e-shu-ma-guan>
      <e-shu-ma-guan id="shumaguan2" :value="3456" color="#0f0"></e-shu-ma-guan>
      <e-shu-ma-guan id="shumaguan3" :value="127890" color="#00f" padding="10px 15px 10px 15px"></e-shu-ma-guan>
      <e-shu-ma-guan id="shumaguan4" type="light" :value="83070916" color="#999"></e-shu-ma-guan>
    </div>


    <div>
      <h3>刻度计e-thermometer | e-range</h3>
      <e-thermometer :degrees="20"></e-thermometer>
      <e-thermometer :degrees="-20"></e-thermometer>
      <e-range color="#00f" :is-vertical="true" :val="17" :min="5" :max="30" :height="80"></e-range>
      <e-range color="#68d7c6" :is-vertical="false" :min="10" :max="100" :step="5" :val="e1" :title="e1"></e-range>
      <e-range color="#fd625e" :is-vertical="false"  :min="10" :max="100" :step="20" :val="e2" :title="e2"></e-range>
      <e-range color="#898579" :is-vertical="false" :val="e1"></e-range>
    </div>
    
    <div v-if="true">
      <h3>刻度按钮e-button2</h3>
      <e-button2 :percent="75" id="e-button1" width="100px" height="100px" ></e-button2>
      <e-button2 :percent="25" id="e-button2" width="50px" height="50px" ></e-button2>
      <e-button2 :percent="50" id="e-button3" width="75px" height="75px" ></e-button2>
    </div>

    <div>
      <h3> 环形进度按钮 e-circle-progress</h3>
      <e-circle-progress :during="20" :pv="pv1"  color="#f01250" ></e-circle-progress>
      <e-circle-progress :during="10" :pv="24" color="#f00" :font-size="40" :width="100"  text-color="#68d7c6"></e-circle-progress>
      <e-circle-progress :during="10" :pv="77"  :font-size="100" :width="200"  text-color="#898579" text-bg-color="#fff" :bold="20" color="#fd625e"></e-circle-progress>
    </div>

    <div>
      <h3>水波纹进度条-e-water-wave-progress</h3>
      <e-water-wave-progress id="e-water-wave-progress" width="300px" height="300px" value="0.1" ></e-water-wave-progress>
      <e-water-wave-progress id="e-water-wave-progress1" width="300px" height="300px" value="0.6, 0.5, 0.4, 0.3" ></e-water-wave-progress>
      <e-water-wave-progress id="e-water-wave-progress2" width="300px" height="300px" value="0.7, 0.5, 0.1" :waveAnimation="false"></e-water-wave-progress>
    </div>

  </div>
</template>
<script>
  import EYiBiaoPan from '../../components/eYibiaopan';
  import EYiBiaoPan1 from '../../components/eYibiaopan1';
  import EYiBiaoPan2 from '../../components/eYibiaopan2';
  import EShuMaGuan from '../../components/eShumaguan';
  import EThermometer from '../../components/eThermometer';
  import ERange from '../../components/eRange';
  import EButton2 from '../../components/eButton2';
  import ECircleProgress from '../../components/eCircleProgress';
  import EAlarm from '../../components/eAlarm';
  import EWaterWaveProgress from '../../components/eWaterWaveProgress';
  export default {
    components: { EYiBiaoPan,EYiBiaoPan1,EYiBiaoPan2, EShuMaGuan,EThermometer,ERange,EButton2,ECircleProgress,EAlarm,EWaterWaveProgress},
    data() {
      return {
        title:'我是title',
        data1:23,
        data2:1,
        s1:true,
        s2:true,
        s3:true,
        step:1111,
        pv1:88,
        isOpen:true,
        p1:10,
        e1:10,
        e2:20,
        demos:[
          { 
            name:'数码管',
            value:1,
          },{
            name:'仪表盘',
            value:1,
          },{
            name:'开关',
            value:1,
          },{
            name:'功放表',
            value:1
          },{
            name:'告警灯',
            value:1
          },{
            name:'进度条',
            value:0.5
          },{
            name:'鼠标调节表',
            value:1
          }
        ]
      };
    },
    computed:{
      'v1':function(){
        return Math.ceil(Math.random()*99999999)
      }
    },
    mounted(){
      // this.$Progress.finish();ajx
    },
    methods: {
      changeTemp(val){
        console.log(val);
        this.data1 = val;
        // this.$emit('update:value', val);
      },
      change1(){
        console.log("invoke1")
      },
      formatTooltip(val){
        return `调节温度${val}℃`;
      },
      handleChange(val){
        // debugger;
        // var shumaguan = this.$refs.shumaguan;
        // shumaguan.value = val;
      },
      methodA(){

      }
    }
  };
</script>
<style scoped>
  .infore-switch{
    background: url(../../assets/014_switch_off.png);
    background-size:contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 46px;
    width: 57px;
  }

  .infore-switch.on{
    background: url(../../assets/014_switch_on.png);
    background-size:contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 46px;
    width: 57px;
  }


  .infore-switch1{
    background: url(../../assets/s_off.jpg);
    background-size:contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 44px;
    width: 102px;
  }

  .infore-switch1.on{
      background: url(../../assets/s_on.jpg);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      height: 44px;
      width: 102px;
    }

      .infore-switch1{
    background: url(../../assets/s_off.jpg);
    background-size:contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 44px;
    width: 102px;
  }

  .infore-switch1.on{
      background: url(../../assets/s_on.jpg);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      height: 44px;
      width: 102px;
    }
      .infore-switch2{
    background: url(../../assets/s1_off.jpg);
    background-size:contain;
    background-repeat: no-repeat;
    display: inline-block;
    height: 49px;
    width: 125px;
    transform: scale(0.9);
  }

  .infore-switch2.on{
      background: url(../../assets/s1_on.jpg);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      height: 49px;
      width: 125px;
      transform: scale(0.9);
    }

    .gap{
      height: 10px;
      width: 100%;
    }

    .yx-alarm{
      background-image: url(../../assets/alarm_off.jpg);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 170px;
      height: 213px;
    }

    .yx-alarm1{
      background-image: url(../../assets/alarm2.gif);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 177px;
      height: 214px;
    }


    .yx-alarm.on{
      background-image: url(../../assets/alarm_on.gif);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 170px;
      height: 213px;
    }

    .yx-small{
      width: 40px;
      height: 50px;
    }

</style>



