<template>
  <div
    ref="containerRef"
    class="font-inter overflow-hidden h-[450px] rounded-3xl flex flex-col"
    style="scroll-behavior: auto;"
  >
    <div
      v-for="(item, index) in [...items, ...items]"
      :key="index"
      class="flex items-center justify-between rounded-2xl my-2 p-2 min-h-[130px] cursor-pointer"
      :class="[
        'bg-gray-200 dark:bg-[#2b2b2b]',
        hoveredIndex === index ? 'bg-blue-200 dark:bg-blue-900 shadow-lg' : ''
      ]"
      @click="openPopup(item)"
      @mouseenter="() => { hoveredIndex = index; stopAutoScroll() }"
      @mouseleave="() => { hoveredIndex = null; startAutoScroll() }"
    >
      <div class="flex items-center">
        <img
          :src="item.image"
          alt=""
          class="w-[170px] h-[114px] rounded-tl-2xl rounded-bl-2xl mr-4 object-cover"
        />
        <div class="max-w-[270px]">
          <div class="font-bold dark:text-white">{{ item.title }}</div>
          <div
            v-if="item.description"
            class="text-xs text-gray-600 dark:text-gray-300"
          >
            {{ item.description }}
          </div>
        </div>
      </div>

      <div class="flex gap-1 mr-4">
        <div
          class="py-10 px-2 text-white rounded-xl text-xs"
          :style="{ backgroundColor: categoryColors[item.category] || '#999' }"
        ></div>

        <div
          class="py-10 px-2 text-white rounded-xl text-xs"
          :style="{ backgroundColor: statusColors[item.status] || '#666' }"
        ></div>
      </div>
    </div>

    <!-- Popup overlay -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closePopup"
    >
      <div
        class="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full relative"
      >
        <button
          @click="closePopup"
          class="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold text-xl"
          aria-label="Close popup"
        >
          &times;
        </button>

        <h2 class="text-xl font-bold mb-4 dark:text-white">{{ popupItem?.title }}</h2>
        <img
          :src="popupItem?.image"
          alt=""
          class="w-full h-48 object-cover rounded-lg mb-4"
        />
        <p class="text-gray-700 dark:text-gray-300 mb-2">{{ popupItem?.description }}</p>
        <p class="font-semibold dark:text-white">
          Category:
          <span :style="{ color: categoryColors[popupItem?.category || ''] || '#999' }">
            {{ popupItem?.category }}
          </span>
        </p>
        <p class="font-semibold dark:text-white">
          Status:
          <span :style="{ color: statusColors[popupItem?.status || ''] || '#666' }">
            {{ popupItem?.status }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface CarouselItem {
  title: string
  description?: string
  image: string
  category: 'internship' | 'school' | 'personal'
  status: 'completed' | 'ongoing'
}

const props = defineProps<{
  items: CarouselItem[]
}>()

const containerRef = ref<HTMLElement | null>(null)
let scrollTimeout: number | null = null
const SCROLL_STEP = 1
const SCROLL_INTERVAL = 30

const categoryColors: Record<string, string> = {
  internship: '#FF4A4D',
  school: '#F34AFF',
  personal: '#4A5CFF'
}

const statusColors: Record<string, string> = {
  completed: '#4AFF50',
  ongoing: '#FFF64A'
}

const hoveredIndex = ref<number | null>(null)

function scrollStep() {
  if (!containerRef.value) return

  containerRef.value.scrollTop += SCROLL_STEP

  if (containerRef.value.scrollTop >= containerRef.value.scrollHeight / 2) {
    containerRef.value.scrollTop -= containerRef.value.scrollHeight / 2
  }

  scrollTimeout = window.setTimeout(scrollStep, SCROLL_INTERVAL)
}

function startAutoScroll() {
  if (!scrollTimeout && props.items.length > 1) {
    scrollStep()
  }
}

function stopAutoScroll() {
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
    scrollTimeout = null
  }
}

const showPopup = ref(false)
const popupItem = ref<CarouselItem | null>(null)

function openPopup(item: CarouselItem) {
  stopAutoScroll()
  popupItem.value = item
  showPopup.value = true
}

function closePopup() {
  showPopup.value = false
  popupItem.value = null
  startAutoScroll()
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>
