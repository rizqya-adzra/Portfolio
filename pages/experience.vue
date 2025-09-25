<template>
  <div>
    <div class="py-16">
      <div class="max-w-[700px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="font-bebas text-7xl md:text-8xl lg:text-9xl text-primary mb-2 text-center sm:text-start">
          {{ $t('experience') }}
        </h1>
        <BaseTimelineItem
          v-for="(item, index) in TimelineData"
          :key="index"
          :index="index + 1"
          :title="item.title"
          :subtitle="item.subtitle"
          :date_1="item.date_1"
          :description_1="$t(item.description_1 || 'default_description')"
          :date_2="item.date_2"
          :description_2="$t(item.description_2 || 'default_description')"
          :date_3="item.date_3"
          :description_3="$t(item.description_3 || 'default_description')"
          :image_1="item.image_1"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'RA | Experience'
})

const TimelineData = [
  {
    title: "SMK WIKRAMA BOGOR",
    subtitle: "Sebagai Siswa PPLG",
    date_1: "2023 June - December",
    description_1: "experience_wikrama_2023",
    date_2: "2024 January - June",
    description_2: "experience_wikrama_2024",
    date_3: "2025  June - December",
    description_3: "experience_wikrama_2025",
  },
  {
    title: "PT. MEDIAN TALENTA RAYA",
    subtitle: "PKL / Magang",
    date_1: "2025 January - June",
    description_1: "experience_mtr_2025",
    image_1: "images/certificates/Sertifikasi Rizqya.jpg"
  },
  {
    title: "FREELANCER",
    subtitle: "Part Time Job",
    date_1: "2025 - Now",
    description_1: "experience_freelancer_2025",
  },
];
</script>