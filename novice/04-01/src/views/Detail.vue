<template>
  <div>
    <h1>{{item[0].id}}. {{item[0].name}}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getData"]),
    item: function() {
      let a = this.getData.filter((a, i) => i + 1 == this.$route.params.id);
      return a;
    }
  }
};
</script>