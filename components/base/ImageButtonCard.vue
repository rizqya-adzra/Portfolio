<template>
  <div class="max-w-sm mx-auto lg:ml-auto lg:mx-0">
    <div>
      <img
        v-if="imageSrc"
        :src="imageSrc"
        alt="image"
        class="w-full h-64 object-cover rounded-3xl"
      />
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  imageSrc: { type: String, default: '' },
})
</script>
