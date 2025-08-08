<template>
  <div class="flex flex-col min-h-screen dark:bg-black">
    
    <div class="sticky top-0 z-50">
      <AppHeader />
    </div>

    <main class="flex-1 overflow-hidden mb-24">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
