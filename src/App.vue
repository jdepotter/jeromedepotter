<template>
  <v-app>
    <v-app-bar dense flat v-show="$vuetify.breakpoint.mobile" fixed :class="`blue-grey lighten-4`">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list :class="`blue-grey lighten-4`">
          <v-list-item-group>
            <v-list-item v-for="(item, i) in menu_items" :key="i" v-scroll-to="item.scrollToMobile">
              <v-list-item-icon>
                <font-awesome-icon :icon="item.icon" size="1x" :style="{'color': '#0277BD'}"/>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title :class="`font-weight-bold grey--text text--darken-2`">{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <font-awesome-icon v-for="(link, i) in links_model" :key="i"
        :icon="link.icon"
        size="lg"
        :style="{'color': '#2E7D32'}"
        class="p-brand"
        @click="(windowOpen(link.target))"
        style="margin-left: 25px"
      />
    </v-app-bar>
    <v-layout>
      <v-card light class="rounded-lg">
        <v-navigation-drawer id="p-navigation" fixed left height="400" width="240" :class="`blue-grey lighten-4`">
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img :src="global.avatar" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title id="p-name" :class="`font-weight-bold light-blue--text text--darken-3`">{{global.name}}</v-list-item-title>
                <v-list-item-subtitle id="p-position" :class="`grey--text text--darken-2`">{{global.position}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
          <v-list>
            <v-list-item-group>
              <v-list-item v-for="(item, i) in menu_items" :key="i" v-scroll-to="item.scrollTo">
                <v-list-item-icon>
                  <font-awesome-icon :icon="item.icon" size="1x" :style="{'color': '#0277BD'}"/>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title :class="`font-weight-bold grey--text text--darken-2`">{{item.title}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-container class="p-link-icon">
            <v-row justify="center">
              <v-col v-for="(link, i) in links_model" :key="i" lg="3" md="4">
                <font-awesome-icon
                  :icon="link.icon"
                  size="lg"
                  :style="{'color': '#2E7D32'}"
                  class="p-brand"
                  @click="windowOpen(link.target)"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-navigation-drawer>
      </v-card>
      <v-main :class="{'p-content': !$vuetify.breakpoint.mobile, 'p-content-mobile': $vuetify.breakpoint.mobile}">
        <v-container fluid>
          <v-card id="p-home" class="p-card rounded-lg" light elevation=2>
            <Home></Home>
          </v-card>
          <v-card id="p-about" class="p-card rounded-lg" light elevation=2>
            <v-card-text>
              <h2 class="p-card-title" :class="`light-blue--text text--darken-3`">{{cards.about}}</h2>
            </v-card-text>
            <About></About>
          </v-card>
          <v-card id="p-skills" class="p-card rounded-lg" light elevation=2>
            <v-card-text>
              <h2 class="p-card-title" :class="`light-blue--text text--darken-3`">{{cards.skills}}</h2>
            </v-card-text>
            <Skills></Skills>
          </v-card>
          <v-card id="p-resume" class="p-card rounded-lg" light elevation=2>
            <v-card-text>
              <h2 class="p-card-title" :class="`light-blue--text text--darken-3`">{{cards.experience}}</h2>
            </v-card-text>
            <Resume></Resume>
          </v-card>
          <!-- <v-card id="p-projects" class="p-card rounded-lg" light elevation=2> -->
            <!-- <v-card-text> -->
              <!-- <h2 class="p-card-title" :class="`light-blue--text text--darken-3`">{{cards.projects}}</h2> -->
            <!-- </v-card-text> -->
            <!-- <Projects></Projects> -->
          <!-- </v-card> -->
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
import Projects from "@/components/Projects";

import siteConfig from "./assets/site-config";

export default {
  name: "App",
  components: {
    Resume,
    Skills,
    Home,
    About,
    Projects,
  },
  data: () => ({
  }),
  computed: {
    menu_items() {
      return this.$store.getters.get_site_content.menu_items;
    },
    links() {
      return this.$store.getters.get_site_content.links;
    },
    cards() {
      return this.$store.getters.get_site_content.cards;
    },
    global() {
      return this.$store.getters.get_site_content.global;
    },
    links_model() {
      return [
      {
        icon: ["fab", "linkedin-in"],
        target: this.links.linkedin,
      },
      {
        icon: ["fab", "github"],
        target: this.links.github,
      },
      {
        icon: ["fa", "file-download"],
        target: this.links.resume,
      },
    ]},
  },
  beforeMount() {
    this.$store.dispatch('SAVE_SITE_CONTENT', { site_content: siteConfig })
  },
  methods: {
    windowOpen: function (target) {
      window.open(target, "_blank");
    },
  },
};
</script>
