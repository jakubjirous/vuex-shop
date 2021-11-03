import { createStore } from 'vuex';
import rootActions from './actions';
import rootGetters from './getters';
import cartModule from './modules/cart';
import productsModule from './modules/products';
import rootMutations from './mutations';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: rootMutations,
  getters: rootGetters,
  actions: rootActions,
});

export default store;
