<template>
  <button
    class="font-bebas text-2xl flex items-center py-7 px-24 gap-5 rounded-full 
           bg-black text-white 
           dark:bg-white dark:text-black 
           hover:bg-primary hover:text-white 
           transition-all duration-500"
    @click="onClick?.()"
  >
    <div v-if="icon" class="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
      <Icon v-if="icon" :name="icon" class="text-white text-2xl" />
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
