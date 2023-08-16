import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {},
  },
  mutations: {
    SET_FORM(state, payload) {
      state.form = payload;
    },
  },
  actions: {
    setForm(context, payload) {
      context.commit("SET_FORM", payload);
    },
  },
});
