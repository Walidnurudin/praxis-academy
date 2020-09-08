<template>
  <div>
    <h1>Counter {{getCount}}</h1>
    <v-btn @click="increment">add</v-btn>
    <div v-for="item in getData" :key="item.id">
      <p>{{item.id}}. {{item.username}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

export default {
  methods: {
    ...mapActions([
      'increment',
    ])
  },
  computed: {
    ...mapGetters([
      'getCount',
      'getData'
    ])
  },
  mounted(){
    this.$store.dispatch('get');
  }
}
</script>
