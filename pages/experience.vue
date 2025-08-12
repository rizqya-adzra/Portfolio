<template>
  <div>
    <div class="py-16">
    <div class="w-[1200px] mx-auto">
      <h1 class="font-bebas text-9xl text-[#714AFF] mb-5">{{ $t('experience') }}</h1>
      <BaseTimelineItem :items="TimelineData" />
    </div>
    <p class="font-inter font-bold text-[#714AFF] text-center mt-6  ">AND THE JOURNEYS CONTINUE . . .</p>
    </div>
  </div>
</template>

<script setup>
const TimelineData = [
  {
    title: "SMK WIKRAMA BOGOR",
    subtitle: "Sebagai Siswa PPLG",
    date_1: "2023",
    description_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date_2: "2024",
    description_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date_3: "2025",
    description_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "PT. MEDIAN TALENTA RAYA",
    subtitle: "PKL / Magang",
    date_1: "2025",
    description_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_1: "images/certificates/Sertifikasi Rizqya.jpg"
  },
];
</script>