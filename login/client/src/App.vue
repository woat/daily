<template>
  <div id="app">
    <Navi />
    <router-view/>
  </div>
</template>

<script>
import Navi from '@/components/Navi'

export default {
  name: 'app',
  components: { Navi }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
