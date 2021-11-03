const cartGetters = {
  products(state) {
    return state.items;
  },
  totalSum(state) {
    return state.total;
  },
  quantity(state) {
    return state.qty;
  },
};

export default cartGetters;
