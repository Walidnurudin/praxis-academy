<template>
  <div>
    <h1>kasus</h1>
    <p v-for="item in data" :key="item.id">{{item.id}}. {{item.title}}</p>
  </div>
</template>

<script>
export default {
    name: "kasus",
    data: () => {
      return {
        data: ''
      }
    },
    beforeCreate(){
      console.log("Before create!");
    },
    created(){
      console.log("Created!");
    },
    beforeMount(){
      console.log("Before mount!");
      fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(res => {
          this.data = res;
          console.log(this.data);
        })
        .catch(err => console.log(err))
    },
    mounted(){
      console.log("Mounted!")
    },
    beforeUpdate(){
      console.log("Before update!");
    },
    updated(){
      console.log("Update!")
    },
    beforeDestroy(){
      console.log("Before destroyed!")
    },
    destroyed(){
      console.log("Destroyed!")
    }
}
</script>

<style>

</style>