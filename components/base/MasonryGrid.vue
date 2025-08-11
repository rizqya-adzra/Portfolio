<template>
  <div class="masonry-grid">
    <div
      v-for="item in items"
      :key="item.id"
      class="masonry-item bg-gray-100 dark:bg-[#2b2b2b] rounded-3xl overflow-hidden duration-500"
    >
      <img
        :src="item.image"
        alt="Image"
        class="w-full h-auto p-3 rounded-3xl object-cover"
      />
      <div class="px-4">
        <div class="flex items-center text-gray-500 text-sm justify-between">
          <span
            class="py-2 min-w-20 text-center rounded-3xl text-xs text-white bg-black dark:text-black dark:bg-white font-inter font-bold"
          >
            {{ item.company }}
          </span>
          <div
            class="flex gap-3 py-2 min-w-20 text-center rounded-3xl text-xs text-black border-2 border-black dark:text-white dark:border-white font-inter font-bold px-3"
          >
            <icon name="heroicons:calendar-days" class="text-base" />
            <span>{{ item.datetime }}</span>
          </div>
        </div>
        <p class="font-inter text-lg font-bold mb-5 mt-2 dark:text-white">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.masonry-grid {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  column-count: 3; 
  column-gap: 16px; 
}

.masonry-item {
  display: inline-block; 
  width: 100%;
  margin-bottom: 16px;
  break-inside: avoid;
}
</style>
