<template>
  <div id="app">
    <event :user="user" />
    <hr>
    <binding />
    <hr>
    <Computed/>
    <hr>
    <Conditional/>
  </div>
</template>

<script>
import Event from "./components/event.vue";
import binding from "./components/binding.vue";
import Computed from "./components/computed.vue";
import Conditional from "./components/conditional.vue";

export default {
  name: "App",
  components: {
    Event,
    binding,
    Computed,
    Conditional
  },
  data: () => {
    return {
      user: "walid"
    };
  }
};
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
