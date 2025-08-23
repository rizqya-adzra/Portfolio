<template>
  <div>
    <VideoPlay />

    <div class="py-24 text-center lg:text-start my-10">
      <div class="max-w-[900px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-9xl">
          {{ $t('header_1') }}
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 sm:mt-12">
          <div class="order-2 lg:order-1">
            <p class="mb-4 font-inter font-bold text-black dark:text-white text-xl">{{ $t('subheader_1') }}</p>
            <p class="font-inter text-gray-700 dark:text-gray-300">{{ $t('description_1') }}</p>
            <div class="flex flex-col justify-center sm:flex-row lg:justify-normal gap-5 mt-10">
              <BaseSecondaryButton buttonName="Back end" @click="openPopup('backend')" />
              <BaseSecondaryButton buttonName="Fullstack" @click="openPopup('fullstack')" />
              <BaseSecondaryButton buttonName="Front end" @click="openPopup('frontend')" />
            </div>
          </div>
          <div class="order-1 lg:order-2 ">
            <BaseImageButtonCard imageSrc="images/bebek.jpeg" />
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 mb-5">
      <div class="relative max-w-[900px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14 bg-secondary dark:bg-dark_secondary py-12 rounded-3xl">
        <div 
          class="absolute bottom-0 left-0 w-40 h-40 bg-white dark:bg-[#101113] z-20" 
          style="clip-path: polygon(0 100%, 200% 200%, 0 0);">
        </div>
        <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-9xl text-center">{{ $t('header_2') }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start mt-12">
          <div>
            <p class="mb-4 font-inter font-bold dark:text-white text-center lg:text-start">{{ $t('subheader_2') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal">
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(0, 4)"
                  :key="index"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === index"
                />
              </div>
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal"> 
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(4, 8)"
                  :key="index + 4"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === (index + 4)"
                />
              </div>
            </div>
          </div>
          <div class="text-start">
            <p class="mb-4 font-inter font-bold dark:text-white text-center lg:text-start">{{ $t('subheader_2.1') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal"> 
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(8, 12)"
                  :key="index + 8"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === (index + 8)"
                />
              </div>
              <p class="font-inter text-gray-500 dark:text-gray-300 text-center lg:text-start mt-3">{{ $t('description_2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24">
      <div class="max-w-[900px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-9xl">{{ $t('header_3') }}</h1>
            <p class="mb-4 font-inter font-bold text-black dark:text-white my-3 mt-6">{{ $t('subheader_3') }}</p>
            <BasePrimaryButton buttonName="Git Hub Repository" link="https://github.com/rizqya-adzra?tab=repositories" />
          </div>
          <div>
            <BaseVerticalCarousel :items="carouselItems" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="py-24 mb-16">
      <div class="max-w-[700px] lg:max-w-[1350px] mx-auto">
        <h1 class="font-bebas text-9xl text-primary text-center">{{ $t('experience') }}</h1>
        <div class="flex gap-5 items-center justify-evenly mt-10">
          <div class="p-10 bg-secondary dark:bg-dark_secondary rounded-3xl">
            <div class="flex gap-2 items-center justify-center">
              <div class="bg-primary rounded-full w-14 h-14 flex items-center justify-center mr-2">
                <Icon name="uil:graduation-cap" class="text-white text-4xl" />
              </div>
              <p class="text-inter font-bold text-xl text-center">Education</p>
            </div>
            <div class="flex gap-10 items-center justify-between mt-7">
              <div>
                <p class="font-inter text-start font-semibold">SMK WIKRAMA BOGOR</p>
                <p class="font-inter text-start text-sm">Software Development Major</p>
              </div>
              <div>
                <p class="bg-white p-2 rounded-xl font-bold font-inter text-primary">2023-2026</p>
              </div>
            </div>
          </div>
          <div class="p-10 bg-secondary dark:bg-dark_secondary rounded-3xl">
            <div class="flex gap-2 items-center justify-center">
              <div class="bg-primary rounded-full w-14 h-14 flex items-center justify-center mr-2">
                <Icon name="uil:briefcase-alt" class="text-white text-4xl" />
              </div>
              <p class="text-inter font-bold text-xl text-center">Work Experience</p>
            </div>
            <div class="flex gap-10 items-center justify-between mt-7">
              <div>
                <p class="font-inter text-start font-semibold">PT. Median Talenta Raya</p>
                <p class="font-inter text-start text-sm">Intern - Back End Developer</p>
              </div>
              <div>
                <p class="bg-white p-2 rounded-xl font-bold font-inter text-primary">2025 Jan-Jun</p>
              </div>
            </div>
          </div>
          <div>
            <BaseSpecialButton buttonName="View More" icon="uil:arrow-up-right" :onClick="() => navigateTo('/experience')" />
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 duration-500 px-4 sm:px-6 lg:px-14 mb-16">
      <div class="relative max-w-[700px] lg:max-w-[1350px] bg-secondary dark:bg-dark_secondary rounded-3xl py-16 w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div
          class="absolute top-0 right-0 w-40 h-40 bg-white dark:bg-[#101113] z-20 duration-500"
          style="clip-path: polygon(0 100%, 100% 100%, 0 0);">
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <h1 class="font-bebas dark:text-white text-7xl md:text-8xl lg:text-9xl">
              Interested to Hire Me?
            </h1>
            <p class="font-inter dark:text-gray-300 mt-2">
              Please take a look at my CV.
            </p>
          </div>
           <div class="flex justify-center items-center ">
            <BaseSpecialButton
              buttonName="view cv here !"
              @click="openCvPopup"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="py-24">
      <div class="max-w-[700px] lg:max-w-[1020px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-9xl text-center">
          {{ $t('header_4') }}
        </h1>
        <div class="flex flex-col sm:flex-row items-center mt-12 gap-4">
          <textarea
            v-model="message"
            rows="1"
            class="font-inter flex-grow w-full resize-none py-6 rounded-3xl px-6 text-gray-500 placeholder-gray-400 
                  bg-gray-100 text-base
                  min-h-[44px]"
            placeholder="Write your thoughts about me here."
          ></textarea>
          <BaseSecondaryButton  
            @click="sendMessage"
            :disabled="loading" 
            :buttonName="loading ? 'SENDING...' : 'SEND →'"
            class="min-w-[120px] sm:w-auto p-5 sm:p-7 self-center"
          />
        </div>
      </div>

      <BaseAlert v-if="statusMessage" :type="statusType" :message="statusMessage" />

      <div class="flex flex-col gap-4 items-center justify-center mt-20">
        <p class="font-inter dark:text-white font-bold">Follow Me Here!</p>
        <div class="flex gap-2">
          <BaseExternalLinkButton icon="uil:linkedin" link="https://www.linkedin.com/in/rizqya-adzra/" />
          <BaseExternalLinkButton icon="uil:instagram" link="https://instagram.com/rizqya_adzrazs" />
          <BaseExternalLinkButton icon="uil:twitter" link="https://x.com/luxqya_ra" />
          <BaseExternalLinkButton icon="uil:github" link="https://github.com/rizqya-adzra" />
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

    <BasePopUpCardDetailed
      :visible="isCvPopupVisible"
      @close="isCvPopupVisible = false"
      :title="cvPopup.title"
      :subheader="cvPopup.subheader"
      :image="cvPopup.image"
    />
  </div>
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#imports'

useHead({
  title: 'RA | About Me'
})

const supabaseUrl = useRuntimeConfig().public.supabaseUrl
const supabaseKey = useRuntimeConfig().public.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)

const isCvPopupVisible = ref(false)
const isPopupVisible = ref(false)

const cvPopup = ref({
  title: 'rizqya’s CV',
  subheader: 'CURRICULUM VITAE',
  image: '/images/cv.jpg' 
})

function openCvPopup() {
  isCvPopupVisible.value = true
}

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
    subheader: 'WEBSITE APPLICATIONS',
    description: 'notes_app_description',
    image: 'images/projects/community.png',
    github: 'https://github.com/rizqya-adzra/KomunitasApp-API-Django',
    datetime: '14 January - March 2025',
    category: 'internship',
    status: 'completed'
  },
  {
    title: 'REKAP KETERLAMBATAN',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'keterlambatan_app_description',
    image: 'images/projects/RekapKeterlambatan.png',
    github: 'https://github.com/rizqya-adzra/RekapKeterlambatan-Laravel',
    datetime: '24 November - 22 December 2024',
    category: 'school',
    status: 'completed'
  },
  {
    title: 'PENGADUAN MASYARAKAT',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'pengaduan_masyarakat_app_description',
    image: 'images/projects/Pengaduan.png',
    github: 'https://github.com/rizqya-adzra/PengaduanMasyarakat-Laravel',
    datetime: '10 December - 19 December 2024',
    category: 'internship',
    status: 'completed'
  },
  {
    title: 'BOOKS HOUSE',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'books_app_description',
    image: 'images/projects/LandingpagePelanggan.png',
    github: 'https://github.com/rizqya-adzra/BookApp-Laravel',
    datetime: '17 October - 13 November 2024',
    category: 'school',
    status: 'completed'
  },
  {
    title: 'PORTFOLIO',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'portfolio_app_description',
    image: 'images/projects/Portfolio.png',
    github: 'https://github.com/rizqya-adzra/Portfolio',
    link: 'https://rizqya-portfolio.vercel.app/',
    datetime: '7 Agustus - 15 Agustus 2025',
    category: 'personal',
    status: 'ongoing'
  },
  {
    title: 'NOTES APP',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'notes_app_description',
    image: 'images/projects/NotesApp.png',
    github: 'https://github.com/rizqya-adzra/NotesApp-ReactJs',
    datetime: '8 December 2024',
    category: 'personal',
    status: 'completed'
  }
]

const message = ref('')
const messages = ref([])
const statusMessage = ref('')
const statusType = ref('')
const loading = ref(false)

const lastSentTime = ref(0)
const messageCount = ref(0) 

onMounted(async () => {

  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (!error) {
    messages.value = data
  }
})

async function sendMessage() {
  const now = Date.now()

  if (now - lastSentTime.value < 10000) {
    statusMessage.value = 'Please wait 10 seconds before sending another message.'
    statusType.value = 'warning'
    return
  }

  if (!message.value.trim()) {
    statusMessage.value = 'Message cannot be empty!'
    statusType.value = 'error'
    return
  }

  loading.value = true

  const { error } = await supabase
    .from('messages')
    .insert([{ content: message.value }])

  if (error) {
    console.error(error)
    statusMessage.value = 'Failed to send message.'
    statusType.value = 'error'
  } else {
    statusMessage.value = 'Message sent successfully!'
    statusType.value = 'success'
    message.value = ''

    lastSentTime.value = now
    messageCount.value += 1
    if (process.client) {
      localStorage.setItem('messageCount', messageCount.value.toString())
    }

    const { data } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
    messages.value = data
  }

  loading.value = false
}

const activeIndex = ref(0)
const allButtons = ref([
  { icon: 'mdi:vuejs', tooltip: 'Vue JS', hoverColor: '#40ad36' },
  { icon: 'simple-icons:nuxt', tooltip: 'Nuxt JS', hoverColor: '#40ad36' },
  { icon: 'simple-icons:react', tooltip: 'React JS', hoverColor: '#4585d8' },
  { icon: 'simple-icons:javascript', tooltip: 'Javascript', hoverColor: '#a79e26' },

  { icon: 'simple-icons:php', tooltip: 'PHP', hoverColor: '#5538be' },
  { icon: 'simple-icons:laravel', tooltip: 'Laravel', hoverColor: '#be3838' },
  { icon: 'simple-icons:python', tooltip: 'Python', hoverColor: '#38be8b' },
  { icon: 'simple-icons:django', tooltip: 'Django', hoverColor: '#38be8b' },

  { icon: 'simple-icons:figma', tooltip: 'Figma', hoverColor: '#714AFF' },
  { icon: 'simple-icons:github', tooltip: 'Github', hoverColor: '#11103d' },
  { icon: 'simple-icons:trello', tooltip: 'Trello', hoverColor: '#385cbe' },
  { icon: 'simple-icons:notion', tooltip: 'Notion', hoverColor: '#714AFF' },
])

let intervalId = null

onMounted(() => {
  let i = 0
  intervalId = setInterval(() => {
    activeIndex.value = i
    i = (i + 1) % allButtons.value.length
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
