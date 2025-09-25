<template>
  <div
    ref="containerRef"
    class="font-inter overflow-auto md:overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl flex flex-col"
    style="scroll-behavior: auto;"
  >
    <div
      v-for="(item, index) in [...items, ...items]"
      :key="index"
      class="flex items-center justify-between rounded-2xl my-2 p-2 sm:p-3 md:p-4 min-h-[110px] sm:min-h-[120px] md:min-h-[130px] cursor-pointer duration-500"
      :class="[
        'bg-[#f7f7f7] dark:bg-dark_secondary',
        hoveredIndex === index ? 'bg-secondary dark:bg-dark_tertiary' : ''
      ]"
      @click="openPopup(item)"
      @mouseenter="() => { hoveredIndex = index }"
      @mouseleave="() => { hoveredIndex = null }"
    >
      <div class="flex items-center relative">
        <div
          v-if="!item.image"
          class="absolute left-0 w-[120px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[100px] md:h-[114px] flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-dark_tertiary"
        >
          <span class="text-xs text-gray-400">No Image</span>
        </div>

        <img
          v-if="item.image"
          :src="item.image"
          alt=""
          class="w-[120px] sm:w-[180px] md:w-[200px] h-[80px] sm:h-[100px] md:h-[114px] rounded-2xl aspect-[16/9] mr-3 sm:mr-4 object-cover"
        />

        <div class="max-w-[180px] sm:max-w-[220px] md:max-w-[270px]">
          <div class="font-bold dark:text-white text-base sm:text-lg md:text-xl">
            {{ item.title }}
          </div>
          <div
            v-if="item.description"
            class="text-[10px] md:text-xs text-gray-600 dark:text-gray-300 line-clamp-2"
          >
            {{ $t(item.description || 'default_description') }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
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
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
  personal: '#0046FF'
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

const IsPopupVisible = ref(false)
const popupItem = ref(null)

function openPopup(item) {
  popupItem.value = item
  IsPopupVisible.value = true
}

onMounted(() => {
  startAutoScroll()
})
</script>
