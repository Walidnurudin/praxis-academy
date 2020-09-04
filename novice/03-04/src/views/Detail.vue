<template>
  <div>
    <h1>{{data.id}}. {{data.name}}</h1>
    <p>Username: {{data.username}}</p>
    <p>Email: {{data.email}}</p>
    <p>Website: {{data.website}}</p>
    <p>Phone: {{data.phone}}</p>
  </div>
</template>

<script>
export default {
    data:() => {
        return {
            data: []
        }
    },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
          let i = this.$route.params.id - 1;
        this.data = res[i];
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>