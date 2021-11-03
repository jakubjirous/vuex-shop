const rootMutations = {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};

export default rootMutations;
