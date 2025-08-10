<template>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-xs w-full">
    <TransitionGroup name="toast-fade" tag="div">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="flex items-center p-3 rounded-lg shadow"
        :class="getBgClass(toast.type)"
        role="alert"
      >
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-9 h-9 rounded-lg"
          :class="getIconBgClass(toast.type)"
        >
          <Icon :name="getIconName(toast.type)" class="w-6 h-6" :class="getIconColorClass(toast.type)" />
        </div>
        <div class="ml-3 font-inter">{{ toast.message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  message: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 3000,
  },
})

const toasts = ref([])
let idCounter = 0

watch(
  () => props.message,
  (newMsg) => {
    if (!newMsg) return

    const id = idCounter++
    if (toasts.value.length >= 2) {
      toasts.value.shift()
    }
    toasts.value.push({
      id,
      message: newMsg,
      type: props.type,
      duration: props.duration,
    })

    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, props.duration)
  }
)



function getIconName(type) {
  if (type === 'success') return 'heroicons:check-circle'
  if (type === 'error') return 'heroicons:x-circle'
  if (type === 'warning') return 'heroicons:exclamation-triangle'
  return 'heroicons:information-circle'
}

function getBgClass(type) {
  return 'bg-white dark:bg-[#2b2b2b] text-gray-500 dark:text-gray-400'
}

function getIconBgClass(type) {
  if (type === 'success') return 'bg-green-100 dark:bg-green-800'
  if (type === 'error') return 'bg-red-100 dark:bg-red-800'
  if (type === 'warning') return 'bg-yellow-100 dark:bg-yellow-800'
  return 'bg-blue-100 dark:bg-blue-800'
}

function getIconColorClass(type) {
  if (type === 'success') return 'text-green-500 dark:text-green-200'
  if (type === 'error') return 'text-red-500 dark:text-red-200'
  if (type === 'warning') return 'text-yellow-500 dark:text-yellow-200'
  return 'text-blue-500 dark:text-blue-200'
}
</script>

<style scoped>
.toast-fade-enter-from,
.toast-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
