<template>
  <div id="app">
    <coba-vuex/>
    <hr>
    <latihan :nama="name" />
    <hr>
    <!-- <kasus/> -->
  </div>
</template>

<script>
import latihan from "./components/latihan";
// import kasus from "./components/kasus";
import cobaVuex from "./components/coba-vuex";

export default {
  name: 'App',
  data: () => {
    return {
      name: "walid nurudin"
    }
  },
  components: {
    latihan,
    // kasus,
    cobaVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
