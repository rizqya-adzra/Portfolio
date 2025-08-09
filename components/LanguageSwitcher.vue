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
      class="flex items-center gap-2 px-3 py-2 bg-slate-200 dark:bg-[#2b2b2b] text-black dark:text-white rounded-full hover:opacity-90 focus:outline-none transition duration-500"
    >
      <Icon name="ph:globe-bold" class="text-3xl" />
      <Icon name="ph:caret-down-bold" class="text-xs" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-slate-200 text-black dark:bg-[#2b2b2b] dark:text-white rounded-md shadow-lg z-50"
    >
      <ul class="py-1 text-sm">
        <li
          v-for="l in locales"
          :key="l.code"
          @click="changeLanguage(l.code)"
          class="px-2 py-2 mx-3 my-1 rounded cursor-pointer font-bold hover:bg-slate-500 hover:text-white dark:hover:bg-[#444]"
          :class="locale === l.code ? 'bg-slate-500 dark:bg-[#444] text-white' : ''"
        >
          {{ l.name }}
        </li>
      </ul>

    </div>
  </div>
</template>
