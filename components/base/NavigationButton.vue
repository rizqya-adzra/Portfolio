<template>
  <button 
    class="text-white border-b-[6px] p-2 transition-all border-transparent"
    :class="[
      'hover:border-[#714AFF]', 
      { 
        'border-[#714AFF]': isActive, 
      }
    ]"
    @click="handleClick">
    {{ buttonName }}
  </button>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  props: {
    buttonName: {
      type: String,
      default: "NAVIGATION BUTTON"
    },
    onClick: {
      type: Function,
      required: true,
    },
    path: {
      type: String, 
      required: true,
    }
  },
  setup(props) {
    const route = useRoute();

    const isActive = computed(() => route.path === props.path);

    return { isActive };
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>
