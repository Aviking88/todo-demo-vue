import { LOCAL_STORAGE_USER_DATA } from '../shared/constant';

export default {
  state: () => ({
    user: localStorage.getItem(LOCAL_STORAGE_USER_DATA)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DATA)) : {
        email: null,
        id: null,
      },
  }),
  mutations: {
    'userData/setuser': (state, payload) => {
      state.user = payload;
    },
  },
};
