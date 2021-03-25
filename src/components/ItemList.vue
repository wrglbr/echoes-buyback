<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.title }} - {{ item.price | currency }}
      <br />
      <button :disabled="!item.inventory" @click="addItemToCart(item)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    items: (state) => state.items.all,
  }),
  methods: mapActions("cart", ["addItemToCart"]),
  created() {
    this.$store.dispatch("items/getAllItems");
  },
};
</script>