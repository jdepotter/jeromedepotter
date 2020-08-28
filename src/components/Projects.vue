<template>
    <v-container fluid class="p-projects">
        <div v-for="(project, i) in projects" :key="i">
            <h3 class="p-project-name" :class="`light-blue--text text--darken-3`">{{project.name}}</h3>
            <v-row v-for="(item, i) in project.content" :key="i" class="p-project-block">
                <p v-if="item.type === 'text'" >
                    <span v-for="(l, i) in item.val" :key="i" v-html="l"></span>
                </p>
                <v-img v-if="item.type === 'img'" :src="item.val" contain></v-img>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {     
    };
  },
  computed: {
    global() {
      return this.$store.getters.get_site_content.global;
    },
    projects() {
      return this.$store.getters.get_site_content.projects.projects;
    }
  },
};
</script>