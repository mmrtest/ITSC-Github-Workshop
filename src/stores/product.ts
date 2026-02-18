import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product", () => {
  const products = ref([
    {
      id: 1,
      name: "Premium Plan",
      price: 29.99,
      description: "Best for small businesses",
    },
    {
      id: 2,
      name: "Enterprise Plan",
      price: 99.99,
      description: "For large organizations",
    },
  ]);

  function addProduct(product: {
    name: string;
    price: number;
    description: string;
  }) {
    products.value.push({
      id: Math.max(0, ...products.value.map((p) => p.id)) + 1,
      ...product,
    });
  }

  function removeProduct(id: number) {
    const index = products.value.findIndex((p) => p.id === id);
    if (index !== -1) {
      products.value.splice(index, 1);
    }
  }

  return { products, addProduct, removeProduct };
});
