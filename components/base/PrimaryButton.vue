<template>
  <button class="font-bebas text-xl flex p-4 gap-5 bg-black text-white dark:bg-white dark:text-black hover:bg-[#714AFF] dark:hover:text-white transition-all duration-500" @click="handleClick">
    {{ buttonName }}
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: "PRIMARY BUTTON"
    },
    link: {
      type: String,
      default: "" 
    }
  },
  methods: {
    handleClick() {
      if (this.link) {
        window.open(this.link, "_blank")
      } else if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>

