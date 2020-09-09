<template>
  <div>
    <v-text-field type="text" v-model="todo" @keyup.enter="add()" label="masukan data"></v-text-field>
    <v-btn color="teal accent-3" @click="add()">add</v-btn>

    <div v-for="(a, i) in data" :key="i">
      <h1>{{a.title}}</h1><v-btn color="red darken-1" @click="del(i)" rounded>X</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => {
    return {
      todo: "",
      data: []
    };
  },
  methods: {
    add: function() {
      this.data.push({ title: this.todo });
      this.todo = "";
    },
    del: function(id){
      this.data.splice(id, 1);
    },
    update: function(){

    }
  }
};
</script>
