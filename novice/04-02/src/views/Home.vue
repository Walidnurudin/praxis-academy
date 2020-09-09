<template>
  <div>
    <v-text-field type="text" v-model="todo" @keyup.enter="add()" label="masukan data"></v-text-field>
    <v-btn outlined @click="add()">add</v-btn>
    
    <div v-for="(a, i) in data" :key="i">
      <h1>{{a.title}}</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: ()=> {
    return {
      todo: '',
      data: []
    }
  },
  methods: {
    add: function(){
      this.data.push({title: this.todo});
      this.todo = '';
    }
  }
}
</script>
