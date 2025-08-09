<template>
  <div
    v-if="visible"
    class="fixed inset-0 flex items-center justify-center bg-black/40 dark:bg-gray-600/30 z-50 backdrop-blur"
  ></div>

  <transition name="fade-scale">
    <div
      v-if="visible"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        class="shadow-2xl bg-white dark:bg-[#101113] w-[800px] min-h-[500px] max-h-[600px] rounded-3xl p-12 flex flex-col justify-between relative"
      >
        <div class="flex justify-between items-start">
          <div>
            <h1 class="font-bebas text-8xl text-[#714AFF] leading-none">
              {{ title }}
            </h1>
            <p class="mt-2 font-inter font-bold text-black dark:text-white">
              {{ subheader }}
            </p>
          </div>
          <button
            @click="$emit('close')"
            class="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <Icon name="ph:x-bold" class="text-5xl" />
          </button>
        </div>

        <p class="font-inter text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ description }}
        </p>

        <div>
          <BaseSecondaryButton :buttonName="buttonName" />
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
  buttonName: { type: String, required: true }
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
