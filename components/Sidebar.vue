<template>
  <!-- Overlay -->
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 bg-black opacity-60 z-40"
    @click="toggleMenu" 
  ></div>

  <!-- Responsive hamburger -->
  <n-button
    v-if="!isMenuOpen && isMobile"
    @click="toggleMenu"
    type="primary"
    class="fixed top-6 left-8 p-4 rounded-full cursor-pointer shadow-lg transition-opacity z-30 h-auto"
  >
    <font-awesome-icon :icon="['fas', 'bars']" class="text-white text-xl" />
  </n-button>

  <!-- Hamburger menu -->
  <div
    v-if="isMobile"
    :class="['fixed left-0 top-0 overflow-y-scroll w-4/12 h-full bg-stone-800 shadow-lg transition-transform z-50', { 'transform -translate-x-full': !isMenuOpen, 'transform translate-x-0': isMenuOpen }, { 'w-6/12': isSmallestScreen}]"
  >
    <client-only>
      <font-awesome-icon @click="toggleMenu" icon="times" class="absolute top-4 right-4 cursor-pointer shadow-lg transition-opacity text-stone-400 text-xl" />
    </client-only>
    <div class="mb-4 mt-8 flex justify-center">
      <img class="w-3/4 h-3/4" src="../public/logo.jpg" alt="Logo" />
    </div>
    <ul class="flex flex-col gap-2 items-center">
      <li
        :class="{
          'bg-stone-600': isActive('/'),
          '!border-green-400 border-b-4': isActive('/'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent w-[90%]': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" :icon="['fas', 'home']" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToHome"
          >
            Home
          </n-button>
        </span>
      </li>
      <li
        :class="{
          'bg-stone-600': isActive('/products'),
          '!border-green-400 border-b-4': isActive('/products'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent w-[90%]': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" icon="archive" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToProducts"
          >
            Products
          </n-button>
        </span>
      </li>
      <li
        :class="{
          'bg-stone-600': isActive('/orders'),
          '!border-green-400 border-b-4': isActive('/orders'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent w-[90%]': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" icon="cart-shopping" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToOrders"
          >
            Orders
          </n-button>
        </span>
      </li>
    </ul>
  </div>

  <!-- Normal Menu for larger screens -->
  <div v-if="!isMobile" :class="{'w-3/12' : isMedium}" class="w-2/12 bg-stone-800 text-white py-4 px-2">
    <div class="aspect-square mb-12">
      <img class="block w-full h-full" src="../public/logo.jpg" alt="Logo" />
    </div>
    <ul class="flex flex-col gap-2">
      <li
        :class="{
          'bg-stone-600': isActive('/'),
          '!border-green-400 border-b-4': isActive('/'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" :icon="['fas', 'home']" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToHome"
          >
            Home
          </n-button>
        </span>
      </li>
      <li
        :class="{
          'bg-stone-600': isActive('/products'),
          '!border-green-400 border-b-4': isActive('/products'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" icon="archive" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToProducts"
          >
            Products
          </n-button>
        </span>
      </li>
      <li
        :class="{
          'bg-stone-600': isActive('/orders'),
          '!border-green-400 border-b-4': isActive('/orders'),
          'py-4 rounded-md flex justify-center items-center border-b-4 border-transparent': true
        }"
      >
        <span class="flex items-center w-3/4">
          <font-awesome-icon class="text-green-400" icon="cart-shopping" />
          <n-button
            type="text"
            class="text-green-400 font-bold"
            @click="goToOrders"
          >
            Orders
          </n-button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NButton } from 'naive-ui'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMedium = computed(() => width.value <= 1000)
const isMobile = computed(() => width.value <= 800)
const isSmallestScreen = computed(() => width.value <= 500)

const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const goToHome = () => {
  router.push('/')
  isMenuOpen.value = false
}

const goToProducts = () => {
  router.push('/products')
  isMenuOpen.value = false
}

const goToOrders = () => {
  router.push('/orders')
  isMenuOpen.value = false
}

const isActive = (route) => {
  return router.currentRoute.value.path === route
}
</script>

<style scoped>
/* Animation for the sidebar */
.transition-transform {
  transition: transform 0.4s cubic-bezier(.28,.56,.43,.92);
}
</style>
