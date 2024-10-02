<template>
  <n-notification-provider placement="bottom-left">
    <div class="min-h-[100dvh] bg-stone-900 flex">
      <Sidebar />
      <div class="flex-1 p-4">
        <NuxtPage />
      </div>
      <Cart />
    </div>
  </n-notification-provider>
</template>

<script setup>
import { NNotificationProvider } from 'naive-ui';
import Sidebar from '@/components/Sidebar.vue';
import Cart from '@/components/Cart.vue';
</script>
