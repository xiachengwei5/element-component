<template>
  <div class="thermometer">
    <div class="measure">
      <div v-for="n in range" v-bind:class="{boldLine: n % 5 == 0}" class="line" v-bind:key="n">
        <p v-if="n % 5 == 0">{{ isPositive ? range - n : -n }}</p>
      </div>
    </div>
    <div class="sensor">
      <div :style="{background: color, color: color, height: sensorVal }" class="temperatureSensor sensorVal">
        <span>{{ degrees}}°C</span>
        <div class="bottomColor"></div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<style>
.thermometer {
  width: 4.5em;
  height: 24em;
  display: flex;
  padding: .5em;
  padding-top: 2em;
  background: #fff;
  border-radius: 4em;
  margin-bottom: 6em;
  position: relative;
  justify-content: center;
}

.bottom {
  top: 90%;
  width: 35%;
  height: 32%;
  content: '';
  background: #fff;
  position: absolute;
  border-radius: 2em;
  overflow: hidden;
  /*left 50% - (@width/2)*/
}

.thermometer:after {
  content: '';
  position: absolute;
  pointer-events: none;
  top: -1.9%;
  left: 56%;
  width: 110%;
  height: 135%;
  z-index: 2;
  transform: skew(25deg) rotate(25deg);
  background: rgba(#000, .1);
}

.sensor {
  z-index: 2;
  width: 15%;
  height: 107.5%;
  position: relative;
  background: #eee;
}

sensor .bottomColor {
  top: 98%;
  width: 150%;
  height: 4em;
  content: '';
  background: inherit;
  position: absolute;
  border-radius: 2em;
}

.sensor .sensorVal {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  color: #f42;
  background: #f42;
}

.sensorVal span {
  cursor: help;
  background: #fff;
  padding: .2em;
  box-shadow: 0 .1em .1em rgba(#000, .2);
  font-weight: 600;
  font-size: 1.1em;
  position: relative;
  top: -.5em;
  left: 150%;
}

.measure {
  position: absolute;
  height: 85%;
  width: 20%;
  z-index: 2;
  /*left: 0;*/
  left: 36px;
  display: flex;
  flex-flow: column;
}

.measure .line {
  position: relative;
  background: #444;
  flex-grow: 1;
  margin-top: .5em;
  width: 90%;
}

.measure .boldLine {
  width: 150%
}

.measure .boldLine p {
  position: absolute;
  font-weight: 600;
  color: #444;
  right: 110%;
  top: -200%;
  margin: 0;
}
</style>
<script>
   export default {
    props: {
      degrees: Number,
    },
    data() {
      return {
        range: 30,
      };
    },
    computed: {
      sensorVal() {
        let percent = Math.abs(this.degrees) * 2.9;
        return `${this.isPositive ? percent + 10.5 : 97.5 - percent}%`;
      },
      isPositive() {
        return this.degrees >= 0;
      },
      color() {
        return this.degrees > 0 ? '#f42' : '#a0ccff';
      },
    },
  };



</script>
