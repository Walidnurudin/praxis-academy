<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        {{item[0].id}}. {{item[0].name}}
      </p>
      <p>{{item[0].release_date}}</p>
      <div class="text--primary">
        description : {{item[0].description}}<br>
        <span v-if="item[0].was_included_in_home" class="green--text">already at home</span>
        <span v-else class="red--text">Not at home</span>
      </div>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getData"]),
    item: function() {
      let a = this.getData.filter(
        (data) => data.id == this.$route.params.id
      );
      return a;
    }
  },
  mounted() {
    console.log(this.item);
  }
};
</script>