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
          class="absolute right-4 top-4 sm:right-6 sm:top-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
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

          <p class="font-inter text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-sm sm:text-base">
            {{ description }}
          </p>

          <div class="mt-6">
            <BaseSecondaryButton :buttonName="buttonName" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineEmits(['close'])

const props = defineProps({
  visible: { type: Boolean, required: true },
  title: { type: String, required: true },
  subheader: { type: String, required: true },
  description: { type: String, required: true },
  buttonName: { type: String }
});
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
