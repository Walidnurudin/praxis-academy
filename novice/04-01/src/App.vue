<template>
  <v-app>
    <navbar />

    <v-main>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";

export default {
  name: "App",

  components: {
    navbar
  },
  async created() {
    await this.$store.dispatch("get");
  }
};
</script>
