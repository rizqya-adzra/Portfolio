<template>
  <div
    class="font-inter flex items-center py-5 justify-between border-b border-gray-700 
           bg-white dark:bg-black text-black dark:text-white duration-500 px-4 md:px-10"
  >
    <div>
      <h1 class="text-2xl font-bold">LOGO.</h1>
    </div>
    <div class="hidden lg:flex justify-center gap-9 font-bold text-xs">
      <BaseNavigationButton :buttonName="$t('about_me')" @click="navigateTo('/')" link="/" />
      <BaseNavigationButton :buttonName="$t('certificate')" @click="navigateTo('/certificate')" link="/certificate" />
      <BaseNavigationButton :buttonName="$t('experience')" @click="navigateTo('/experience')" link="/experience" />
      <BaseNavigationButton :buttonName="$t('blog')" />
    </div>
    <div class="flex gap-6 items-center">
      <div class="flex justify-center items-center cursor-pointer">
        <div
          class="relative rounded-full w-14 h-7 transition duration-200 ease-linear hover:opacity-90"
          :class="isDark ? 'bg-indigo-600' : 'bg-yellow-500'"
          @click="toggle"
        >
          <div
            class="absolute top-1 left-1 w-5 h-5 flex items-center justify-center rounded-full bg-white transition-all duration-200 ease-linear"
            :class="isDark ? 'translate-x-7' : 'translate-x-0'"
          >
            <Icon :name="isDark ? 'uil:moon' : 'uil:sun'" class="w-4 h-4 text-black" />
          </div>
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
        class="absolute top-[64px] left-0 w-full bg-white dark:bg-black border-t border-gray-700 flex flex-col items-center py-6 space-y-6 lg:hidden"
      >
        <BaseNavigationButton :buttonName="$t('about_me')" @click="navigateTo('/')" link="/" />
        <BaseNavigationButton :buttonName="$t('certificate')" @click="navigateTo('/certificate')" link="/certificate" />
        <BaseNavigationButton :buttonName="$t('experience')" @click="navigateTo('/experience')" link="/experience" />
        <BaseNavigationButton :buttonName="$t('blog')" />
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
