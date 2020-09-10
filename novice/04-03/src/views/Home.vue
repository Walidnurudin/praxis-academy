<template>
  <div>
    <add/>
    <div v-for="i in getData" :key="i.id">
      <h1>{{i.id}}. {{i.name}}</h1>
      <update/>
      <v-btn color="red darken-2">delete</v-btn>
    </div>
  </div>
</template>

<script>
import add from '../components/add'
import update from '../components/update'
import {mapGetters} from 'vuex'

export default {
  components: {
    add,
    update
  },
  computed: {
    ...mapGetters([
      'getData'
    ])
  }
};
</script>