<template>
  <button
    @click="navigateTo(link)"
    :class="[
      'relative p-4 transition-all rounded after:absolute after:left-0 after:bottom-0 after:h-[6px] after:rounded-lg after:transition-all duration-500',
      route.path === link
        ? 'after:w-full after:bg-[#714AFF]'
        : 'after:w-0 after:bg-[#714AFF] hover:after:w-full'
    ]"
  >
    {{ buttonName }}
  </button>
</template>

<script setup>
import { useRoute, navigateTo } from '#imports'

const props = defineProps({
  buttonName: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  }
})

const route = useRoute()
</script>
