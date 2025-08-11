<template>
  <div>
    <VideoPlay />

    <div class="py-24">
      <div class="w-[1200px] mx-auto">
        <h1 class="font-bebas text-[#714AFF] text-9xl">{{ $t('header_1') }}</h1>
        <div class="grid grid-cols-2 gap-12 items-end mt-12">
          <div>
            <p class="mb-4 font-inter font-bold text-black dark:text-white">{{ $t('subheader_1') }}</p>
            <p class="font-inter text-gray-700 dark:text-gray-300">{{ $t('description_1') }}</p>
  
            <div class="flex gap-5 mt-5">
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
        <h1 class="font-bebas text-white text-9xl text-center">{{ $t('header_2') }}</h1>
        <div class="grid grid-cols-2 gap-12 items-start mt-12">
          <div>
            <p class="mb-4 font-inter font-bold text-white">{{ $t('subheader_2') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex gap-3">
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(0, 4)"
                  :key="index"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === index"
                />
              </div>
              <div class="flex gap-3">
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(4, 8)"
                  :key="index+4"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === (index+4)"
                />
              </div>
            </div>
          </div>
          <div class="text-start">
            <p class="mb-4 font-inter font-bold text-white">{{ $t('subheader_2.1') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex gap-3 justify-start">
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(8, 12)"
                  :key="index+8"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === (index+8)"
                />
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
            <h1 class="font-bebas text-[#714AFF] text-9xl">{{ $t('header_3') }}</h1>
            <p class="mb-4 font-inter font-bold text-black dark:text-white my-3">{{ $t('subheader_3') }}</p>
            <BasePrimaryButton buttonName="Git Hub Repository" link='https://github.com/rizqya-adzra?tab=repositories' />
          </div>
          <div>
            <BaseVerticalCarousel :items="carouselItems"/>
            <div class="flex items-center gap-6 text-gray-700 dark:text-gray-300 text-sm font-medium select-none mt-5">
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#E63946] inline-block"></span>
                Internship
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#6A4C93] inline-block"></span>
                School
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#1D3557] inline-block"></span>
                Personal
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#2A9D8F] inline-block"></span>
                Completed
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full w-5 h-5 bg-[#F4A261] inline-block"></span>
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
          <BaseSpecialButton buttonName="view cv here !" @click="openCvPopup" />
        </div>
      </div>
    </div>

    <div class="py-24" style="background: linear-gradient(to bottom, #714AFF, #555555);">
      <div class="w-[1000px] mx-auto">
        <h1 class="font-bebas text-white text-9xl text-center mt-7">{{ $t('header_4') }}</h1>
        <div class="flex items-center mt-12">
          <textarea
            v-model="message"
            class="font-inter flex-grow resize-none py-2 rounded-3xl px-6 text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-[#f7efe7] text-base leading-[64px]"
            placeholder="Write your thoughts about me here."
            rows="1"
            style="vertical-align: middle;"
          ></textarea>
          <button
            @click="sendMessage"
            :disabled="loading"
            class="font-bebas ml-4 bg-black text-white rounded-3xl px-6 py-7 text-3xl hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {{ loading ? 'SENDING...' : 'SEND →' }}
          </button>
        </div>
        <div>
          <p class="font-inter text-gray-400 text-end mt-2 ">{{ $t('subheader_4') }}</p>
        </div>
      </div>

      <BaseAlert 
        v-if="statusMessage" 
        :type="statusType" 
        :message="statusMessage" 
      />

      <div class="flex gap-3 items-center justify-center mt-20">
        <p class="font-inter text-white font-bold">Follow me here -></p>
        <BaseExternalLinkButton icon="uil:linkedin" link="https://www.linkedin.com/in/rizqya-adzra/" />
        <BaseExternalLinkButton icon="uil:instagram" link="https://instagram.com/rizqya_adzrazs" />
        <BaseExternalLinkButton icon="uil:twitter" link="https://x.com/luxqya_ra" />
        <BaseExternalLinkButton icon="uil:github" link="https://github.com/rizqya-adzra" />
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
