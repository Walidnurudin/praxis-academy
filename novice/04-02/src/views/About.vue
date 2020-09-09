<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-text-field type="text" v-model="form.title" @keyup.enter="add()" label="masukan data"></v-text-field>
    <v-btn color="teal accent-3" @click="add()">add</v-btn>

    <div v-if="loading">
      <h1 v-if="error">Error network...</h1>
      <h1 v-else>Loading...</h1>
    </div>

    <v-simple-table v-else weight="300px" height="400px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">Title</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td>
              <div>{{ item.title }}</div>
              <v-text-field
                type="text"
                v-model="form.edit"
                @keyup.enter="edit()"
                label="masukan data"
              ></v-text-field>
            </td>
            <td>
              <v-btn color="red darken-1" @click="del(item.id)" rounded>delete</v-btn>
              <v-btn color="teal accent-3" @click="edit(item)" rounded>update</v-btn>
              <v-btn color="light-blue accent-3" @click="update(item)" rounded>save</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      form: {
        title: "",
        edit: ""
      },
      data: [],
      loading: true,
      error: false
    };
  },

  methods: {
    get: function() {
      axios
        .get("http://192.168.1.44:3000/tasks")
        .then(res => res.data)
        .then(res => {
          this.data = res;
          this.loading = false;
          console.log(this.data);
        })
        .catch(err => {
          this.error = true;
          console.log(err);
        });
    },
    add: function() {
      axios.post("http://192.168.1.44:3000/task/add", this.form).then(() => {
        this.get();
        this.form.title = "";
      });
    },
    del: async function(param) {
      await axios
        .delete("http://192.168.1.44:3000/task/delete/" + param)
        .then(() => {
          this.get();
        });
    },
    edit: function(item) {
      this.form.edit = item.title;
    },
    update: function(){

    }
  },

  mounted() {
    this.get();
  },

  updated() {
    this.get();
    console.log("ok");
  }
};
</script>