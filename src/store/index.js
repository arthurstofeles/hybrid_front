import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {},
    simulador: false,
  },
  mutations: {
    SET_FORM(state, payload) {
      state.form = payload;
    },
    SET_SIMULADOR(state, payload) {
      state.simulador = payload;
    },
  },
  actions: {
    setForm(context, payload) {
      context.commit("SET_FORM", payload);
    },
    setSimulador(context, payload) {
      context.commit("SET_SIMULADOR", payload);
    },
  },
});
