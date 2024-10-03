<template>
    <div class="p-4 h-[100dvh] overflow-auto">
      <h1 class="text-3xl font-bold mb-6 text-center">
        <n-gradient-text type="success">
          All Products & Categories
        </n-gradient-text>
      </h1>
  
      <!-- Kategori Bölümü -->
      <div v-for="category in categories" :key="category" class="mb-10">
        <h2 class="text-3xl font-bold mb-4"> <n-gradient-text type="success"> {{ category }} </n-gradient-text></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="product in filteredProductsByCategory(category)"
            :key="product.id"
            class="bg-stone-800 p-4 rounded-lg text-stone-100"
          >
            <img :src="product.image" alt="Product image" class="w-full h-48 object-cover mb-2 rounded-sm" />
            <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">{{ product.name }}</h3>
                <p class="text-gray-400">{{ product.price }}₺</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { NGradientText } from 'naive-ui';
  import { products } from '@/data/products';
  import { useHead } from "#imports"
  useHead({
    title: 'Products | Nuxt', // Sayfa başlığı
    meta: [
      { name: 'description', content: 'Display all products & categories' },
      { name: 'keywords', content: 'products, ecommerce, orders, food, food categories' }
    ]
  })
  
  const categories = ref(['Fast Food', 'Meats', 'Pasta', 'Salads', 'Sweet Food']);
  
  const filteredProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };
  </script>
  
  <style scoped>
  /* Stil ayarları */
  </style>
  