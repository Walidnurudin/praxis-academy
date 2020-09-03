<template>
  <div>
    <!-- v-bind: gak nyampe state, divalue saja / cuma buat nampilin state saja -->
    <h1>{{komponen}}</h1>
    <h3>{{nama}}</h3>

    <!-- v-model: nyampe state -->
    <p>{{keterangan}}</p>
    <input type="text" v-model="bind">
    <button @click="addBind()">add</button>
    <h3>{{bind}}</h3>
    <ul>
      <li v-for="(b, index) in binds" :key="index">{{index + 1}}. {{b}}</li>
    </ul>

    <!-- computed -->
    <p>{{num1}} + {{num2}} = {{tambah}}</p>
  </div>
</template>

<script>
export default {
  name: "latihan",
  data: () => {
    return {
      komponen: "Latihan",
      bind: "",
      binds: [],
      num1: 20,
      num2: 30,
      keterangan: ''
    };
  },
  props: ["nama"],

  // computed: function untuk mengambil nilai state, dan memanipulasi menggunakan variabel baru.
  computed: {
    tambah: function(){
      return this.num1 + this.num2
    }
  },

  // methods: function untuk manipulasi state.
  methods: {
    addBind() {
      this.binds.push(this.bind);
      this.bind = "";
    }
  },

  // watcher: merubah state dengan mengaitkan state lainnya, nama harus di samain dengan nama state
  watch: {
    bind: function(){
      return this.keterangan = 'sedang mengetik . . .'
    }
  }
};
</script>

<style>
</style>