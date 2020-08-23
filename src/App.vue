<template>
  <v-app>
    <v-app-bar dense flat v-show="$vuetify.breakpoint.mobile" absolute dark> 
        <v-menu offset-y dark>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item-group>
              <v-list-item v-scroll-to="'#p-home'">
                <v-list-item-icon>
                  <font-awesome-icon icon="home" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-about'">
                <v-list-item-icon>
                  <font-awesome-icon icon="user" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>About Me</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-resume'">
                <v-list-item-icon>
                  <font-awesome-icon icon="laptop-code" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Resume</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-projects'">
                <v-list-item-icon>
                  <font-awesome-icon icon="folder-open" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-skills'">
                <v-list-item-icon>
                  <font-awesome-icon icon="cogs" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Skills</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-toolbar-title>Jerome Depotter</v-toolbar-title>
        <v-spacer></v-spacer>
        <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" class="p-brand" @click="openLinkedin()" style="margin-right: 25px"/>
        <font-awesome-icon :icon="['fab', 'github']" size="lg" class="p-brand" @click="openGithub()" style="margin-right: 10px"/>
    </v-app-bar>
    <v-layout>   
      <v-card dark>
        <v-navigation-drawer id="p-navigation" fixed left height="450" width="200">
          <v-list dense>
            <v-list-item>
              <v-list-item-avatar>
                <img src="./assets/jdepotter.jpeg" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Jerome Depotter</v-list-item-title>
                <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
          <v-list>
            <v-list-item-group>
              <v-list-item v-scroll-to="'#p-home'">
                <v-list-item-icon>
                  <font-awesome-icon icon="home" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-about'">
                <v-list-item-icon>
                  <font-awesome-icon icon="user" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>About Me</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-resume'">
                <v-list-item-icon>
                  <font-awesome-icon icon="laptop-code" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Resume</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-projects'">
                <v-list-item-icon>
                  <font-awesome-icon icon="folder-open" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Projects</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-scroll-to="'#p-skills'">
                <v-list-item-icon>
                  <font-awesome-icon icon="cogs" size="1x" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Skills</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-container style="padding-top:10px; padding-bottom:0px">
            <v-row justify="center">
              <v-col lg="4" md="4">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg" class="p-brand" @click="openLinkedin()"/>
              </v-col>
              <v-col lg="4" md="4">
                <font-awesome-icon :icon="['fab', 'github']" size="lg" class="p-brand" @click="openGithub()"/>
              </v-col>
            </v-row>
          </v-container>
        </v-navigation-drawer>
      </v-card>
      <v-main :class="{'p-content': !$vuetify.breakpoint.mobile, 'p-content-mobile': $vuetify.breakpoint.mobile}">
        <v-container fluid>
          <v-card id="p-home" class="p-card" :flat="$vuetify.breakpoint.mobile" light>
            <Home></Home>
          </v-card>
          <v-card id="p-about" class="p-card" :flat="$vuetify.breakpoint.mobile" light>
            <v-card-text>
              <h2 class="p-card-title" :class="`grey--text text--darken-2`">About Me</h2>
            </v-card-text>
            <About></About>
          </v-card>
          <v-card id="p-resume" class="p-card" :flat="$vuetify.breakpoint.mobile" light>
            <v-card-text>
              <h2 class="p-card-title" :class="`grey--text text--darken-2`">Resume</h2>
            </v-card-text>
            <Resume></Resume>
          </v-card>
          <v-card id="p-projects" class="p-card" :flat="$vuetify.breakpoint.mobile" light>
            <v-card-text>
              <h2 class="p-card-title" :class="`grey--text text--darken-2`">Projects</h2>
            </v-card-text>
          </v-card>
          <v-card id="p-skills" class="p-card" :flat="$vuetify.breakpoint.mobile" light>
            <v-card-text>
              <h2 class="p-card-title" :class="`grey--text text--darken-2`">Skills</h2>
              <Skills></Skills>
            </v-card-text>
          </v-card>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Home from "@/components/Home";
import About from "@/components/About";

export default {
  name: "App",
  components: {
    Resume,
    Skills,
    Home,
    About,
  },
  data: () => ({
    //
  }),
  methods: {
    openLinkedin: function() {
      window.open("https://www.linkedin.com/in/jerome-depotter/", "_blank")
    },
    openGithub: function() {
      window.open("https://github.com/jdepotter", "_blank")
    } 
  }
};
</script>
