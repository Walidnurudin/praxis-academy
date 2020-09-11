<template>
  <v-app>
    <navbar />
    <v-main class="mt-10">
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
  created() {
    this.$store.dispatch("get");
  }
};
</script>
