<template>
    <div class="border border-stone-600 rounded-lg p-4 mb-4 bg-stone-800 w-3/4" :class="{
          'w-full': isMobile,
        }">
      <h3 class="text-lg font-semibold text-gray-100 mb-8 flex gap-4 justify-between">Order Date <span class="font-normal text-stone-400"> {{ order.creationDate }} </span></h3>
      <ul class="mb-8">
        <li v-for="item in order.products" :key="item.id" class="flex justify-between items-center w-2/4 border-b pt-2 border-stone-600">
          <span class="text-gray-300 text font-bold bg-green-800 p-2 rounded-lg mb-2">{{ item.name }}</span>
          <span class="text-sm text-gray-400">{{ item.quantity }} x ${{ item.price }}</span>  
        </li>
        <li class="mt-2 text-gray-400 w-2/4">
          <span>Shipping cost {{ order.shippingCost !== 0 ? `$${order.shippingCost}` : "Free" }}</span>
        </li>
      </ul>
      <p class="mt-2 text-sm text-gray-100 flex justify-between font-bold w-full items-center">
        <span>
          Total 
        </span>
        <n-divider class="!h-5 !w-[2px] !bg-stone-500" vertical />
        <span class="mr-auto"> 
          ${{ (calculateOrderTotal(order) + order.shippingCost).toFixed(2) }}
        </span>
        <span class="text-stone-400">
           Delivering in {{ order.deliveryTime }} minutes 
        </span>
      </p>
    </div>
</template>
  
<script setup>
  import { defineProps } from 'vue'
  import { NDivider } from 'naive-ui';
  import { useWindowSize } from '@vueuse/core'
  const { width } = useWindowSize()
  const isMobile = computed(() => width.value <= 800)
  
  const props = defineProps({
    order: {
      type: Object,
      required: true
    }
  })

  const calculateOrderTotal = (order) => {
    return order.products.reduce((total, item) => total + item.price * item.quantity, 0)
  }
</script>
 