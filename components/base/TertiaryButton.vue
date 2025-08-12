<template>
  <button
    class="relative flex p-6 md:p-8 rounded-3xl border-4 transition-all duration-500 ease-in-out group"
    :style="isHovered ? { color: hoverColor } : {}"
    :class="{
      'bg-white scale-110 shadow-xl brightness-110': isHovered,
      'hover:bg-white text-indigo-950 hover:scale-110 hover:shadow-xl hover:brightness-110': true
    }"
    @click="handleClick"
  >
    <Icon
      :name="icon"
      class="text-3xl sm:text-4xl md:text-5xl transition-transform duration-500"
    />

    <span
      v-if="tooltip"
      class="absolute bottom-[90px] sm:bottom-[100px] md:bottom-[105px] mb-2 left-1/2 font-inter font-bold -translate-x-1/2 whitespace-nowrap rounded bg-[#101113] py-2 px-3 sm:py-3 sm:px-5 text-[10px] sm:text-xs text-white opacity-0 transition-opacity duration-300 pointer-events-none"
      :class="{
        'opacity-100': isHovered,
        'group-hover:opacity-100': true
      }"
    >
      {{ tooltip }}
      <span class="tooltip-arrow"></span>
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  icon: { type: String, default: "uil:instagram" },
  link: { type: String, default: "" },
  tooltip: { type: String, default: "Tooltip" },
  hoverColor: { type: String, default: "#ffffff" },
  isHovered: { type: Boolean, default: false }
})

const handleClick = () => {
  if (props.link) {
    window.open(props.link, "_blank")
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
  border-top: 6px solid #101113;
}

/* Responsive tooltip arrow size */
@media (max-width: 640px) {
  .tooltip-arrow {
    border-left-width: 4px;
    border-right-width: 4px;
    border-top-width: 4px;
  }
}
</style>
