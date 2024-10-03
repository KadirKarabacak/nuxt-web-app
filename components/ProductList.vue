<template>
    <div class="p-4 h-[100dvh] overflow-y-scroll">
      <ul class="grid grid-cols-3 gap-4 mb-10">
        <li v-for="product in filteredProducts" :key="product.id">
          <div class="border border-stone-700 rounded-lg shadow-lg p-4 flex flex-col text-white">
            <img :src="product.image" alt="Ürün Resmi" class="w-full h-48 object-cover mb-2 rounded-sm" :class="{'filter grayscale': product.outOfOrder}" />
            <h2 class="text-lg font-semibold mb-1">{{ product.name }}</h2>
            <p class="text-gray-400 mb-2">${{ product.price.toFixed(2) }}</p>
            <n-button @click="addToCart(product)" type="primary"  :disabled="product.outOfOrder">{{ product.outOfOrder ? "Out of Order" : "Add to cart" }}</n-button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
<script setup>
  import { useCartStore } from '@/stores/cart'
  import { NButton } from "naive-ui"
  import { computed } from 'vue'
  import { products } from '@/data/products'
  import { useNotification } from 'naive-ui'
  // const productsList = products
  const cartStore = useCartStore()
  const notification = useNotification()

  const props = defineProps({
    searchQuery: {
      type: String,
      default: '',
    }
  })

  const filteredProducts = computed(() => {
    return products.filter(product =>
      product.name.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
  })
  
  // Sepete ekleme fonksiyonu
  const addToCart = (product) => {
    if(product.outOfOrder) return notification.error({
      title: "Error",
      description: "This product is out of order",
      duration: 3000,
      keepAliveOnHover: true
    })
    cartStore.addToCart(product)
    notification.success({
    title: "Success",
    description: "Your product has been added to the cart successfully",
    duration: 3000,
    keepAliveOnHover: true
  })
  }
  </script>
  
  <style scoped>
  /* Ürün kartı stilleri */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Responsive grid ayarı */
  }
  
  .n-list-item {
    margin-bottom: 1.5rem; /* Her ürün kartı arasında boşluk */
  }

  
  </style>
  