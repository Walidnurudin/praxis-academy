<template>
  <v-row>
    <v-dialog v-model="dialog" persistent width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">UPDATE</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Update toys</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Name"
                  v-model="form.name"
                  required
                  persistent-hint
                  hint="Enter toy name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Description"
                  v-model="form.description"
                  persistent-hint
                  hint="Enter toy description"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Category"
                  v-model="form.toy_category"
                  hint="Enter toy category"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group v-model="form.was_included_in_home">
                  already home?
                  <v-radio label="yeah" :value="true"></v-radio>
                  <v-radio label="no" :value="false"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="up()">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'

export default {
  props: ['p'],
  data: () => ({
    dialog: false,
    radioGroup: '',
    form: {
        name: '',
        description: '',
        release_date: "2017-10-08T01:01:00.776594Z",
        toy_category: '',
        was_included_in_home: false
    }
  }),
  methods: {
    up: function(){
      axios.put('http://192.168.1.44:8000/toys/' + this.p.id, this.form)
      .then(res => {
              this.dialog = false;

              this.form.name = '';
              this.form.description = '';
              this.form.toy_category = '';

              this.$store.dispatch("get")
              alert(res.statusText + ' sukses')
      })
      .catch(err => {
        alert(err)
      })
    }
  }
}
</script>