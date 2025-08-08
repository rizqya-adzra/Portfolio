<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const { locale, locales, setLocale } = useI18n()

const changeLanguage = (code) => {
  setLocale(code)
  isOpen.value = false
}
</script>

<template>
  <div class="relative inline-block text-left">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 bg-[#2b2b2b] text-[#f5f0e6] rounded-full hover:opacity-90 focus:outline-none transition"
    >
      <Icon name="ph:globe-bold" class="text-3xl" />
      <Icon name="ph:caret-down-bold" class="text-xs" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-[#2b2b2b] text-white rounded-md shadow-lg z-50"
    >
      <ul class="py-1 text-sm">
        <li
          v-for="l in locales"
          :key="l.code"
          @click="changeLanguage(l.code)"
          class="px-2 py-2 mx-3 my-1 rounded hover:bg-[#444] cursor-pointer font-bold"
          :class="locale === l.code ? 'bg-[#444]' : ''"
        >
          {{ l.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
