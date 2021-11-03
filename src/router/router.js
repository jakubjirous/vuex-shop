import { createRouter, createWebHistory } from 'vue-router';

import ProductsList from '../pages/ProductsList.vue';
import ShopAdmin from '../pages/ShopAdmin.vue';
import UserCart from '../pages/UserCart.vue';
import store from '../store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList, name: 'ProductsList' },
    { path: '/cart', component: UserCart, name: 'UserCart' },
    {
      path: '/admin',
      component: ShopAdmin,
      name: 'ShopAdmin',
      meta: {
        needsAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    if (!store.getters['isAuthenticated']) {
      next({
        name: 'ProductsList',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
