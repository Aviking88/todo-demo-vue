import Vue from 'vue';
import Vuex from 'vuex';
import SnackbarState from './snackbar';
import userData from './userData';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
  },
  mutations: {},
  actions: {},
  modules: {
    snackbar: SnackbarState,
    userStore: userData,
  },
});
