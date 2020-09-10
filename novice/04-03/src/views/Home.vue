<template>
  <div>
    <add />
    <div v-for="i in getData" :key="i.id">
      <router-link :to="`/detail/${i.id}`">
        <h1>{{i.id}}. {{i.name}}</h1>
      </router-link>
      <v-btn @click="del(i.id)" color="red darken-2">delete</v-btn>
      <update @update="up(i.id)" />
    </div>
  </div>
</template>

<script>
import add from "../components/add";
import update from "../components/update";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    add,
    update
  },
  computed: {
    ...mapGetters(["getData"])
  },
  methods: {
    del: function(id) {
      axios
        .delete("http://192.168.1.44:8000/toys/" + id)
        .then(res => {
          this.$store.dispatch("get");
          console.log(res);
        })
        .catch(err => console.log(err));
    },
    up: function(id) {
      alert(id)
    }
  }
};
</script>