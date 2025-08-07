<template>
  <button class="flex p-4 gap-5 bg-black text-white dark:bg-white dark:text-black font-bold hover:bg-indigo-600 dark:hover:text-white transition-all" @click="handleClick">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: "PRIMARY BUTTON"
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

