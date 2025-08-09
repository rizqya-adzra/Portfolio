<template>
  <div class="flex flex-col min-h-screen dark:bg-[#101113] duration-500">
    
    <div class="sticky top-0 z-50">
      <AppHeader />
    </div>

    <main class="flex-1 overflow-hidden">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
