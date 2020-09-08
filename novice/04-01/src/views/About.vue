<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item in getData" :key="item.id">
      <p>{{item.id}}. {{item.email}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getData'
    ])
  }
}
</script>