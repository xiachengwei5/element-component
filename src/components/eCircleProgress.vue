<template>
  <div class="v-circle" :style="circleStyle">
    <div class="mask full" :style="[maskStyle, transitionStyle, rotateStyle]">
      <div class="fill" :style="[fillStyle, transitionStyle, rotateStyle]"></div>
    </div>
    <div class="mask half" :style="[maskStyle]">
      <div class="fill" :style="[fillStyle, transitionStyle, rotateStyle]"></div>
      <div class="fill fix" :style="[fillStyle, fixStyle, transitionStyle]"></div>
    </div>
    <div class="pv" :style="pvStyle">
      <span class="progress" :style="progressTextStyle">
      {{ pv || 0 }}
    </span>
    </div>
  </div>
</template>
<script>
let DEFAULT_WIDTH = 150;
let DEFAULT_BOLD = 5;
let DEFAULT_FONT_SIZE = 64;
let DEFAULT_BORDER_COLOR = '#bdc3c7';
let DEFAULT_TEXT_COLOR = '#bdc3c7';
let DEFAULT_FILL_COLOR = '#2ecc71';
let DEFAUTL_BG_COLOR = '#f9f9f9';
let DEFAUTL_TEXT_BG_COLOR = '#333333';
export default {
   name: "e-circle-progress",
    props: {
      'color':{
        type:String
      },
      'width':{
        type:Number,
        default:150
      },
      'fontSize':{
        type:Number,
        default:64
      },
      'textColor':{
        type:String,
        default:'#bdc3c7'
      },
      'textBgColor':{
        type:String,
        default:'#333333'
      },
      'borderColor':{
        type:String,
        default:'#bdc3c7'
      },
      'during':{
        type:Number,
        default:0.8
      },
      'bgColor':{
        type:String,
        default:'#f9f9f9'
      },
      'pv':{
        type:Number,
        default:0
      },
      'bold':{
        type:Number,
        default:5
      }
    },
    data(){
      return {
        value:''
      }
    },
    created(){
      this.value = this.$props.pv;
    },
    methods: {
      setClip: function(t, r, b, l) {
        return "rect(" + t + "px, " + r + "px, " + b + "px, " + l + "px)";
      },
      setTransformStyle: function(pv, type) {
        var deg;
        deg = Math.floor(pv / 100 * 180);
        if (type === 'fix') {
          return "rotate(" + (deg * 2) + "deg)";
        }
        return "rotate(" + deg + "deg)";
      },
      setTransitionStyle: function(t) {
        return "transform " + t + "s";
      }
    },
    computed: {
    transformStyleValue: function() {
      return this.setTransformStyle(this.pv);
    },
    innerCircleWidth: function() {
      return (this.width || DEFAULT_WIDTH) - (2 * (this.bold || DEFAULT_BOLD)) + 'px';
    },
    fixTransformStyleValue: function() {
      return this.setTransformStyle(this.pv, 'fix');
    },
    transitionStyleValue: function() {
      return this.setTransitionStyle(this.during || 0.8);
    },
    circleStyle: function() {
      return {
        borderColor: this.borderColor || DEFAULT_BORDER_COLOR,
        borderStyle: 'solid',
        borderWidth: DEFAULT_BOLD + 'px',
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        backgroundColor: this.bgColor || DEFAUTL_BG_COLOR
      };
    },
    progressTextStyle: function() {
      return {
        fontSize: (this.fontSize || DEFAULT_FONT_SIZE) + 'px',
        color: this.textColor || DEFAULT_TEXT_COLOR
      };
    },
    fillStyle: function() {
      return {
        backgroundColor: this.color || DEFAULT_FILL_COLOR,
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        clip: this.setClip(0, this.width / 2, this.width, 0)
      };
    },
    rotateStyle: function() {
      return {
        transform: this.transformStyleValue,
        webkitTransform: this.transformStyleValue,
        msTransform: this.transformStyleValue,
        oTransform: this.transformStyleValue,
        mozTransform: this.transformStyleValue
      };
    },
    transitionStyle: function() {
      return {
        transition: this.transitionStyleValue,
        webkitTransition: this.transitionStyleValue,
        mozTransition: this.transitionStyleValue,
        oTransition: this.transitionStyleValue,
        msTransition: this.transitionStyleValue
      };
    },
    maskStyle: function() {
      return {
        width: (this.width || DEFAULT_WIDTH) + 'px',
        height: (this.width || DEFAULT_WIDTH) + 'px',
        clip: this.setClip(0, this.width, this.width, this.width / 2)
      };
    },
    pvStyle: function() {
      return {
        backgroundColor: this.textBgColor || DEFAUTL_TEXT_BG_COLOR,
        width: this.innerCircleWidth,
        height: this.innerCircleWidth,
        lineHeight: this.innerCircleWidth
      };
    },
    fixStyle: function() {
      return {
        transform: this.fixTransformStyleValue,
        webkitTransform: this.fixTransformStyleValue,
        mozTransform: this.fixTransformStyleValue,
        oTransform: this.fixTransformStyleValue,
        msTransform: this.fixTransformStyleValue
      };
    }
  }


}

</script>
<style scoped>
  .v-circle {
    border-radius: 50%;
    position: relative;
  }
  .v-circle .mask,
  .v-circle .fill {
    position: absolute;
    border-radius: 50%;
    backface-visibility: hidden;
  }
  .v-circle .pv {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    border-radius: 50%;
    text-align: center;
  }
  .v-circle .progress {
    margin: 0;
    padding: 0;
    font-family: 'Impact';
  }
</style>