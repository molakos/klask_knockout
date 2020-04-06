import Vue from "vue";
import Vuex from "vuex";

import initState from "./model";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { ...initState },
  getters,
  actions,
  mutations,
});

export { initState };
