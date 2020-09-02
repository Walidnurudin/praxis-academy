<template>
  <div>
    <h3>{{user}}</h3>
    <hr>
    <h1>Event</h1>
    <form @submit.prevent="submit()">
      <input type="text" />
    </form>

    <button @click="counter += 1">{{counter}}</button>
  </div>
</template>

<script>
export default {
  name: "Event",
  data: () => {
    return {
      counter: 0
    }
  },
  props: ["user"],
  methods: {
    submit() {
      alert("submit");
    }
  }
};
</script>

<style>
</style>