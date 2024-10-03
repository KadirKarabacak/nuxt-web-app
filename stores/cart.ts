import { defineStore } from 'pinia'

interface CartTypes {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderTypes {
  orderId: number;
  creationDate: string;
  deliveryTime: number;
  products: CartTypes[];
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartTypes[],
    orders: [] as OrderTypes[], // Başlangıçta boş array
    shippingCost: 10,
    deliveryTime: 30,
  }),
  actions: {
    // Add product to cart
    addToCart(product: any) {
      const existingProduct = this.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },

    // Remove product from cart
    removeFromCart(productId: any) {
      this.cart = this.cart.filter(item => item.id !== productId)
    },

    // Clear cart
    clearCart() {
      this.cart = []
    },

    // Place an order and save to localStorage
    addOrder(order: OrderTypes) {
      this.orders.push(order)
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('orders', JSON.stringify(this.orders))
      }
    },

    // Load orders from localStorage
    loadOrders() {
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedOrders = localStorage.getItem('orders')
        if (storedOrders) {
          this.orders = JSON.parse(storedOrders)
        }
      }
    }
  },
  getters: {
    cartTotal: (state) => {
      const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      return subtotal < 200 ? subtotal + state.shippingCost : subtotal
    },
    cartItemCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0),
    shippingCostApplicable: (state) => {
      const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      return subtotal < 200 ? state.shippingCost : 0
    },
    getOrders: (state) => state.orders,
  }
})

