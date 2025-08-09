<template>
  <button class="font-bebas text-2xl flex p-5 px-8 gap-5 rounded-full bg-white text-[#714AFF] hover:bg-[#714AFF] hover:text-white transition-all duration-500" @click="handleClick">
    <component :is="icon" class="w-6 h-6" />
    {{ buttonName }}
  </button>
</template>

<script>  
export default {
  props: {
    buttonName: {
      type: String,
      default: "SPECIAL BOSS"
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

