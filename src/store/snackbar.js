export default {
  state: () => ({
    snack: '',
  }),
  mutations: {
    'snackbar/setSnack': (state, snack) => {
      state.snack = snack;
    },
  },
};
