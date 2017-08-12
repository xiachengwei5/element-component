  <template>
    <span class="yx-alarm" :class="type" show="show" :style="spanStyle"></span>
  </template>
  <script>
    export default {
      name:'eAlarm',
      props:{
        type:{
          type:String,
          default:'yx-alarm'
        },
        show:{
          type:Boolean,
          default:true
        },
        height:{
          type:String,
          default: '50px'
        },
        width:{
          type:String,
          default: '40px'
        }
      },
      computed:{
        spanStyle :function(){
          return {
            height: this.height,
            width: this.width
          }
        }
      }
    }
  </script>
  <style scoped>
    .yx-alarm{
      background-image: url(../assets/alarm_off.jpg);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 170px;
      height: 213px;
    }
    .yx-alarm1{
      background-image: url(../assets/alarm2.gif);
      background-size:contain;
      background-repeat: no-repeat;
      display: inline-block;
      width: 177px;
      height: 214px;
    }
  </style>
  
  
