<template>
  <div id="app">
    <h2>TaeVv</h2>
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
