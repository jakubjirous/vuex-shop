<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :id="prod.id"
        :key="prod.id"
        :description="prod.description"
        :image="prod.image"
        :price="prod.price"
        :title="prod.title"
      />
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  inject: ['products'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
