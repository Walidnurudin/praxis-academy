<template>
  <div class="about">
    <h1>This is an home page {{getCount}}</h1>
    <v-btn @click="increment">add</v-btn>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations([
      'increment'
    ])
  },
  computed: {
    ...mapGetters([
      'getCount'
    ])
  }
}
</script>
