<template>
  <div>
      <h2>Auth</h2>
      <router-link to="/auth/login">Login</router-link> |
      <router-link to="/auth/register">Register</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'auth'
}
</script>

<style>

</style>