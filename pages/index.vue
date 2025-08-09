<template>
  <div>
    <VideoPlay />

    <div class="py-24">
      <div class="w-[1200px] mx-auto">
        <h1 class="font-bebas text-[#714AFF] text-8xl">{{ $t('header_1') }}</h1>
        <div class="grid grid-cols-2 gap-12 items-end mt-12">
          <div>
            <p class="mb-4 font-inter font-bold text-black dark:text-white">{{ $t('subheader_1') }}</p>
            <p class="font-inter text-gray-700 dark:text-gray-300">{{ $t('description_1') }}</p>
  
            <div class="flex gap-5 mt-12">
              <BaseSecondaryButton buttonName="Back end" @click="openPopup('backend')" />
              <BaseSecondaryButton buttonName="Fullstack" @click="openPopup('fullstack')" />
              <BaseSecondaryButton buttonName="Front end" @click="openPopup('frontend')" />
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
                  <BaseTertiaryButton icon="mdi:vuejs" tooltip="Vue JS" class="hover:text-[#40ad36]" />
                  <BaseTertiaryButton icon="simple-icons:nuxt" tooltip="Nuxt JS" class="hover:text-[#40ad36]" />
                  <BaseTertiaryButton icon="simple-icons:react" tooltip="React JS" class="hover:text-[#4585d8]" />
                  <BaseTertiaryButton icon="simple-icons:javascript" tooltip="Javascript" class="hover:text-[#a79e26]" />
                </div>
                <div class="flex gap-3">
                  <BaseTertiaryButton icon="simple-icons:php" tooltip="PHP" class="hover:text-[#5538be]" />
                  <BaseTertiaryButton icon="simple-icons:laravel" tooltip="Laravel" class="hover:text-[#be3838]" />
                  <BaseTertiaryButton icon="simple-icons:python" tooltip="Python" class="hover:text-[#38be8b]" />
                  <BaseTertiaryButton icon="simple-icons:django" tooltip="Django" class="hover:text-[#38be8b]" />
                </div>
              </div>
          </div>
          
          <div class="text-start">
            <p class="mb-4 font-inter font-bold text-white">{{ $t('subheader_2.1') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex gap-3 justify-start">
                <BaseTertiaryButton icon="simple-icons:figma" tooltip="Figma" class="hover:text-[#714AFF]" />
                <BaseTertiaryButton icon="simple-icons:github" tooltip="Github" class="hover:text-[#11103d]" />
                <BaseTertiaryButton icon="simple-icons:trello" tooltip="Trello" class="hover:text-[#385cbe]" />
                <BaseTertiaryButton icon="simple-icons:notion" tooltip="Notion" class="hover:text-[#714AFF]" />
              </div>
              <p class="font-inter text-gray-300">{{ $t('description_2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <BasePopUpCard
      :title="popupData.title"
      :subheader="popupData.subheader"
      :description="$t(popupData.description || 'default_description')"
      :buttonName="popupData.buttonName"
      :visible="isPopupVisible"
      @close="isPopupVisible = false"
    />
  </div>
</template>

<script setup>
const isPopupVisible = ref(false)
const popupData = ref({
  title: '',
  subheader: '',
  description: '',
  buttonName: ''
})

function openPopup(type) {
  if (type === 'backend') {
    popupData.value = {
      title: 'BACK END',
      subheader: 'WEBSITE DEVELOPER',
      description: 'backend_description',
      buttonName: '2 Years Experience'
    }
  } else if (type === 'fullstack') {
    popupData.value = {
      title: 'FULL STACK',
      subheader: 'WEBSITE DEVELOPER',
      description: 'fullstack_description',
      buttonName: '3 Years Experience'
    }
  } else if (type === 'frontend') {
    popupData.value = {
      title: 'FRONT END',
      subheader: 'WEBSITE DEVELOPER',
      description: 'frontend_description',
      buttonName: '1 Year Experience'
    }
  }
  isPopupVisible.value = true
}
</script>


