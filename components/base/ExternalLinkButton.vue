<template>
  <button
    class="flex p-3 gap-5 rounded-full text-white border-4 border-white font-bold hover:bg-black transition-all"
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
