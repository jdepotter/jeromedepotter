import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    site_content: {
    }
  },
  getters: {
    get_site_content: (state) => state.site_content,
  },
  mutations: {
    save_site_content: (state, {
      site_content,
    }) => {
      Vue.set(state, 'site_content', site_content);
    },
  },
  actions: {
    SAVE_SITE_CONTENT: async ({
      commit,
    }, {
      site_content,
      }) => {
      commit('save_site_content', {
        site_content,
      });
    },
  },
  modules: {
  }
})
