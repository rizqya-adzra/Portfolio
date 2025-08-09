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

    <div class="bg-[#714AFF] py-12">
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

    <div class="py-24">
      <div class="w-[1200px] mx-auto">
        <div class="grid grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="font-bebas text-[#714AFF] text-8xl">{{ $t('header_3') }}</h1>
            <p class="mb-4 font-inter font-bold text-black dark:text-white my-3">{{ $t('subheader_3') }}</p>
            <BasePrimaryButton buttonName="Git Hub Repository" link='https://www.github.com' />
          </div>
          <div>
            <BaseVerticalCarousel :items="carouselItems"/>
            <div class="flex items-center gap-6 text-gray-700 dark:text-gray-300 text-sm font-medium select-none mt-5">
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#FF4A4D] inline-block"></span>
                Internship
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#F34AFF] inline-block"></span>
                School
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#4A5CFF] inline-block"></span>
                Personal
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#4AFF50] inline-block"></span>
                Completed
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#FFF64A] inline-block"></span>
                On Going
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#1E1E1E] py-12">
      <div class="w-[1200px] mx-auto">
        <div class="flex justify-center gap-24">
          <div>
            <h1 class="font-inter text-white text-4xl font-bold">Interested to Hire Me?</h1>
            <p class="font-inter text-gray-300 mt-2">Please take a look at my CV.</p>
          </div>
          <BaseSpecialButton buttonName="view cv here !" />
        </div>
      </div>
    </div>

    <div class="py-24" style="background: linear-gradient(to bottom, #714AFF, #555555);">
      <div class="w-[1000px] mx-auto">
        <h1 class="font-bebas text-white text-8xl text-center mt-7">{{ $t('header_4') }}</h1>
        <div class="flex items-center mt-12">
          <textarea
            class="font-inter flex-grow resize-none py-2 rounded-3xl px-6 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-[#f7efe7] text-base leading-[64px]"
            placeholder="Write your thoughts about me here."
            rows="1"
            style="vertical-align: middle;"
          ></textarea>
          <button class="font-bebas ml-4 bg-black text-white rounded-3xl px-6 py-7 text-3xl hover:bg-gray-800 transition-colors">
            SEND →
          </button>
        </div>
        <div>
          <p class="font-inter text-gray-400 text-end mt-2 ">{{ $t('subheader_4') }}</p>
        </div>
      </div>

      <div class="flex gap-3 items-center justify-center mt-20">
        <p class="font-inter text-white font-bold">Follow me here -></p>
        <BaseExternalLinkButton icon="uil:linkedin" />
        <BaseExternalLinkButton icon="uil:instagram" />
        <BaseExternalLinkButton icon="uil:twitter" />
        <BaseExternalLinkButton icon="uil:github" />
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
  category: '',
  status: ''
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

const carouselItems = [
  {
    title: 'COMMUNITY APP',
    description: 'Lorem ipsum dolor sit amet...',
    image: 'images/projects/test.jpg',
    category: 'internship',
    status: 'completed'
  },
  {
    title: 'REKAP KETERLAMBATAN',
    description: 'Lorem ipsum dolor sit amet...',
    image: 'images/projects/test.jpg',
    category: 'school',
    status: 'completed'
  },
  {
    title: 'PENGADUAN MASYARAKAT',
    description: 'Lorem ipsum dolor sit amet...',
    image: 'images/projects/test.jpg',
    category: 'internship',
    status: 'completed'
  },
  {
    title: 'BOOKS HOUSE',
    description: 'Lorem ipsum dolor sit amet...',
    image: 'images/projects/test.jpg',
    category: 'school',
    status: 'completed'
  },
  {
    title: 'PORTFOLIO',
    description: 'Lorem ipsum dolor sit amet...',
    image: 'images/projects/test.jpg',
    category: 'personal',
    status: 'ongoing'
  },
  {
    title: 'NOTES APP',
    description: 'Lorem ipsum dolor sit ametdsadsadadasdadasdasdda adas adas asd as das das a das as as',
    image: 'images/projects/test.jpg',
    category: 'personal',
    status: 'completed'
  }
]
</script>


