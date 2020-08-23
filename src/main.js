import Vue from 'vue'
import vueScrollto from 'vue-scrollto'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import {
  faHome,
  faUser,
  faLaptopCode,
  faCogs,
  faFolderOpen,
  faFileDownload,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('font-awesome-layers-text', FontAwesomeLayersText);

library.add(faHome);
library.add(faUser);
library.add(faLaptopCode);
library.add(faCogs);
library.add(faFolderOpen);
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faFileDownload);

Vue.use(vueScrollto)

Vue.config.productionTip = false

import './assets/style.scss';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
