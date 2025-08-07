<template>
  <button class="flex p-4 gap-5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold hover:bg-indigo-600 dark:hover:text-white transition-all" @click="handleClick">
    <component :is="icon" class="w-6 h-6" />
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: "SECONDARY BUTTON"
    },
    icon: {
      type: Object
    }
  },
  methods: {
    handleClick() {
      if(this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>

