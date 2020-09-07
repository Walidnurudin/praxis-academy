<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <router-link to="/">
        <v-toolbar-title class="title">Website</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/about">
        <v-btn>
          <v-icon>mdi-account-hard-hat</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  color: white;
  font-size: bold;
}
</style>