<template>
  <div class="flex items-center py-5 justify-around bg-[#101113] text-white">
    <div>
      <h1 class="text-2xl font-bold">LOGO.</h1>
    </div>
    
    <div class="flex justify-center gap-9 font-bold text-xs">
      <button @click="navigateTo('/')" :class="[
        'text-white border-b-[6px] p-2 transition-all',
        route.path === '/' ? 'border-[#714AFF]' : 'border-transparent hover:border-[#714AFF]'
      ]">
        ABOUT ME
      </button>
      <button @click="navigateTo('/certificate')" :class="[
        'text-white border-b-[6px] p-2 transition-all',
        route.path === '/certificate' ? 'border-[#714AFF]' : 'border-transparent hover:border-[#714AFF]'
      ]">
        CERTIFICATE
      </button>
      <button class="text-white border-b-4 p-2 border-transparent hover:border-[#714AFF] transition-all">
        EXPERIENCE
      </button>
      <button class="text-white border-b-4 p-2 border-transparent hover:border-[#714AFF] transition-all">
        BLOG
      </button>
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
        <li class="px-2 py-2 mx-3 my-1 rounded hover:bg-[#444] cursor-pointer font-bold">Indonesia</li>
        <li class="px-2 py-2 mx-3 my-1 rounded hover:bg-[#444] cursor-pointer font-bold">English</li>
        <li class="px-2 py-2 mx-3 my-1 rounded hover:bg-[#444] cursor-pointer font-bold">Deutsch</li>
      </ul>
    </div>
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

