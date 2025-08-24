<script setup>
import { ref } from 'vue'

const props = defineProps({
  sortOptions: {
    type: Array,
    default: () => [
      { label: 'Name', value: 'name' },
      { label: 'Date', value: 'datetime' },
      { label: 'Company Name', value: 'company' }
    ]
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)

const changeSort = (value) => {
  emit('update:modelValue', value)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 hover:bg-tertiary dark:hover:bg-dark_tertiary bg-secondary dark:bg-dark_secondary text-black dark:text-white rounded-full hover:opacity-90 focus:outline-none transition duration-500"
    >
      <Icon name="mdi:sort" class="text-xl" />
      <span class="text-sm font-bold">
        {{ sortOptions.find(opt => opt.value === modelValue)?.label || 'Sort By' }}
      </span>
      <Icon name="ph:caret-down-bold" class="text-xs" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-40 bg-gray-200 text-black dark:bg-dark_secondary dark:text-white rounded-md shadow-lg z-50"
    >
      <ul class="py-1 text-sm">
        <li
          v-for="opt in sortOptions"
          :key="opt.value"
          @click="changeSort(opt.value)"
          class="px-2 py-2 mx-3 my-1 rounded cursor-pointer font-bold hover:bg-gray-500 hover:text-white dark:hover:bg-[#444]"
          :class="modelValue === opt.value ? 'bg-gray-500 dark:bg-[#444] text-white' : ''"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
