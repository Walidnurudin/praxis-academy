<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home-variant</v-icon>
        </v-btn>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <router-link to="/modules">
      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/about">
      <v-btn icon>
        <v-icon>mdi-account-box</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>