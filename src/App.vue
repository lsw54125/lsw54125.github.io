<template>
  <div id="app">
    <h2>TaeVv</h2>
<!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace >关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeClick() {
      this.$router.replace('/home')
    },
    aboutClick() {
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
</style>
