<template>
  <div class="demo-wrapper">
    <div :id="id" :class="type" class="e-shumaguan" >
      <div class="display">
        <div class="digits"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'eShumaguan',
  props:{
    id:{
      type:String,
      required:true,
    },
    value:{
      type:Number,
      default:0,
      required:true
    },
    type:{
      type:String,
      default:'dark'
    },
    color:{
      type:String,
      default:'#foo'
    },
    padding:{
      type:String,
      default: '5px'
    }
  },
  mounted(){
    // this.methodA();
    this.init();
  },
  methods: {
     init() {
      let me = this;
      var wrapper = document.querySelector(`#${me.id}.e-shumaguan`);
      // 更新padding值
      wrapper.style.padding = me.padding;
      
      var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
      var digits = {};
      var positions = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8' ];
      var digit_holder = wrapper.querySelector('.digits');

      positions.forEach(function(val, index, arr){
        let divNode = document.createElement('div');
        for(var i=1; i < 8; i++){
          let spanNode = document.createElement('span');
          spanNode.className = 'd'+ i;
          divNode.appendChild(spanNode);
        }
        digits[val] = divNode;
        digit_holder.appendChild(divNode);
      })
        var now = (me.value+'').split('').reverse();
        // 设置值
        digits.h1.setAttribute('class', digit_to_name[now[7]]);
        digits.h2.setAttribute('class', digit_to_name[now[6]]);
        digits.h3.setAttribute('class', digit_to_name[now[5]]);
        digits.h4.setAttribute('class', digit_to_name[now[4]]);
        digits.h5.setAttribute('class', digit_to_name[now[3]]);
        digits.h6.setAttribute('class', digit_to_name[now[2]]);
        digits.h7.setAttribute('class', digit_to_name[now[1]]);
        digits.h8.setAttribute('class', digit_to_name[now[0]]);
        // 设置颜色
        // debugger;
        let selector = `#${me.id}.e-shumaguan.${me.type} .digits div span`;
        console.log(selector);
        let nodes = document.querySelectorAll(selector);
        let len = nodes.length>56 ?56:56;
        for(let i=0;i < len; i++){
          let item = nodes[i];
          item.style['backgroundColor']=  me.color;
          item.style['borderColor'] = me.color; 
        }
      }
    }
};
</script>
<style scoped>
 @import url('../assets/shumaguan.css');
</style>
