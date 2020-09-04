<template>
  <div class="about">
    <div v-for="item in data" :key="item.id">
      <router-link :to="`/about/${item.id}`">
        <h1>{{item.name}}</h1>
        <p>{{item.phone}}</p>
        </router-link>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: []
    };
  },
  methods: {
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => (this.data = res))
      .catch(err => console.log(err));
  }
};
</script>