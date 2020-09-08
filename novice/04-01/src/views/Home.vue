<template>
  <div>
    <h1>Counter {{getCount}}</h1>
    <v-btn @click="increment">add</v-btn>
    <div v-for="item in getData" :key="item.id">
      <router-link :to="`/detail/${item.id}`">
        <p>{{item.id}}. {{item.username}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["increment"])
  },
  computed: {
    ...mapGetters(["getCount", "getData"])
  }
};
</script>
