<template>
  <section>
    <h2>Shop Admin</h2>
    <p>There isn't much to do at the moment - sorry ...</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ShopAdmin',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated() {
      if (!this.isAuthenticated) {
        this.$router.push({
          name: 'ProductsList'
        })
      }
    }
  },
}
</script>

<style scoped>
section {
  text-align: center;
  margin: 3rem auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 2rem;
}
</style>
