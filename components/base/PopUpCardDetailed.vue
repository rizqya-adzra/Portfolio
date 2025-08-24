<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center overflow-hidden justify-center bg-black/40 dark:bg-gray-600/30 z-50 backdrop-blur"
  ></div>

  <transition name="fade-scale">
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
    >
      <div
        class="relative shadow-2xl bg-white dark:bg-[#101113] w-[800px] max-h-[70vh] sm:max-h-[85vh] rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col z-10 overflow-hidden"
      >
        <button
          @click="$emit('close')"
          class="absolute right-4 top-4 sm:right-16 sm:top-12 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center
            bg-white dark:bg-[#101113] rounded-full text-gray-500 hover:text-black dark:hover:text-white
            transition-colors z-20"
        >
          <Icon name="ph:x-bold" class="text-2xl sm:text-4xl" />
        </button>

        <div class="flex-1 overflow-y-auto pr-2 sm:pr-4">
          <div>
            <h1
              class="font-bebas text-6xl sm:text-7xl md:text-8xl tracking-tight sm:tracking-normal text-primary leading-none break-words"
            >
              {{ title }}
            </h1>
            <p
              v-if="subheader"
              class="font-inter font-bold text-black dark:text-white text-sm sm:text-base mt-1"
            >
              {{ subheader }}
            </p>
          </div>

          <div class="mt-4 sm:mt-6">
            <img
              v-if="image"
              :src="image"
              alt="Popup image"
              class="w-full h-full object-cover rounded-xl mb-3"
            />
            <img
              v-if="image_2"
              :src="image_2"
              alt="Popup image"
              class="w-full h-full object-cover rounded-xl mb-3"
            />
            <img
              v-if="image_3"
              :src="image_3"
              alt="Popup image"
              class="w-full h-full object-cover rounded-xl mb-3"
            />
            <p
              class="font-inter text-gray-700 dark:text-gray-300 mt-1 text-xs sm:text-sm text-end mr-3"
              v-if="github"
            >
              - Berasal dari Landing Page
            </p>
            <h3
              class="font-inter font-bold mt-5 dark:text-white text-base sm:text-lg"
              v-if="description"
            >
              {{ $t('card_about_this_app') }}
            </h3>
            <p
              v-if="description"
              class="font-inter text-gray-700 dark:text-gray-300 leading-relaxed mt-2 text-sm sm:text-base"
            >
              {{ description }}
            </p>
          </div>

          <h3
            class="font-inter font-bold mt-5 dark:text-white text-base sm:text-lg"
            v-if="datetime"
          >
            {{ $t('card_works') }}
          </h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <div
              class="p-2 min-w-[80px] text-center rounded-3xl text-xs sm:text-sm text-white bg-primary font-inter font-bold"
              v-if="datetime"
            >
              {{ datetime }}
            </div>
            <div
              class="py-2 min-w-[80px] text-center rounded-3xl text-xs sm:text-sm text-white font-inter font-bold"
              v-if="category"
              :style="{ backgroundColor: categoryColor || '#999999'}"
            >
              {{ category }}
            </div>
            <div
              class="py-2 min-w-[80px] text-center rounded-3xl text-xs sm:text-sm text-white font-inter font-bold"
              v-if="status"
              :style="{ backgroundColor: statusColor || '#999999' }"
            >
              {{ status }}
            </div>
          </div>

          <h3
            class="font-inter font-bold mt-5 dark:text-white text-base sm:text-lg"
          >
            {{ $t('card_other_links') }}
          </h3>
          <div class="mt-2 flex flex-wrap gap-2">
            <BaseSecondaryButton v-if="link" buttonName="link" :link="link" />
            <BaseSecondaryButton v-if="github" buttonName="github" :link="github" icon="" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  visible: { type: Boolean, required: true },
  title: { type: String, required: true },
  subheader: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  image_2: { type: String, default: '' },
  image_3: { type: String, default: '' },
  github: { type: String, default: '' },
  link: { type: String, default: '' },
  datetime: { type: String, default: '' },
  category: { type: String, default: '' },
  status: { type: String, default: '' },
  categoryColors: { type: Object, default: () => ({}) },
  statusColors: { type: Object, default: () => ({}) }
})

const categoryColor = computed(() => {
  return props.categoryColors[props.category] || '#999'
})

const statusColor = computed(() => {
  return props.statusColors[props.status] || '#666'
})

defineEmits(['close'])
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
