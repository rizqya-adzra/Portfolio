<template>
  <button class="font-bebas text-xl flex p-4 gap-5 bg-black text-white dark:bg-white dark:text-black hover:bg-[#714AFF] dark:hover:text-white transition-all" @click="handleClick">
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

