<template>
  <v-row>
    <v-dialog v-model="dialog" persistent width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" @click="up(id)" v-on="on">UPDATE</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Update toys</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Name" required persistent-hint hint="Enter toy name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Description" persistent-hint hint="Enter toy description"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Category" hint="Enter toy category" persistent-hint required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-radio-group v-model="radioGroup">
                  <v-radio label="ada" value="ada"></v-radio>
                  <v-radio label="tidak ada" value="tidak ada"></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Update</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    id: '',
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
    up: function(id){
      this.$emit('update')
      this.id = id
      alert('ok',this.id)
    }
  }
};
</script>