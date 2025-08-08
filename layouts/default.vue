<template>
  <div class="flex flex-col min-h-screen dark:bg-black">

    <AppHeader />

    <main class="overflow-hidden">
      <slot />
    </main>
    
    <AppFooter />

  </div>
</template>
