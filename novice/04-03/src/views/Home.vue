<template>
  <div>
    <add />
    <v-simple-table fixed-header height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Name</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="isLoading"><h1>Loading...</h1></tr>
          <tr v-else v-for="i in getData" :key="i.id">
            <td class="text-center">{{i.id}}</td>
            <td class="text-center">
              <router-link :to="`/detail/${i.id}`">{{i.name}}</router-link>
            </td>
            <td class="text-center">
              <v-row>
                <v-col>
                  <v-btn @click="del(i.id)" color="red darken-2">delete</v-btn>
                </v-col>
                <v-col>
                  <update :p="i" />
                </v-col>
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import add from "../components/add";
import update from "../components/update";
import { mapState, mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    add,
    update
  },
  computed: {
    ...mapGetters(["getData"]),
    ...mapState([
      'isLoading',
      'isError'
    ])
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
    }
  }
};
</script>