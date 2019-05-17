<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <img src="https://iconscout.com/icon/hello-7.png">
        <p>Hello, ITEC 2650 Students!</p>
    </HelloWorld>

    <HelloNamed>
      <template v-slot:subject>Web Programming</template>
      <template v-slot:day>Thursday</template>
    </HelloNamed>
  
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
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
