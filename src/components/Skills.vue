<template>
  <v-container class="p-skill">
    <div v-for="(skill, i) in skills.categories" :key="i">
      <h3 class="p-skill-title" :class="`grey--text text--darken-3`">{{skill.title}}</h3>
      <v-row class="p-skill-block">
        <template v-for="(item, i) in skill.items">
          <v-col :key="i" class="p-skill-col">
            <v-row>
              <h3 class="p-skill-name">{{item.name}}</h3>
              <v-rating
                v-model="item.score"
                color="amber darken-1"
                background-color="grey darken-1"
                :small="$vuetify.breakpoint.mobile"
                :medium="!$vuetify.breakpoint.mobile"
                half-increments
                dense
              ></v-rating>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </div>
    <div></div>
  </v-container>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {     
    };
  },
  computed: {
    global() {
      return this.$store.getters.get_site_content.global;
    },
    skills() {
      return this.$store.getters.get_site_content.skills;
    }
  },
};
</script>