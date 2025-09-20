<template>
  <div class="max-w-sm mx-auto lg:ml-auto lg:mx-0 relative">
    <img
      v-if="imageSrc"
      v-show="loaded"
      :src="imageSrc"
      alt="image"
      class="w-full h-64 object-cover rounded-3xl"
      @load="loaded = true"
    />

    <div
      v-if="imageSrc && !loaded"
      class="absolute inset-0 flex items-center justify-center rounded-3xl bg-gray-100 dark:bg-gray-800"
    >
      <LoadingWaveSpinner />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  imageSrc: { type: String, default: '' }
})

const loaded = ref(false)
</script>
