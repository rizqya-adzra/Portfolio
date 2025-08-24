<template>
  <button
    class="flex p-3 sm:p-4 md:p-5 gap-3 sm:gap-5 rounded-full dark:text-white border-4 font-bold hover:text-white hover:bg-primary transition-all"
    @click="handleClick"
  >
    <Icon :name="icon" class="text-2xl sm:text-3xl md:text-4xl" />
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "uil:instagram"
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
