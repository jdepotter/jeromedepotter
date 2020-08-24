<template>
  <v-container fluid class="p-home">
    <v-row>
      <v-col md="12" lg="2" sm="12" cols="12">
        <v-row align="center">
          <v-col sm="4" cols="4">
            <v-avatar size="100" style="margin-bottom: 5px">
              <img :src="global.avatar" />
            </v-avatar>
          </v-col>
          <v-col sm="8" cols="8" v-show="$vuetify.breakpoint.mobile">
            <h3 :class="`font-weight-bold grey--text text--darken-3`">{{global.name}}</h3>
            <h4 :class="`font-weight-light grey--text text--darken-3`">{{global.position}}</h4>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="12" lg="10" sm="12" cols="12">
        <h3>{{home.header}}</h3>
        <p v-for="(p, i) in home.paragraphs" :key="i">
          {{p}}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    global() {
      return this.$store.getters.get_site_content.global;
    },
    home() {
      return this.$store.getters.get_site_content.home;
    }
  },
};
</script>