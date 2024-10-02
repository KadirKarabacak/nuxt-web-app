<template>
  <div class="w-3/4 h-auto mt-2 mb-4 flex justify-center pl-4">
    <n-input
      v-model:value="searchQuery"
      class="search-input !bg-transparent  p-2 rounded-md text-lg border-none"
      placeholder="Search for a product"
      @input="updateSearch"
    >
      <template #suffix>
        <client-only>
          <font-awesome-icon class="text-green-600" icon="search" />
        </client-only>
      </template>
    </n-input>
    
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { NInput } from 'naive-ui';

const emit = defineEmits()
const searchQuery = ref('')

const updateSearch = () => {
  emit('update:search', searchQuery.value)
}
</script>

<style scoped>
.search-input {
  color: #f5f5f5 !important; /* Yazı rengini burada belirliyoruz */
  border-color: #3b82f6 !important; /* Border rengini burada belirliyoruz */
}

</style>