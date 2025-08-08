<template>
  <div class="max-w-sm ml-auto"> 
    <div>
      <img
        v-if="imageSrc"
        :src="imageSrc"
        alt="image"
        class="w-full h-64 object-cover rounded-3xl"
      />

      <div class="p-2">
        <p class="text-sm text-end text-gray-500 dark:text-gray-400">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  description: { type: String, default: '- Deskripsi' },
  imageSrc: { type: String, default: '' },
})
</script>
