const cartActions = {
  addToCart(context, payload) {
    const productId = payload.productId;
    const products = context.rootGetters['products/products'];
    const product = products.find((prod) => prod.id === productId);
    context.commit('addProductToCart', product);
  },
  removeFromCart(context, payload) {
    context.commit('removeProductFromCart', payload);
  },
};

export default cartActions;
