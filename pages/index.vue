<template>
  <div class="relative">
    <SearchInput @update:search="updateSearch" />
    <ProductList :searchQuery="searchQuery" />
    <span class="absolute right-8 top-2 text-green-500 text-xl">
      {{ productsLength }} products found
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'
import SearchInput from '@/components/SearchInput.vue'
import ProductList from '@/components/ProductList.vue'
import { products } from '~/data/products'
const productsLength = products.length

const searchQuery = ref('')

const updateSearch = (query) => {
  searchQuery.value = query // Arama terimini güncelle
}

// Sayfaya metadata eklemek
useHead({
  title: 'Home | Nuxt', // Sayfa başlığı
  meta: [
    { name: 'description', content: 'Search for products and view results instantly' },
    { name: 'keywords', content: 'products, search, ecommerce' }
  ]
})
</script>

<style scoped>
/* Sayfa stilleri */
</style>
