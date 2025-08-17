<script setup lang="ts"></script>

<template>
  <footer class="font-inter bg-black py-16 text-center text-sm border-t border-gray-700 text-white">
    <div class="flex flex-col gap-3 text-gray-400">
      <div class="flex justify-center items-center">
        <img src="/favicon.ico" alt="" class="max-w-12">
        <p class="text-lg font-bold leading-tight">RIZQYA <br> ADZRA.</p>
      </div>
      <p>{{ $t('footer_1') }}</p>
      <div>
        <p>{{ $t('footer_2') }}</p>
        <p class="font-bold">rizqyaadzra68@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
