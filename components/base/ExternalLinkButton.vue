<template>
  <button
    class="flex p-3 gap-5 rounded-full text-dark hover:text-white bg-gray-300 dark:bg-white dark:text-black font-bold hover:bg-indigo-600 dark:hover:text-white transition-all"
    @click="handleClick"
  >
    <Icon :name="icon" class="text-3xl" />
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
