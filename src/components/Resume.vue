<template>
  <div>
    <v-timeline class="p-timeline" v-show="!$vuetify.breakpoint.mobile">
      <v-timeline-item v-for="(item, i) in resume.items" :key="i" color="amber lighten-1" small>
        <template v-slot:opposite>
          <span :class="`font-weight-bold amber--text text--darken-1`" v-text="item.opposite"></span>
        </template>
        <div class="py-4">
          <h3 :class="`font-weight-light light-blue--text text--darken-3`" v-text="item.header_1"></h3>
          <h4 :class="`font-weight-bold light-blue--text text--darken-3`" v-text="item.header_2"></h4>
          <p style="font-style: italic">{{item.header_3}}</p>
          <ul style="padding-left: 0px">
            <li v-for="(detail, i) in item.details" :key="i"><span v-html="detail"></span></li>
          </ul>
        </div>
      </v-timeline-item>
    </v-timeline>
    <v-timeline class="p-timeline" v-show="$vuetify.breakpoint.mobile" dense small>
      <v-timeline-item v-for="(item, i) in resume.items" :key="i" color="amber darken-1" small>
        <div class="py-4">
          <h4 :class="`font-weight-bold amber--text text--darken-1`" v-text="item.opposite"></h4>
          <h3 :class="`font-weight-light light-blue--text text--darken-3`" v-text="item.header_1"></h3>
          <h4 :class="`font-weight-bold light-blue--text text--darken-3`" v-text="item.header_2"></h4>
          <p style="font-style: italic">{{item.header_3}}</p>
          <ul style="padding-left: 0px">
            <li v-for="(detail, i) in item.details" :key="i"><span v-html="detail"></span></li>
          </ul>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Resume",
  data() {
    return {
    }
  },
  computed: {
    global() {
      return this.$store.getters.get_site_content.global;
    },
    resume() {
      return this.$store.getters.get_site_content.resume;
    }
  },
};
</script>