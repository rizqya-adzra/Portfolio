<template>
  <div
    class="masonry-grid max-w-full mx-auto
           columns-1 gap-2
           sm:columns-2 sm:gap-3
           lg:columns-3 lg:gap-4"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="masonry-item bg-secondary hover:bg-tertiary dark:hover:bg-dark_tertiary dark:bg-dark_secondary rounded-3xl cursor-pointer overflow-hidden duration-500 mb-3 break-inside-avoid"
      @click="emit('clickItem', item)"
    >
      <img
        :src="item.image"
        alt="Image"
        class="w-full h-auto p-2 rounded-3xl object-cover"
      />
      <div class="px-3">
        <div class="flex items-center text-gray-500 text-sm justify-between">
          <span
            class="p-1 min-w-20 text-center rounded-3xl text-xs text-white bg-black dark:text-black dark:bg-white font-inter font-bold"
          >
            {{ item.company }}
          </span>
          <div
            class="flex gap-2 py-1 min-w-20 text-center rounded-3xl text-xs text-black border-2 border-black dark:text-white dark:border-white font-inter font-bold px-2"
          >
            <icon name="heroicons:calendar-days" class="text-base" />
            <span>{{ item.datetime }}</span>
          </div>
        </div>
        <p class="font-inter text-base font-bold mb-4 mt-1 dark:text-white">{{ item.title }}</p>
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

const emit = defineEmits(['clickItem'])
</script>

<style scoped>
.masonry-item {
  break-inside: avoid; 
}
</style>
