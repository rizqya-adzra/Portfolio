<template>
  <div class="flex flex-col min-h-screen dark:bg-black">

    <AppHeader />

    <main class="flex-1 w-[1430px] px-3 mx-auto">
      <slot />
    </main>
    
    <AppFooter />

  </div>
</template>
