<template>
  <div :class="className" :style="{height:height,width:width}" class="bg-btn-img" @click="change" ></div>
</template>
<script>
  export default {
    name:'eButton2',
    data(){
      return {
        value:0
      }
    },
    props:{
      val:{
        type:Number,
        default:0
      },
      height:{
        type:String,
        default:'100px'
      },
      width:{
        type:String,
        default:'100px'
      }
    },
    mounted(){
      this.value = this.val;
    },
    computed:{
      'className':function(){
        let index = this.value >3 ? 0 : this.value;
        return `e_step${index}`;
      }
    },
    methods:{
      change(){
        this.value++;
        if(this.value>3){
          this.value = 0;
        }
      }
    }
  }
</script>
<style scoped>
 .bg-btn-img{
  background-image: url(../assets/i_bg_btn.png);
  background-size: contain;
  background-repeat: no-repeat;
  /*transition: all 1s ;*/
 }

 .e_step0{
   transform: rotate(0);
 }
 .e_step1{
   transform: rotate(90deg);
 }
.e_step2{
   transform: rotate(180deg);
 }
.e_step3{
   transform: rotate(270deg);
 }



</style>


