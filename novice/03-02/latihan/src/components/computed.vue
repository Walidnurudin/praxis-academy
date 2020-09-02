<template>
  <div>
    <h1>Computed</h1>
    <p>Original : {{message}}</p>
    <p>Reversed : {{reverse}} - {{now}}</p>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data: () => {
    return {
        message: "Hello"
    };
  },
  computed: {
      reverse: function (){
          return this.message.split('').reverse().join('');
      },
      now: function(){
          return Date.now()
      }
  }
};
</script>

<style scoped>
</style>