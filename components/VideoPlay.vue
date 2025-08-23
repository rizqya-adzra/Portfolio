<template>
  <div class="relative w-full overflow-hidden bg-black mx-w-full mx-auto">
    
    <div 
      class="absolute bottom-0 left-0 w-40 h-40 bg-white dark:bg-[#101113] z-20" 
      style="clip-path: polygon(0 100%, 200% 200%, 0 0);">
    </div>

    <div class="relative w-full aspect-[10/16] md:aspect-[1/1] lg:aspect-[21/9]">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="metadata"
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/0804.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black/30 z-10"></div>

      <div
        class="absolute inset-0 flex flex-col gap-2 items-center justify-center z-20 text-white -translate-y-6 sm:-translate-y-8 md:-translate-y-11 px-4 text-center"
      >
        <p
          class="font-jaro tracking-tighter 
                 text-7xl sm:text-8xl lg:text-9xl"
        >
          {{ $t('welcome') }}
        </p>
        <p
          class="font-inter font-bold text-[10px] sm:text-xs md:text-sm lg:text-base"
        >
          {{ $t('introduction') }}
        </p>
      </div>
    </div>
  </div>
</template>
