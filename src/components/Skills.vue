<template>
  <v-container class="p-skill">
    <div>
      <h3 class="p-skill-title" :class="`grey--text text--darken-3`">Languages/Framework</h3>
      <v-row class="p-skill-block">
        <template v-for="(skill, i) in languages">
          <v-col :key="i" class="p-skill-col">
            <v-row>
              <h3 class="p-skill-name">{{skill.name}}</h3>
              <v-rating
                v-model="skill.score"
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

      <h3 class="p-skill-title" :class="`grey--text text--darken-3`">Technologies</h3>
      <v-row class="p-skill-block">
        <template v-for="(skill, i) in technologies">
          <v-col :key="i" class="p-skill-col">
            <v-row>
              <h3 class="p-skill-name">{{skill.name}}</h3>
              <v-rating
                v-model="skill.score"
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

      <h3 class="p-skill-title" :class="`grey--text text--darken-3`">Databases</h3>
      <v-row class="p-skill-block">
        <template v-for="(skill, i) in databases">
          <v-col :key="i" class="p-skill-col">
            <v-row>
              <h3 class="p-skill-name">{{skill.name}}</h3>
              <v-rating
                v-model="skill.score"
                color="amber darken-1"
                background-color="grey darken-1"
                :small="$vuetify.breakpoint.mobile"
                :medium="!$vuetify.breakpoint.mobile"
                half-increments
                dense
              ></v-rating>
            </v-row>
          </v-col>
          <v-responsive v-if="i === 2" :key="`width-${i}`" width="100%"></v-responsive>
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
      languages: [
        {
          name: "C#",
          score: 4,
        },
        {
          name: "Python",
          score: 3.5,
        },
        {
          name: "Node.js",
          score: 3.5,
        },
        {
          name: "Vue.js",
          score: 3,
        },
        {
          name: "jQuery",
          score: 3.5,
        },
        {
          name: "C++",
          score: 3,
        },
        {
          name: "SQL",
          score: 3,
        },
        {
          name: "HTML",
          score: 3,
        },
        {
          name: "CSS",
          score: 3,
        },
        {
          name: "ASP.NET",
          score: 4,
        },
      ],
      technologies: [
        {
          name: "REST API",
          score: 4,
        },
        {
          name: "Web Socket",
          score: 3.5,
        },
        {
          name: "Docker",
          score: 2.5,
        },
        {
          name: "AWS",
          score: 2,
        },
      ],
      databases: [
        {
          name: "SQL Server",
          score: 3,
        },
        {
          name: "PostgresSQL",
          score: 3,
        },
        {
          name: "MongoDB",
          score: 2,
        },
      ],
    };
  },
};
</script>