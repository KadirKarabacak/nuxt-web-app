<template>
    <div class="p-4 h-[100dvh] overflow-auto">
      <h1 class="text-3xl font-bold mb-6">
        <n-gradient-text type="success">
          Your Order Details
        </n-gradient-text></h1>
      <div v-if="orders.length > 0">
        <div v-for="order in orders" :key="order.orderId" class="flex">
          <OrderCard :order="order" />
        </div>
      </div>
      <div v-else class="w-full h-[80%] flex justify-center items-center">
        <p class="text-white text-2xl">No order found. <router-link to="/" class="underline text-green-400">Go home</router-link> to make orders.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '@/stores/cart'
  import { NGradientText } from 'naive-ui';
  import { computed } from 'vue'
  import OrderCard from '@/components/OrderCard.vue' // OrderCard bileşenini içe aktar
  
  const cartStore = useCartStore()
  const orders = computed(() => cartStore.getOrders)
  </script>
  
  <style scoped>
  /* Styles for the order page */
  </style>
  