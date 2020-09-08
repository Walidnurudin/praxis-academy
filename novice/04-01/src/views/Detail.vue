<template>
  <div>
    <div>{{getData | item(this.$route.params.id)}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getData"]),
  },
  filters: {
    item: function(value, key) {
      let a = value.filter((a, i) => i + 1 == key);
      return a;
    }
  }
};
</script>

<style>
</style>