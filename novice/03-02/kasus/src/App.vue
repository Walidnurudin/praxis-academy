<template>
  <div>
    <!-- grid -->
    <div id="demo">
      <form id="search">
        Search
        <input name="query" v-model="searchQuery" />
      </form>
      <Grid :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery"></Grid>
    </div>

    <!-- modal -->
    <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
        -->
        <h3 slot="header">custom header</h3>
      </Modal>
    </div>
  </div>
</template>

<script>
import Grid from "./components/grid.vue";
import Modal from "./components/modal"

export default {
  name: "App",
  components: {
    Grid,
    Modal
  },
  data: function() {
    return {
      showModal: false,
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 }
      ]
    };
  }
};
</script>

<style>
</style>
