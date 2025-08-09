<template>
  <div class="font-inter flex items-center py-5 justify-around border-b-[1px] border-gray-700 bg-white dark:bg-black text-black dark:text-white duration-500">
    <div>
      <h1 class="text-2xl font-bold">LOGO.</h1>
    </div>
    
    <div class="flex justify-center gap-9 font-bold text-xs">
      <BaseNavigationButton :buttonName="$t('about_me')" @click="navigateTo('/')" link="/" />
      <BaseNavigationButton :buttonName="$t('certificate')" @click="navigateTo('/certificate')" link="/certificate" />
      <BaseNavigationButton :buttonName="$t('experience')" />
      <BaseNavigationButton :buttonName="$t('blog')" />
    </div>

    <div></div>

    <div class="flex gap-6">
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
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  </div>
</template>

<script setup>
  const isOpen = ref(false)
  const colorMode = useColorMode()
  const isDark = computed(() => colorMode.preference === 'dark')
  function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
  import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  function navigateTo(path) {
    router.push(path)
  }
</script>

