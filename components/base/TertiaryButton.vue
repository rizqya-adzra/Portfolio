<template>
  <button
    class="relative flex p-6 rounded-3xl border-4 text-white transition-all group hover:bg-white "
    @click="handleClick"
  >
    <Icon :name="icon" class="text-5xl" />

    <span
      v-if="tooltip"
      class="absolute bottom-[14vh] mb-2 left-1/2 font-inter font-bold -translate-x-1/2 whitespace-nowrap rounded bg-[#101113] py-3 px-5 text-xs text-white opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100"
    >
      {{ tooltip }}
      <span class="tooltip-arrow"></span>
    </span>
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
    },
    tooltip: {
      type: String,
      default: "Tooltip"
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

<style scoped>
.tooltip-arrow {
  position: absolute;
  top: 100%; 
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #2d3748; 
}

button:hover span {
  opacity: 1;
  pointer-events: auto;
}
</style>
