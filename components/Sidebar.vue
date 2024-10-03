<template>
    <div class="w-2/12 bg-stone-800 text-white py-4 px-2">
      <div class="aspect-square mb-12">
        <img
          class="block w-full h-full"
          src="../public/logo.jpg"
          alt="Logo"
        />
      </div>
      <ul class="flex flex-col gap-2">
        <li :class="{'bg-stone-600': isActive('/'), '!border-green-400 border-b-4': isActive('/'), 'py-4 rounded-md flex justify-center border-b-4 border-transparent': true}">
          <span class="flex items-center">
            <client-only>
              <font-awesome-icon class=text-green-400 :icon="['fas', 'home']" /> <n-button f type="text" class="text-green-400 font-bold" @click="goToHome">Home</n-button>
            </client-only>
          </span>
        </li>
        <li :class="{'bg-stone-600': isActive('/products'), '!border-green-400 border-b-4': isActive('/products'), 'py-4 rounded-md flex justify-center border-b-4 border-transparent': true}">
          <span class="flex items-center">
            <client-only>
              <font-awesome-icon class="text-green-400" icon="archive" /> <n-button type="text" class="text-green-400 font-bold" @click="goToProducts">Products</n-button>
            </client-only>
          </span>
        </li>
        <li :class="{'bg-stone-600': isActive('/orders'), '!border-green-400 border-b-4': isActive('/orders'),'py-4 rounded-md flex justify-center border-b-4 border-transparent': true}">
          <span class="flex items-center">
            <client-only>
              <font-awesome-icon class="text-green-400" icon="cart-shopping" /> <n-button type="text" class="text-green-400 font-bold" @click="goToOrders">Orders</n-button>
            </client-only>
          </span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { NButton } from "naive-ui"
  
  const router = useRouter()
  
  const goToHome = () => {
    router.push('/')
  }
  
  const goToProducts = () => {
    router.push('/products')
  }
  
  const goToOrders = () => {
    router.push('/orders')
  }
  
  const isActive = (route) => {
    return router.currentRoute.value.path === route
  }
  </script>
  
  <style scoped>
  </style>
  