<template>
    <v-container>
      <v-row>
        <v-col align="center">
          <v-card outlined>
            <h1>JSON placeholder | POSTS</h1>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-card outlined>
            <h1>category</h1>
            <div v-for="item in data" :key="item.id">
              <p>{{item.id}}. {{item.title}}</p>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
            <h1>content</h1>
            <div v-for="item in data" :key="item.id">
              <p>{{item.id}}. {{item.body}}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => {
    return {
      data: []
    }
  },
  components: {},
  async mounted(){
    let data = await fetch('http://jsonplaceholder.typicode.com/posts')
                        .then(res => res.json());
    this.data = data;
    console.log(this.data);
  }
};
</script>
