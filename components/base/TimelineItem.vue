<template>
	<section class="dark:text-white duration-500">
		<div
			class="container max-w-5xl px-4 py-12 mx-auto"
			v-for="(item, index) in items"
			:key="index"
		>
			<div class="grid gap-4 mx-4 sm:grid-cols-12">
				<div class="col-span-12 sm:col-span-3">
					<div
						class="text-center sm:text-left mb-14 
						before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#714AFF]"
					>
						<h3 class="text-3xl font-semibold">{{ item.title }}</h3>
						<h3 class="font-semibold text-gray-500 dark:text-gray-400 mt-2">{{ item.subtitle }}</h3>
					</div>
				</div>
				<div
					class="relative col-span-12 px-4 space-y-6 sm:col-span-9"
				>
					<div
						class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 
						sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300"
					>
						<div
							class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 
							sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] 
							sm:before:z-[1] before:bg-[#714AFF]"
						>
							<h3 class="text-xl font-semibold tracking-wide">{{ item.date_1 }}</h3>
							<p class="mt-3">{{ item.description_1 }}</p>
							<img v-if="item.image_1" :src=item.image_1 alt="image" class="rounded-3xl mt-3 w-96">
						</div>
						
						<div
							v-if="item.date_2"
							class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 
							sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] 
							sm:before:z-[1] before:bg-[#714AFF]"
							>
							<h3 class="text-xl font-semibold tracking-wide">{{ item.date_2 }}</h3>
							<p class="mt-3">{{ item.description_2 }}</p>
							<img v-if="item.image_2" :src=item.image_2 alt="image" class="rounded-3xl mt-3 w-96">
						</div>

						<div
						v-if="item.date_3"
							class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 
							sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] 
							sm:before:z-[1] before:bg-[#714AFF]"
							>
							<h3 class="text-xl font-semibold tracking-wide">{{ item.date_3 }}</h3>
							<p class="mt-3">{{ item.description_3 }}</p>
							<img v-if="item.image_3" :src=item.image_3 alt="image" class="rounded-3xl mt-3 w-96">
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	items: {
		type: Array,
		required: true,
		default: () => [],
	},
});
</script>
