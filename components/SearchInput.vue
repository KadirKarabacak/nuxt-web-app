<template>
  <div :class="{'mx-0 ml-auto mr-4': is500px}" class="w-3/4 h-auto mt-2 mb-4 mx-auto flex justify-center pl-4">
    <!-- Bu inputun altındaki .imput__border classına border-color ||  -->
    <n-input
      v-model:value="searchQuery"
      type="success"
      class="p-2 rounded-md text-lg border-none bg-stone-700"
      placeholder="Search for a product"
      @input="updateSearch"
    >
      <template #suffix>
        <client-only>
          <font-awesome-icon class="text-stone-400" icon="search" />
        </client-only>
      </template>
    </n-input>
    
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { NInput } from 'naive-ui';
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
const is500px = computed(() => width.value <= 500)


const emit = defineEmits()
const searchQuery = ref('')

const updateSearch = () => {
  emit('update:search', searchQuery.value)
}
</script>

<style scoped>

::v-deep(.n-input__border) {
  border-color:#44403c;
}
</style>