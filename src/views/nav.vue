<template>
  <div>
    <header>{{title}}</header>
    <p>
      <router-link to="/login">Login页面</router-link>
      <router-link to="/home">Home页面</router-link>

      <h3>接口测试</h3>
      <router-link to="/test">test</router-link>

      <h3>表单</h3>
      <router-link to="/form/checkbox">checkbox</router-link>
      <router-link to="/form/radio">radio</router-link>
      <router-link to="/form/form1">form1</router-link>
      <router-link to="/form/tree">tree</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '导航页面'
    }
  },

  methods: {

  }
}
</script>

<style>

</style>
