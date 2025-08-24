<template>
  <div
    class="font-inter flex items-center py-5 justify-between
           bg-white/80 dark:bg-[#0d1118]/80 backdrop-blur-lg text-black dark:text-white duration-500 px-4 md:px-10"
  >
    <div class="flex justify-center items-center">
      <img src="/favicon.ico" alt="" class="max-w-12">
      <p class="text-lg font-bold leading-tight text-gray-800 dark:text-gray-400"> Riz . <br>. Qya .</p>
    </div>
    <div class="hidden lg:flex justify-center gap-9 font-bold text-xs">
      <BaseNavigationButton :buttonName="$t('about_me')" @click="navigateTo('/')" link="/" />
      <BaseNavigationButton :buttonName="$t('certificate')" @click="navigateTo('/certificate')" link="/certificate" />
      <BaseNavigationButton :buttonName="$t('experience')" @click="navigateTo('/experience')" link="/experience" />
      <BaseNavigationButton :buttonName="$t('article')" @click="navigateTo('/article')" link="/article" />
    </div>
    <div class="flex gap-6 items-center">
      <div class="flex justify-center items-center cursor-pointer">
        <div
          class="relative rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition duration-500 hover:opacity-90"
          :class="isDark ? 'bg-dark_secondary text-white hover:bg-dark_tertiary' : 'bg-secondary text-black hover:bg-tertiary'"
          @click="toggle"
        >
          <Icon :name="isDark ? 'uil:moon' : 'uil:sun'" class="w-6 h-6" />
        </div>
      </div>
      <LanguageSwitcher />
    </div>
    <div class="lg:hidden flex items-center gap-4">
      <button @click="isOpen = !isOpen">
        <Icon :name="isOpen ? 'mdi:close' : 'mdi:menu'" class="w-6 h-6" />
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="absolute top-[74px] left-0 w-full bg-white dark:bg-black border-t border-gray-700 flex flex-col items-center py-6 space-y-6 lg:hidden"
      >
        <BaseNavigationButton :buttonName="$t('about_me')" @click="navigateTo('/')" link="/" />
        <BaseNavigationButton :buttonName="$t('certificate')" @click="navigateTo('/certificate')" link="/certificate" />
        <BaseNavigationButton :buttonName="$t('experience')" @click="navigateTo('/experience')" link="/experience" />
        <BaseNavigationButton :buttonName="$t('article')" @click="navigateTo('/article')" link="/article" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const colorMode = useColorMode()
const isDark = ref(false)

onMounted(() => {
  isDark.value = colorMode.preference === 'dark'
})

function toggle() {
  const newTheme = isDark.value ? 'light' : 'dark'
  colorMode.preference = newTheme
  isDark.value = !isDark.value
}

const router = useRouter()
function navigateTo(path) {
  router.push(path)
  isOpen.value = false
}
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
