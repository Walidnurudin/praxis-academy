<template>
  <div>
    <h1>kasus</h1>
    <table>
      <tr>
        <th>No.</th>
        <th>Title</th>
      </tr>
      <tr v-for="item in data" :key="item.id">
        <td @click="show(item.id)">{{item.id}}.</td>
        <td v-show="id.includes(item.id)">{{item.title}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "kasus",
  data: () => {
    return {
      data: "",
      id: []
    };
  },
  beforeCreate() {
    console.log("Before create!");
  },
  created() {
    console.log("Created!");
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(res => res.json())
      .then(res => {
        this.data = res;
        console.log(this.data);
      })
      .catch(err => console.log(err));
  },
  beforeMount() {
    console.log("Before mount!");
  },
  mounted() {
    console.log("Mounted!");
  },
  methods: {
    show: function(id){
      return this.id.push(id)
    }
  }
};
</script>

<style scoped>
table {
  margin: 0 auto;
}
table, tr, th, td {
  border: 1px solid black;
}
</style>