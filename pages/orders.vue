<template>
  <div class="p-4 h-[100dvh] overflow-auto">
    <h1 class="text-3xl font-bold mb-6">
      <n-gradient-text type="success" :class="{
          'text-center w-full': isMobile,
        }">
        Your Order Details
      </n-gradient-text>
    </h1>
    <div v-if="orders?.length > 0">
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
import { NGradientText } from 'naive-ui'
import { computed, onMounted } from 'vue'
import OrderCard from '@/components/OrderCard.vue'
import { useHead } from '#imports'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const isMobile = computed(() => width.value <= 800)

useHead({
  title: 'Orders | Nuxt', // Sayfa başlığı
  meta: [
    { name: 'description', content: 'Display your previous orders' },
    { name: 'keywords', content: 'products, search, ecommerce, orders, food' }
  ]
})

const cartStore = useCartStore()

// Sayfa yüklendiğinde localStorage'dan siparişleri yükle
onMounted(() => {
   cartStore.loadOrders()
})

const orders = computed(() => cartStore.getOrders)
</script>

