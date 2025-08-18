<template>
  <div class="grid gap-7 md:grid-cols-2">
    <div
      v-for="(item, i) in props.items"
      :key="i"
      class="cursor-pointer overflow-hidden group"
    >
      <a :href="item.url" target="_blank" rel="noopener noreferrer">
        <div class="overflow-hidden bg-gray-100 dark:bg-black duration-500 ">
          <img
            :src="item.image"
            alt=""
            class="w-full aspect-[16/9] object-contain transform transition-transform group-hover:scale-110 duration-500"
          />
        </div>

        <div class="mt-3 py-4 ">
          <div class="text-xs uppercase flex justify-start gap-2 duration-500">
            <span class="font-inter text-[#714AFF] font-bold duration-500">{{ item.category }}</span>
            <span class="font-inter dark:text-white duration-500">|</span>
            <span class="font-inter font-bold dark:text-white duration-500">{{ item.date }}</span>
          </div>

          <h3 class="font-inter mt-3 font-semibold text-xl leading-snug dark:text-white duration-500">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.title }}
            </a>
          </h3>

          <p class="font-inter text-sm text-gray-600 mt-1 dark:text-gray-300 duration-500">
            {{ item.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
