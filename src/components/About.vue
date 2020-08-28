<template>
  <v-container fluid class="p-about">
    <v-row>
      <v-col md="5" lg="5" sm="12" cols="12" class="p-col-1">
        <v-row v-for="(info, i) in about.info_left" :key="i">
          <h4 :class="`light-blue--text text--darken-3`">{{info.title}}</h4>
          <p style="margin-bottom: 10px">{{info.value}}</p>
        </v-row>
      </v-col>
      <v-col md="7" lg="7" sm="12" cols="12" class="p-col-2">
        <v-row v-for="(info, i) in about.info_right" :key="i">
          <h4 :class="`light-blue--text text--darken-3`">{{info.title}}</h4>
          <ul>
            <li v-for="(item, j) in info.items" :key="j" style="margin-bottom: 10px">
              <p style="margin: 0"
                :class="`font-weight-bold grey--text text--darken-3`">
                {{item.header}}
              </p>
              {{item.details}}<br>
              {{item.subDetails}}
            </li>
          </ul>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="p-button" justify="center">
      <v-btn dark color="amber lighten-1" :href="links.resume" download>
        {{about.btn_resume}}
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
      button_align: this.$vuetify.breakpoint.mobile ? "center" : "start",
    };
  },
  computed: {
    global() {
      return this.$store.getters.get_site_content.global;
    },
    links() {
      return this.$store.getters.get_site_content.links;
    },
    about() {
      return this.$store.getters.get_site_content.about;
    }
  },
  methods: {
    downloadResume: function () {
      window.open("../public/jdepotter.pdf", "_blank");
    },
  },
};
</script>