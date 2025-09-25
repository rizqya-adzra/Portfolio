<template>
  <div>
    <div class="py-16">
      <div class="max-w-[700px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="font-bebas text-7xl md:text-8xl lg:text-9xl text-primary mb-7 text-center sm:text-start">
          {{ $t('article') }}
        </h1>
        <BaseCard :items="links" />
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  {
    title: "WikVentory Project Documentation",
    url: "https://www.notion.so/WikVentory-Pra-Project-Work-241673beb1c480239722c98ff4480c73",
    category: "School Project",
    date: "31/07/2025",
    description: "Berisi dokumentasi projek Pra-Project Work untuk kelas PPLG XII-5 yakni, WikVentory atau aplikasi peminjaman barang.",
    image: "images/articles/wikventory.png",
  },
  {
    title: "Logic Fundamental",
    url: "https://www.notion.so/Fundamental-246673beb1c480b6a670ff4396d502ae?source=copy_link",
    category: "Coding",
    date: "05/08/2025",
    description: "Logic Fundamental",
    image: "https://vuejs.org/images/logo.png",
  },
  {
    title: "Django Fundamental",
    url: "https://www.notion.so/Django-REST-API-246673beb1c480518cddd0bee5b26e02?source=copy_link",
    category: "Coding",
    date: "31/07/2025",
    description: "Berisi fundamental django",
    image: "https://static.djangoproject.com/img/logos/django-logo-positive.png",
  }
]
</script>