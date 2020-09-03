<template>
  <div>
      <h1>vuex</h1>
      <!-- cara memanggil vuex 2 -->
      <h3 v-bind:href="this.$store.state.name">{{this.$store.state.name}}</h3>
      <h3>{{city}}</h3>
      <h3>{{HobbyId(3).name}}</h3>
  </div>
</template>

<script>
// cara memanggil vuex 1, cara pake nya di computed
import { mapState, mapGetters } from "vuex";

export default {
    computed: {
        ...mapState([
            'city'
        ]),
        ...mapGetters([
            'HobbyId'
        ])
    }
}
</script>

<style>

</style>