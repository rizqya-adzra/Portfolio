<template>
  <button
    class="font-bebas text-2xl flex items-center py-7 px-24 gap-5 rounded-full 
           bg-[#714AFF] text-white 
           dark:bg-white dark:text-[#714AFF] 
           hover:bg-[#714AFF] hover:text-white 
           transition-all duration-500"
    @click="onClick?.()"
  >
    <div v-if="icon" class="w-10 h-10 flex items-center justify-center bg-white dark:bg-primary rounded-full">
      <Icon v-if="icon" :name="icon" class="text-[#714AFF] dark:text-white text-2xl" />
    </div>
    {{ buttonName }}
  </button>
</template>

<script setup>
defineProps({
  buttonName: {
    type: String,
    default: "SPECIAL BOSS"
  },
  icon: {
    type: String,
    default: ""
  },
  onClick: {
    type: Function
  }
})
</script>
