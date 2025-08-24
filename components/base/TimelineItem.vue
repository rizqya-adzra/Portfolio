<template>
  <section class="dark:text-white duration-500">
    <div class="container max-w-5xl py-12 mx-auto">
      <div class="grid sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3 relative">
            <span
              class="absolute -top-6 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 
                    text-[120px] font-bold text-primary opacity-10 select-none z-0"
            >
              0{{ props.index }}
            </span>
            <div
              class="relative z-10 text-center sm:text-left mb-8 
                    before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-primary"
            >
              <h3 class="text-2xl md:text-3xl font-semibold">{{ title }}</h3>
              <h3 class="font-semibold text-gray-500 dark:text-gray-400 mt-2">{{ subtitle }}</h3>
            </div>
          </div>
        <div class="relative px-4 space-y-6 sm:col-span-9">
          <div
            class="relative px-4
            before:absolute before:top-2 before:bottom-1 before:w-1 before:left-[22px] before:bg-gray-300"
          >
            <div
              v-for="(item, idx) in items"
              :key="idx"
              class="relative pl-10 mb-8
              before:absolute before:top-2 before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-primary"
            >
             <button
                @click="toggle(idx)"
                :class="[
                  'w-full flex items-center gap-10 justify-between text-left px-4 py-3 rounded-lg transition',
                  active.includes(idx)
                    ? 'bg-secondary dark:bg-dark_secondary'
                    : ''
                ]"
              >
                <h3 class="text-lg sm:text-xl font-semibold tracking-wide">
                  {{ item.date }}
                </h3>
                <span class="text-2xl font-bold">
                  {{ active.includes(idx) ? '−' : '+' }}
                </span>
              </button>
              <transition name="accordion">
                <div v-if="active.includes(idx)" class="overflow-hidden mt-3 px-4">
                  <p>{{ item.description }}</p>
                  <img
                    v-if="item.image"
                    :src="item.image"
                    alt="image"
                    class="rounded-3xl mt-3 max-w-full w-auto"
                  />
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  index: Number,
  title: String,
  subtitle: String,
  date_1: String,
  description_1: String,
  date_2: String,
  description_2: String,
  date_3: String,
  description_3: String,
  image_1: String,
  image_2: String,
  image_3: String
});

const items = [
  { date: props.date_1, description: props.description_1, image: props.image_1 },
  { date: props.date_2, description: props.description_2, image: props.image_2 },
  { date: props.date_3, description: props.description_3, image: props.image_3 }
].filter(i => i.date); // buang yg kosong

const active = ref([]); // multiple expand

function toggle(index) {
  if (active.value.includes(index)) {
    active.value = active.value.filter(i => i !== index);
  } else {
    active.value.push(index);
  }
}
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.35s ease;
}

.accordion-enter-from {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px) scaleY(0.95);
}
.accordion-enter-to {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0) scaleY(1);
}

.accordion-leave-from {
  max-height: 1000px;
  opacity: 1;
  transform: translateY(0) scaleY(1);
}
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px) scaleY(0.95);
}

</style>
