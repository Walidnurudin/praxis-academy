<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">Add new toys</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add toys</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="form.name" label="Name" required persistent-hint hint="Enter toy name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="form.description" label="Description" persistent-hint hint="Enter toy description"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="form.toy_category" label="Category" hint="Enter toy category" persistent-hint required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group v-model="form.was_included_in_home">
                  <v-radio label="ada" :value="true"></v-radio>
                  <v-radio label="tidak ada" :value="false"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="add()">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    form: {
        name: '',
        description: '',
        release_date: "2017-10-08T01:01:00.776594Z",
        toy_category: '',
        was_included_in_home: false
    }
  }),
  methods: {
      add: async function(){
          await axios.post('http://192.168.1.44:8000/toys', this.form)
          .then(res => {
              this.dialog = false;
              console.log(res);
              
              this.form.name = '';
              this.form.description = '';
              this.form.toy_category = '';

              this.$store.dispatch('get');
          })
          .catch(err => {
              this.dialog = false;
              console.log(err)
          })
      }
  }
};
</script>