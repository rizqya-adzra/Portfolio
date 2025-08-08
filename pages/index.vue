<template>
  <div>
    <VideoPlay />

    <div class="py-24">
      <div class="w-[1200px] mx-auto">
        <h1 class="font-bebas text-[#714AFF] text-8xl">{{ $t('header_1') }}</h1>
        <div class="grid grid-cols-2 gap-12 items-end mt-12">
          <div>
            <p class="mb-4 font-inter font-bold text-black dark:text-white">{{ $t('subheader_1') }}</p>
            <p class="font-inter text-gray-700 dark:text-white">{{ $t('description_1') }}</p>
  
            <div class="flex gap-5 mt-12">
              <BaseSecondaryButton buttonName="Back end" />
              <BaseSecondaryButton buttonName="Fullstack" />
              <BaseSecondaryButton buttonName="Front end" />
            </div>
          </div>
  
          <div>
            <BaseImageButtonCard imageSrc="images/bebek.jpeg" description="- Rizqya Adzra Zahira Sudrajat" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#714AFF] py-24">
      <div class="w-[1200px] mx-auto">
        <h1 class="font-bebas text-white text-8xl text-center">{{ $t('header_2') }}</h1>
        <div class="grid grid-cols-2 gap-12 items-start mt-12">
          <div>
              <p class="mb-4 font-inter font-bold text-white">{{ $t('subheader_2') }}</p>
              <div class="flex flex-col gap-4">
                <div class="flex gap-3">
                  <BaseTertiaryButton icon="mdi:vuejs" tooltip="Vue JS" />
                  <BaseTertiaryButton icon="simple-icons:nuxt" tooltip="Nuxt JS" />
                  <BaseTertiaryButton icon="simple-icons:react" tooltip="React JS" />
                  <BaseTertiaryButton icon="simple-icons:javascript" tooltip="Javascript" />
                </div>
                <div class="flex gap-3">
                  <BaseTertiaryButton icon="simple-icons:php" tooltip="PHP" />
                  <BaseTertiaryButton icon="simple-icons:laravel" tooltip="Laravel" />
                  <BaseTertiaryButton icon="simple-icons:python" tooltip="Python" />
                  <BaseTertiaryButton icon="simple-icons:django" tooltip="Django" />
                </div>
              </div>
          </div>
          
          <div class="text-start">
            <p class="mb-4 font-inter font-bold text-white">{{ $t('subheader_2.1') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex gap-3 justify-start">
                <BaseTertiaryButton icon="simple-icons:figma" tooltip="Figma" />
                <BaseTertiaryButton icon="simple-icons:github" tooltip="Github" />
                <BaseTertiaryButton icon="simple-icons:trello" tooltip="Trello" />
                <BaseTertiaryButton icon="simple-icons:notion" tooltip="Notion" />
              </div>
              <p class="font-inter text-gray-300">{{ $t('description_2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
