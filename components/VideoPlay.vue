<template>
  <div class="relative w-full overflow-hidden bg-black">
    <div class="relative w-full" style="aspect-ratio: 23 / 9;">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/0804.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black/50 z-10"></div>

      <div class="absolute inset-0 flex flex-col gap-3 items-center justify-center z-20 text-white -translate-y-11">
        <p class="font-jaro text-8xl font-bold">{{ $t('welcome') }}</p>
        <p class="font-inter font-bold text-xs">{{ $t('introduction') }}</p>
      </div>
    </div>
  </div>
</template>
