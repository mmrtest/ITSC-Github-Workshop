<script setup lang="ts">
import { ref } from "vue";
import { useProductStore } from "../stores/product";
import { Trash2Icon, PlusIcon } from "lucide-vue-next";

const productStore = useProductStore();
const newProduct = ref({ name: "", price: 0, description: "" });
const isAdding = ref(false);

const handleAddProduct = () => {
  if (newProduct.value.name && newProduct.value.price > 0) {
    productStore.addProduct(newProduct.value);
    newProduct.value = { name: "", price: 0, description: "" };
    isAdding.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Products Management</h1>
        <button
          @click="isAdding = !isAdding"
          class="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon class="h-4 w-4 mr-2" />
          Add Product
        </button>
      </div>

      <!-- Add Product Form -->
      <div v-if="isAdding" class="bg-white shadow sm:rounded-lg mb-8 p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4">
          New Product
        </h3>
        <form @submit.prevent="handleAddProduct" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Name</label>
            <input
              v-model="newProduct.name"
              type="text"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Price</label>
            <input
              v-model="newProduct.price"
              type="number"
              step="0.01"
              required
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Description</label
            >
            <textarea
              v-model="newProduct.description"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border p-2"
            ></textarea>
          </div>
          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="isAdding = false"
              class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="product in productStore.products"
          :key="product.id"
          class="bg-white overflow-hidden shadow rounded-lg flex flex-col"
        >
          <div class="px-4 py-5 sm:p-6 flex-grow">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ product.name }}
            </h3>
            <div class="mt-2 text-sm text-gray-500">
              <p>{{ product.description }}</p>
            </div>
            <div class="mt-4 text-2xl font-bold text-gray-900">
              ${{ product.price }}
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-4 sm:px-6 flex justify-end">
            <button
              @click="productStore.removeProduct(product.id)"
              class="text-red-600 hover:text-red-900 flex items-center text-sm font-medium"
            >
              <Trash2Icon class="h-4 w-4 mr-1" />
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <RouterLink
          to="/"
          class="text-indigo-600 hover:text-indigo-800 font-medium"
          >Back to Home</RouterLink
        >
      </div>
    </div>
  </div>
</template>
