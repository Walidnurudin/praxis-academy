<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-text-field type="text" v-model="title" @keyup.enter="add()" label="masukan data"></v-text-field>
    <v-btn color="teal accent-3" @click="add()">add</v-btn>

    <div v-if="loading">
      <h1>loading...</h1>
    </div>

    <div v-else v-for="item in data" :key="item.id">
      <h1>{{item.id}}. {{item.title}}</h1>
      <v-btn color="red darken-1" @click="del()" rounded>X</v-btn>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: "",
      data: [],
      loading: true
    };
  },

  methods: {
    add: function() {
      axios.post()
    },
    del: function() {
      axios.delete()
    },
    update: function(){
      axios.put()
    }
  },

  mounted() {
    axios
      .get("http://192.168.1.44:3000/tasks")
      .then(res => res.data)
      .then(res => {
        this.data = res;
        this.loading = false;
        console.log(this.data);
      });
  }
};
</script>