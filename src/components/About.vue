<template>
  <v-container fluid class="p-about">
    <v-row>
      <v-col md="4" lg="4" sm="12" cols="12" class="p-col-1">
        <v-row>
          <h4 :class="`grey--text text--darken-3`">Birthday</h4>
          <p style="margin-bottom: 10px">22 November, 1988</p>
        </v-row>
        <v-row>
          <h4 :class="`grey--text text--darken-3`">Location</h4>
          <p style="margin-bottom: 10px">Los Angeles, USA</p>
        </v-row>
        <v-row>
          <h4 :class="`grey--text text--darken-3`">Nationality</h4>
          <p style="margin-bottom: 10px">France</p>
        </v-row>
      </v-col>
      <v-col md="8" lg="8" sm="12" cols="12" class="p-col-2">
        <v-row>
          <h4 :class="`grey--text text--darken-3`">Education</h4>
          <ul>
            <li>
              <p
                style="margin: 0"
                :class="`font-weight-bold grey--text text--darken-2`"
              >Master Degree in Computer Science (2012)</p>Institut Nationale des Sciences Appliquees de Lyon, France
            </li>
            <li style="margin-top: 5px">
              <p
                style="margin: 0"
                :class="`font-weight-bold grey--text text--darken-2`"
              >Bachelor Degree in Software and Firmware Science (2009)</p>University Paul Sabatier, Toulouse, France
            </li>
          </ul>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="p-button" justify="center">
      <v-btn dark color="amber darken-1" href="/files/jdepotter.pdf" download>
        Get My Resume
        <font-awesome-icon :icon="['fa', 'file-download']" size="lg" style="margin-left: 10px"/>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      button_align: $vuetify.breakpoint.mobile ? "center" : "start",
    };
  },
  methods: {
    downloadResume: function () {
      window.open("../public/jdepotter.pdf", "_blank");
    },
  },
};
</script>