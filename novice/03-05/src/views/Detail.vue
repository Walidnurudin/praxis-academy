<template>
      <div>
          <h1>{{data.id}}</h1>
      </div>
</template>

<script>
export default {
    data: () => {
        return {
            data: {}
        }
    },
    mounted(){
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        .then(res => res.json())
        .then(res => {
            this.data = res;
            console.log(this.data)
        })
    }
}
</script>

<style>

</style>