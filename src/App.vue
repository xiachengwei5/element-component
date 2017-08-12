<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
   export default{
      name: 'APP'
    }
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
a, a:focus, a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}

.demo-wrapper{
  text-align: center;
  width: 100%;
  display: block;
}
</style>
