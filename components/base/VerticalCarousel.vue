<template>
  <div
    ref="containerRef"
    class="font-inter overflow-hidden h-[450px] rounded-3xl flex flex-col"
    style="scroll-behavior: auto;"
  >
    <div
      v-for="(item, index) in [...items, ...items]"
      :key="index"
      class="flex items-center justify-between rounded-2xl my-2 p-2 min-h-[130px] cursor-pointer duration-500"
      :class="[
        'bg-[#f7f7f7] dark:bg-[#2b2b2b]',
        hoveredIndex === index ? 'bg-gray-200 dark:bg-indigo-900' : ''
      ]"
      @click="openPopup(item)"
      @mouseenter="() => { hoveredIndex = index; stopAutoScroll() }"
      @mouseleave="() => { hoveredIndex = null; startAutoScroll() }"
    >
      <div class="flex items-center">
        <img
          :src="item.image"
          alt=""
          class="w-full h-[114px] rounded-2xl aspect-[16/9] mr-4 object-cover"
        />
        <div class="max-w-[270px]">
          <div class="font-bold dark:text-white text-lg">{{ item.title }}</div>
          <div
            v-if="item.description"
            class="text-xs text-gray-600 dark:text-gray-300 line-clamp-2"
          >
            {{ $t(item.description || 'default_description') }}
          </div>
          <div class="flex gap-1 mt-2">
            <div
              class="py-1 min-w-20 text-center rounded-xl text-xs text-white font-inter font-bold"
              :style="{ backgroundColor: categoryColors[item.category] || '#999'}"
            >
              {{ item.category }}
            </div>

            <div
              class="py-1 min-w-20 text-center rounded-xl text-xs text-white font-inter font-bold"
              :style="{ backgroundColor: statusColors[item.status] || '#666'}"
            >
              {{ item.status }}
            </div>    
          </div>
        </div>
      </div>

    </div>
  </div>

      <BasePopUpCardDetailed
        :visible="IsPopupVisible"
        :title="popupItem?.title || ''"
        :subheader="popupItem?.subheader || ''"
        :description="$t(popupItem?.description || 'default_description')"
        :image="popupItem?.image || ''"
        :github="popupItem?.github || ''"
        :link="popupItem?.link || ''"
        :datetime="popupItem?.datetime || ''"
        :category="popupItem?.category"
        :status="popupItem?.status"
        :category-colors="categoryColors"
        :status-colors="statusColors"
        @close="IsPopupVisible = false"
      />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  items: Array
})

const containerRef = ref(null)
let scrollTimeout = null
const SCROLL_STEP = 1
const SCROLL_INTERVAL = 30

const categoryColors = {
  internship: '#E63946',
  school: '#6A4C93',
  personal: '#1D3557'
}

const statusColors = {
  completed: '#2A9D8F',
  ongoing: '#F4A261'
}

const hoveredIndex = ref(null)

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

const IsPopupVisible = ref(false)
const popupItem = ref(null)

function openPopup(item) {
  stopAutoScroll()
  popupItem.value = item
  IsPopupVisible.value = true
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>

