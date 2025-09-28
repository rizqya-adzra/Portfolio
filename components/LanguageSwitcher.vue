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
      class="flex items-center gap-2 px-3 py-2 bg-secondary dark:bg-dark_secondary dark:hover:bg-dark_tertiary text-black dark:text-white rounded-full hover:opacity-90 focus:outline-none transition duration-500"
    >
      <Icon name="ph:globe-bold" class="text-3xl" />
      <Icon name="ph:caret-down-bold" class="text-xs" />
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-32 bg-secondary text-black dark:bg-dark_secondary dark:text-white rounded-md shadow-lg z-50"
    >
      <ul class="py-1 text-sm">
        <li
          v-for="l in locales"
          :key="l.code"
          @click="changeLanguage(l.code)"
          class="px-2 py-2 mx-3 my-1 rounded cursor-pointer font-bold hover:bg-tertiary dark:hover:bg-dark_tertiary"
          :class="locale === l.code ? 'bg-tertiary dark:bg-dark_tertiary' : ''"
        >
          {{ l.name }}
        </li>
      </ul>

    </div>
  </div>
</template>
