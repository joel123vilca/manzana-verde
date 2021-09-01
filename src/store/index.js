// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

// // Load store modules dynamically.
// const requireContext = require.context("./modules", false, /.*\.js$/);

// const modules = requireContext
//   .keys()
//   .map(file => [file.replace(/(^.\/)|(\.js$)/g, ""), requireContext(file)])
//   .reduce((modules, [name, module]) => {
//     if (module.namespaced === undefined) {
//       module.namespaced = true;
//     }

//     return { ...modules, [name]: module };
//   }, {});

// export default new Vuex.Store({
//   modules
// });
import Vue from "vue";
import Vuex from "vuex";
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
