<template>
  <section class="dark:text-white duration-500">
    <div class="container max-w-5xl py-12 mx-auto">
      <div class="grid sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div
            class="text-center sm:text-left mb-8 
            before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#714AFF]"
          >
            <h3 class="text-2xl md:text-3xl font-semibold">{{ title }}</h3>
            <h3 class="font-semibold text-gray-500 dark:text-gray-400 mt-2">{{ subtitle }}</h3>
          </div>
        </div>

        <div class="relative px-4 space-y-6 sm:col-span-9">
          <div
            class="relative px-4 sm:space-y-8
            before:absolute before:top-1 before:bottom-0 before:w-1 before:left-[22px] before:bg-gray-300"
          >
            <!-- Date 1 -->
            <div
              class="flex flex-col relative pl-10 mb-8
              before:absolute before:top-1 before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-[#714AFF]">
              <h3 class="text-xl font-semibold tracking-wide">{{ date_1 }}</h3>
              <p class="mt-3">{{ description_1 }}</p>
              <img v-if="image_1" :src="image_1" alt="image" class="rounded-3xl mt-3 max-w-full w-auto sm:w-96" />
            </div>

            <!-- Date 2 -->
            <div
              v-if="date_2"
              class="flex flex-col relative pl-10 mb-8
              before:absolute before:top-1 before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-[#714AFF]">
              <h3 class="text-xl font-semibold tracking-wide">{{ date_2 }}</h3>
              <p class="mt-3">{{ description_2 }}</p>
              <img v-if="image_2" :src="image_2" alt="image" class="rounded-3xl mt-3 max-w-full w-auto sm:w-96" />
            </div>

            <!-- Date 3 -->
            <div
              v-if="date_3"
              class="flex flex-col relative pl-10 mb-8
              before:absolute before:top-1 before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-[#714AFF]">
              <h3 class="text-xl font-semibold tracking-wide">{{ date_3 }}</h3>
              <p class="mt-3">{{ description_3 }}</p>
              <img v-if="image_3" :src="image_3" alt="image" class="rounded-3xl mt-3 max-w-full w-auto sm:w-96" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
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
})
</script>
