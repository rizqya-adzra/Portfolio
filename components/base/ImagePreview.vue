<template>
  <div>
    <div class="relative w-full">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="relative w-full cursor-pointer"
        @click="openModal(index)"
      >
        <img
          :src="img"
          :alt="alt"
          class="w-full h-full object-cover rounded-xl mb-3 cursor-pointer"
        />
      </div>
    </div>

    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-[9998]"
    ></div>

    <transition name="fade-scale">
      <div
        v-if="open"
        class="fixed inset-0 flex items-center justify-center z-[9999] px-4 sm:px-6"
      >
        <div class="relative max-w-6xl w-full flex justify-center">

          <div class="absolute top-4 right-4 flex gap-3 z-50">
            <a
              :href="images[currentIndex]"
              download
              class="bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition"
            >
              <Icon name="ph:download-bold" class="text-xl sm:text-2xl" />
            </a>

            <button
              @click="open = false"
              class="bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition"
            >
              <Icon name="ph:x-bold" class="text-xl sm:text-2xl" />
            </button>
          </div>

          <div class="relative flex items-center justify-center max-h-[85vh] w-full">
            <img
              v-show="fullLoaded"
              :src="images[currentIndex]"
              :alt="alt"
              class="rounded-xl max-h-[85vh] max-w-full object-contain mx-auto"
              @load="fullLoaded = true"
            />
            <div
              v-if="!fullLoaded"
              class="flex items-center justify-center h-[85vh] w-full"
            >
              <LoadingWaveSpinner />
            </div>

            <button
              v-if="images.length > 1 && currentIndex > 0"
              @click="prevImage"
              class="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition"
            >
              <Icon name="ph:caret-left-bold" class="text-xl sm:text-2xl" />
            </button>

            <button
              v-if="images.length > 1 && currentIndex < images.length - 1"
              @click="nextImage"
              class="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition"
            >
              <Icon name="ph:caret-right-bold" class="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  alt: { type: String, default: 'Image preview' }
})

const open = ref(false)
const fullLoaded = ref(false)
const currentIndex = ref(0)

const openModal = (index) => {
  currentIndex.value = index
  open.value = true
  fullLoaded.value = false
}

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
    fullLoaded.value = false
  }
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    fullLoaded.value = false
  }
}
</script>
