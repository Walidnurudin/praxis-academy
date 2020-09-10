<template>
  <div>
    <h1>Deatil {{item[0].id}}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getData"]),
    item: function() {
      let a = this.getData.filter(
        (data, index) => index + 1 == this.$route.params.id
      );
      return a;
    }
  },
  mounted() {
    console.log(this.item);
  }
};
</script>