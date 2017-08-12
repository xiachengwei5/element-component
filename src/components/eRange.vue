<template>
  <div class="erange" :class="{'vertical':isVertical}"  :style="{'height':vheight}">
    <input type='range' :title="title" :min='min' :max='max' :step='step' v-model='value'  :style="{height:height,width:width,color:color}" :class="{'vertical':isVertical}"></input>
  </div>
</template>
<script>
  export default {
    watch:{
      'value':function(val,oldval){
        // console.log(`${val}  : ${oldval}`);
        this.value = val;
        this.title = val? val:oldval;
        // this.val = this.value;
      }
    },
    mounted(){
      this.value = this.val;
    },
    data(){
      return {
        title:'',
        value:''
      }
    },
    props:{
      min:{
        type:Number,
        default:0,
      },
      max:{
        type:Number,
        default:32
      },
      step:{
        type:Number,
        default:1
      },
      val:{
        type:Number,
        default:0
      },
      height:{
        type:Number
      },
      width:{
        type:Number
      },
      vheight:{
        type:Number
      },
      color:{
        type:String,
        default:'#68d7c6'
      },
      isVertical:{
        type:Boolean,
        default:true
      }
    }
  }
</script>
<style scoped>
.erange {
  height: 100%;
  
  overflow: hidden;
  /*border:1px solid red;*/
  background:#fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  min-width: 24.1875em;
  /*transform: rotate(-90deg);*/
}
.erange.vertical{
   height:340px;
}
.erange .vertical{
   transform: rotate(-90deg);
}
.erange input[type='range'] {
  align-self: center;
  border: solid 0 transparent;
  border-width: 0 1.25em;
  padding: 0;
  width: 16.125em;
  height: 5.25em;
  opacity: .65;
  background: linear-gradient(90deg, #d5cebc 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 2.5em content-box;
  background-size: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
}
.erange input[type='range'], input[type='range']::-webkit-slider-runnable-track, input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.erange input[type='range']::-webkit-slider-runnable-track {
  position: relative;
  width: 16.125em;
  height: 1.75em;
  background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;
  background-size: 16.125em 0.375em;
}
.erange input[type='range']::-moz-range-track {
  width: 16.125em;
  height: 1.75em;
  background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;
  background-size: 16.125em 0.375em;
}
.erange input[type='range']::-ms-track {
  margin-left: 0.625em;
  border: none;
  width: 16.125em;
  height: 1.75em;
  background: linear-gradient(#d5cebc, #d5cebc) no-repeat 50% 0;
  background-size: 16em 0.375em;
  color: transparent;
}
.erange input[type='range']::-moz-range-progress {
  height: 1.75em;
  box-shadow: inset 0 0.375em currentColor;
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']::-ms-fill-lower {
  height: 1.75em;
  box-shadow: inset 0 0.375em currentColor;
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']::-webkit-slider-thumb {
  position: relative;
  margin-left: -0.0625em;
  margin-top: 0.25em;
  border: none;
  border-radius: 50% 50% 0;
  background: currentColor;
  width: 1.25em;
  height: 1.25em;
  box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;
  transform: translate(1px, -1.75888em) rotate(45deg);
}
.erange input[type='range']::-moz-range-thumb {
  border: none;
  border-radius: 50% 50% 0;
  background: currentColor;
  width: 0.125em;
  height: 0.125em;
  box-shadow: 0.12013em 0.12013em 0 -0.05625em, 0.12325em 0.12325em 0 -0.05625em, 0.12637em 0.12637em 0 -0.05625em, 0.1295em 0.1295em 0 -0.05625em, 0.13263em 0.13263em 0 -0.05625em, 0.13575em 0.13575em 0 -0.05625em, 0.13888em 0.13888em 0 -0.05625em, 0.142em 0.142em 0 -0.05625em, 0.14513em 0.14513em 0 -0.05625em, 0.14825em 0.14825em 0 -0.05625em, 0.15137em 0.15137em 0 -0.05625em, 0.1545em 0.1545em 0 -0.05625em, 0.15762em 0.15762em 0 -0.05625em, 0.16075em 0.16075em 0 -0.05625em, 0.16388em 0.16388em 0 -0.05625em, 0.167em 0.167em 0 -0.05625em, 0.17013em 0.17013em 0 -0.05625em, 0.17325em 0.17325em 0 -0.05625em, 0.17638em 0.17638em 0 -0.05625em, 0.1795em 0.1795em 0 -0.05625em, 0.18262em 0.18262em 0 -0.05625em, 0.18575em 0.18575em 0 -0.05625em, 0.18888em 0.18888em 0 -0.05625em, 0.192em 0.192em 0 -0.05625em, 0.19513em 0.19513em 0 -0.05625em, 0.19825em 0.19825em 0 -0.05625em, 0.20138em 0.20138em 0 -0.05625em, 0.2045em 0.2045em 0 -0.05625em, 0.20763em 0.20763em 0 -0.05625em, 0.21075em 0.21075em 0 -0.05625em, 0.21387em 0.21387em 0 -0.05625em, 0.217em 0.217em 0 -0.05625em, 0.22013em 0.22013em 0 -0.05625em, 0.22325em 0.22325em 0 -0.05625em, 0.22638em 0.22638em 0 -0.05625em, 0.2295em 0.2295em 0 -0.05625em;
  transform: translateY(-1.75888em) rotate(45deg) scale(10);
}
.erange input[type='range']::-ms-thumb {
  border: none;
  border-radius: 50% 50% 0;
  background: currentColor;
  width: 1.25em;
  height: 1.25em;
  box-shadow: 1.1875em 1.1875em 0 -0.5625em, 1.25em 1.25em 0 -0.5625em, 1.3125em 1.3125em 0 -0.5625em, 1.375em 1.375em 0 -0.5625em, 1.4375em 1.4375em 0 -0.5625em, 1.5em 1.5em 0 -0.5625em, 1.5625em 1.5625em 0 -0.5625em, 1.625em 1.625em 0 -0.5625em, 1.6875em 1.6875em 0 -0.5625em, 1.75em 1.75em 0 -0.5625em, 1.8125em 1.8125em 0 -0.5625em, 1.875em 1.875em 0 -0.5625em, 1.9375em 1.9375em 0 -0.5625em, 2em 2em 0 -0.5625em, 2.0625em 2.0625em 0 -0.5625em, 2.125em 2.125em 0 -0.5625em, 2.1875em 2.1875em 0 -0.5625em, 2.25em 2.25em 0 -0.5625em, 2.3125em 2.3125em 0 -0.5625em, 2.375em 2.375em 0 -0.5625em;
  transform: translate(1px, -1.75888em) rotate(45deg);
}
.erange input[type='range']::-ms-tooltip {
  display: none;
}
.erange input[type='range']::-webkit-slider-runnable-track:before, input[type='range']::-webkit-slider-runnable-track:after, input[type='range'] /deep/ #track:before, input[type='range'] /deep/ #track:after {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 0.5625em;
  height: 100%;
  background: white;
  content: '';
}
.erange input[type='range']::-webkit-slider-runnable-track:after, input[type='range'] /deep/ #track:after {
  right: 0;
  left: auto;
}
.erange input[type='range']::-webkit-slider-thumb:before, input[type='range'] /deep/ #thumb:before {
  position: absolute;
  top: 50%;
  right: 50%;
  width: 16.125em;
  transform-origin: 100% 0;
  transform: rotate(-45deg) translate(0.0625em, 0.88388em);
  height: 1.75em;
  box-shadow: inset 0 0.375em currentColor;
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
  color: inherit;
  content: '';
}
.erange input[type='range']:nth-of-type(1) {
  color: #68d7c6;
}
.erange input[type='range']:nth-of-type(1)::-ms-fill-lower {
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']:nth-of-type(2) {
  color: #7d4d75;
}
.erange input[type='range']:nth-of-type(2)::-ms-fill-lower {
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']:nth-of-type(3) {
  color: #fd625e;
}
.erange input[type='range']:nth-of-type(3)::-ms-fill-lower {
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']:nth-of-type(4) {
  color: #898579;
}
.erange input[type='range']:nth-of-type(4)::-ms-fill-lower {
  background: linear-gradient(90deg, currentColor 0.125em, rgba(0, 0, 0, 0) 0.125em) repeat-x 0 100%;
  background-size: 0.5em 1em;
}
.erange input[type='range']:focus {
  outline: none;
  opacity: .99;
}

/* Chrome/ Opera */
.erange input[type='range']:not(*:root) {
  overflow: hidden;
  width: 17.25em;
  background-position: 0.5625em 2.5em;
}

</style>
