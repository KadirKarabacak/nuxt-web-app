<template>
  <div
    v-if="isCartVisible"
    class="fixed inset-0 bg-black opacity-60 z-40"
    @click="toggleCart" 
  ></div>
  <div>
    <!-- Sepete git butonu -->
    <n-button
      type="primary"
      v-if="cartStore.cart.length > 0"
      @click="toggleCart"
      class="fixed bottom-2 right-6 py-6 px-8 rounded-lg cursor-pointer shadow-lg transition-opacity text-lg"
    >
      <span class="flex gap-2 items-center justify-center text-stone-200 z-80 relative font-bold">
        Go to cart ({{ cartStore.cartItemCount }})
        <client-only>
           <font-awesome-icon icon="cart-shopping" class="text-stone-200" />
        </client-only>
      </span>
    </n-button>

    <!-- Sepet içeriği -->
    <div
      :class="['fixed right-0 top-0 overflow-y-scroll w-4/12 h-full bg-stone-800 shadow-lg transition-transform z-50', { 'transform translate-x-full': !isCartVisible, 'transform translate-x-0': isCartVisible }, {'!w-6/12': is750px}, {'w-5/12': is900px}, {'!w-[65%]': is650px}]"
    >
      <div class="p-4 relative">
        <!-- <n-button
          type="error"
          @click="toggleCart"
          class="absolute top-1 right-1 cursor-pointer shadow-lg transition-opacity"
        > -->
        <client-only>
          <font-awesome-icon @click="toggleCart" icon="times" class="absolute top-2 right-2 cursor-pointer shadow-lg transition-opacity text-white text-xl" />
        </client-only>
        <!-- </n-button> -->
        <h2 class="text-2xl font-bold mb-4 text-white">Your Cart</h2>
        <ul class="flex flex-col gap-4 text-white">
          <li v-if="cartStore.cart.length === 0">
            There are no products in your cart. Start by adding a new product 😉
          </li>
          <li v-for="item in cartStore.cart" :key="item.id">
            <div :class="{'flex-col': is450px}"class="flex bg-stone-700 rounded-lg p-4 relative">
              <img :src="item.image" alt="Product Image" :class="{'w-auto !mr-0 h-[10rem]': is450px}" class="w-[8rem] h-[8rem] object-cover mr-4 rounded-md" />
              <div class="flex flex-col flex-grow justify-around">
                <div class="text-white font-semibold text-lg">{{ item.name }}</div>
                <div class="text-gray-400">Price: ${{ item.price }}</div>
                <div class="flex items-center mt-2">
                  <n-button class="rounded-full" type="error" @click="decreaseQuantity(item)"><font-awesome-icon icon="minus" /></n-button>
                  <span class="mx-2 px-3 py-1 border rounded-full text-white">{{ item.quantity }}</span>
                  <n-button class="rounded-full" type="primary" @click="increaseQuantity(item)"><font-awesome-icon icon="plus" /></n-button>
                </div>
              </div>
              <n-tooltip placement="left" trigger="hover">
                <template #trigger>
              <n-button :class="{'bottom-4 rounded-full right-2': is450px, 'top-0 rounded-tl-none rounded-br-none': !is450px}" class="absolute right-0" @click="removeFromCart(item.id)" type="error"><font-awesome-icon icon="trash" /></n-button>
            </template>
            <span> Remove product from cart </span>
          </n-tooltip>
            </div>
          </li>
        </ul>

         <!-- Shipping Cost sadece ürün varsa gösterilecek -->
         <div v-if="cartStore.cart.length > 0" class="mt-4">
          <span class="text-white">Shipping Cost: 
            <strong>
              {{ cartStore.cartTotal >= 200 ? 'Free' : '$' + cartStore.shippingCostApplicable }}
            </strong>
          </span>
        </div>

        <div v-if="cartStore.cart.length > 0" class="mt-4">
          <strong class="text-white">TOTAL: ${{ cartStore.cartTotal.toFixed(2) }}</strong>
        </div>
        <div class="flex flex-col gap-4 justify-center items-center">
          <n-button @click="checkout" type="primary" class="mt-4 py-6 w-[90%] text-lg" :disabled="cartStore.cart.length === 0" :loading="isLoading">
            {{ isLoading ? "Checking out..." : "Checkout" }}
          </n-button>
          <n-button
            @click="clearCart"
            type="error"
            class="mb-4 py-6 w-[90%] text-lg"
            :disabled="cartStore.cart.length === 0"
         >
            Clear Cart
          </n-button>
        </div>
    </div>
    </div>
  </div>
</template>

<script setup>
  import { useCartStore } from '@/stores/cart'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  import { NButton, NTooltip, useNotification } from "naive-ui"
  import { useWindowSize } from '@vueuse/core'
  const cartStore = useCartStore()
  const isCartVisible = ref(false)
  const isLoading = ref(false)
  const notification = useNotification()
  const router = useRouter()
  const { width } = useWindowSize()
  const is450px = computed(() => width.value <= 450)
  const is650px = computed(() => width.value <= 650)
  const is750px = computed(() => width.value <= 750)
  const is900px = computed(() => width.value <= 900)

  const increaseQuantity = (item) => {
    cartStore.addToCart(item)
  }

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--
    } else {
      cartStore.removeFromCart(item.id)
    }
  }

  const removeFromCart = (id) => {
    cartStore.removeFromCart(id)
  }

  // Clear Cart işlemi
  const clearCart = () => {
    cartStore.clearCart()
    notification.success({
      title: 'Cart cleared successfully',
      duration: 3000,
    })
    isCartVisible.value = false;
  }

  const checkout = () => {
    isLoading.value = true
    const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
    const creationDate = new Date().toLocaleString();
    const deliveryTime = cartStore.deliveryTime;
    const shippingCost = cartStore.cartTotal >= 200 ? 0 : cartStore.shippingCost

    // Create order details
    const order = {
      orderId,
      creationDate,
      deliveryTime,
      shippingCost,
      products: cartStore.cart.map(item => ({ id: item.id, name: item.name, price: item.price, quantity: item.quantity })),
    };

    // Save order to Pinia
    cartStore.addOrder(order);

    // Ödeme işlemi başarılıysa notification gösterilecek
    notification.success({
      title: 'The order has been created successfully.',
      description: "We will deliver your order to you as soon as possible. 😊",
      duration: 3000,
      keepAliveOnHover: true
    })
    // Sepeti boşaltacak
    cartStore.clearCart()

    // Navigate orders
    setTimeout(() => {
      isLoading.value = false; // Yükleme durumunu false yap
      router.push("/orders")
      isCartVisible.value = false
    }, 3000);
  }

  const toggleCart = () => {
    isCartVisible.value = !isCartVisible.value
  }
</script>

<style scoped>
/* Animation for the sidebar */
.transition-transform {
  transition: transform 0.4s cubic-bezier(.28,.56,.43,.92);
}
</style>
