<template>
  <v-container class="p-skill">
    <div v-for="(skill, i) in skills.categories" :key="i">
      <h3 class="p-skill-title" :class="`light-blue--text text--darken-3`">{{skill.title}}</h3>
      <v-row class="p-skill-block">
        <h4>{{ skill.items.map(item => item).join(' · ') }}</h4>
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
