<template>
  <div>
    <VideoPlay />

    <div class="mt-20 py-20 text-center lg:text-start parallax-section">
      <div class="max-w-[900px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-[16vh] button-group">
          {{ $t('header_1') }}
        </h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6 sm:mt-12">
          <div class="order-2 lg:order-1 ">
            <p class="mb-4 font-inter font-bold text-black dark:text-white text-xl parallax-text">
              {{ $t('subheader_1') }}
            </p>
            <p class="font-inter text-gray-700 dark:text-gray-300 parallax-text">
              {{ $t('description_1') }}
            </p>
            <div class="flex flex-col justify-center sm:flex-row lg:justify-normal gap-5 mt-10 button-group">
              <BaseSecondaryButton buttonName="Back end" @click="openPopup('backend')" />
              <BaseSecondaryButton buttonName="Fullstack" @click="openPopup('fullstack')" />
              <BaseSecondaryButton buttonName="Front end" @click="openPopup('frontend')" />
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <BaseImageButtonCard imageSrc="images/bebek.jpeg" class="parallax-img" />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 parallax-section py-20 mx-auto px-4 sm:px-6 lg:px-14">
      <div class="bg-group relative max-w-[700px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14 py-20 bg-secondary dark:bg-dark_secondary rounded-3xl">
        <div 
          class="absolute bottom-0 left-0 w-40 h-40 bg-white dark:bg-dark_tertiary z-20 hidden lg:block" 
          style="clip-path: polygon(0 100%, 200% 200%, 0 0);">
        </div>
        <h1 class="font-bebas text-primary text-7xl md:text-8xl lg:text-[16vh] text-center parallax-text">{{ $t('header_2') }}</h1>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-start mt-12">
          <div>
            <p class="parallax-text mb-4 font-inter font-bold dark:text-white text-center lg:text-start">{{ $t('subheader_2') }}</p>
            <div class="flex flex-col gap-4 button-group">
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal button-group">
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(0, 4)"
                  :key="index"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === index"
                />
              </div>
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal button-group"> 
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
            <p class="parallax-text mb-4 font-inter font-bold dark:text-white text-center lg:text-start">{{ $t('subheader_2.1') }}</p>
            <div class="flex flex-col gap-4">
              <div class="flex flex-wrap gap-3 justify-center lg:justify-normal button-group"> 
                <BaseTertiaryButton
                  v-for="(btn, index) in allButtons.slice(8, 12)"
                  :key="index + 8"
                  :icon="btn.icon"
                  :tooltip="btn.tooltip"
                  :hoverColor="btn.hoverColor"
                  :isHovered="activeIndex === (index + 8)"
                />
              </div>
              <p class="parallax-text font-inter text-gray-500 dark:text-gray-300 text-center lg:text-start mt-3">{{ $t('description_2') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 parallax-section">
      <div class="max-w-[750px] lg:max-w-[1350px] mx-auto">
        <h1 class="parallax-text font-bebas text-7xl md:text-8xl lg:text-[16vh] text-primary text-center">{{ $t('experience') }}</h1>
       <div class="bg-group flex justify-center">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-5 px-4 sm:px-6 lg:px-14">
            <div class="p-10 max-w-[500px] mx-auto bg-secondary dark:bg-dark_secondary rounded-3xl">
              <div class="flex gap-2 items-center justify-center">
                <div class="parallax-title bg-primary rounded-full w-14 h-14 flex items-center justify-center mr-2">
                  <Icon name="uil:graduation-cap" class="text-white text-4xl" />
                </div>
                <p class="parallax-title font-inter dark:text-white font-bold text-xl text-center">Education</p>
              </div>
              <div class="flex gap-10 items-center justify-center md:justify-between mt-16">
                <div class="button-group flex items-start gap-10">
                  <div>
                    <p class="font-inter dark:text-white text-start font-bold">SMK WIKRAMA BOGOR</p>
                    <p class="font-inter dark:text-tertiary text-start text-xs sm:text-sm">Software Development Major</p>
                  </div>
                  <p class="bg-white dark:bg-dark_tertiary dark:text-tertiary p-2 rounded-xl font-bold font-inter text-primary">2023-2026</p>
                </div>
              </div>
            </div>
            <div class="p-10 max-w-[500px] mx-auto bg-secondary dark:bg-dark_secondary rounded-3xl">
              <div class="flex gap-2 items-center justify-center">
                <div class="parallax-title bg-primary rounded-full w-14 h-14 flex items-center justify-center mr-2">
                  <Icon name="uil:briefcase-alt" class="text-white text-4xl" />
                </div>
                <p class="parallax-title font-inter dark:text-white font-bold text-xl text-center">Work Experience</p>
              </div>
              <div class="flex gap-10 items-center justify-center md:justify-between mt-16">
                <div class="button-group flex flex-col gap-5">
                  <div class="flex items-start gap-10 justify-between">
                    <div>
                      <p class="font-inter dark:text-white text-start font-bold">PT. Median Talenta Raya</p>
                      <p class="font-inter dark:text-tertiary text-start text-xs sm:text-sm">Intern - Back End Developer</p>
                    </div>
                    <p class="bg-white dark:bg-dark_tertiary dark:text-tertiary p-2 rounded-xl font-bold font-inter text-primary">2025 Jan-Jun</p>
                  </div>
                  <div class="flex items-center gap-10 justify-between">
                    <div>
                      <p class="font-inter dark:text-white text-start font-bold">Freelancer</p>
                      <p class="font-inter dark:text-tertiary text-start text-xs sm:text-sm">Full Stack Developer</p>
                    </div>
                    <p class="bg-white dark:bg-dark_tertiary dark:text-tertiary p-2 rounded-xl font-bold font-inter text-primary">2025 - Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="button-group-x flex justify-center items-center mt-5">
          <BaseSpecialButton 
            buttonName="View More" 
            icon="uil:arrow-up-right" 
            :onClick="() => navigateTo('/experience')" 
          />
        </div>
      </div>
    </div>

    <div class="py-20 parallax-section">
      <div class="max-w-[900px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-start">
            <h1 class="parallax-text font-bebas text-primary text-7xl md:text-8xl lg:text-[16vh]">{{ $t('header_3') }}</h1>
            <p class="parallax-text lg:mb-4 font-inter font-bold text-black dark:text-white lg:my-3 mt-6">{{ $t('subheader_3') }}</p>
            <div class="parallax-title hidden lg:block">
              <BasePrimaryButton buttonName="Git Hub Repository" link="https://github.com/rizqya-adzra?tab=repositories" />
            </div>
          </div>
          <div class="parallax-carousel flex flex-col gap-10 px-4 sm:px-10 lg:px-14">
            <BaseVerticalCarousel :items="carouselItems" />
            <div class="block lg:hidden">
              <BasePrimaryButton buttonName="Git Hub Repository" link="https://github.com/rizqya-adzra?tab=repositories" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-section py-16 duration-500 px-4 sm:px-6 lg:px-1 mt-32">
      <div class="bg-group relative max-w-[700px] lg:max-w-[1350px] bg-secondary dark:bg-dark_secondary rounded-3xl py-16 w-full mx-auto px-4 sm:px-6 lg:px-14">
        <div 
          class="absolute bottom-0 left-0 w-40 h-40 bg-white dark:bg-dark_tertiary z-20 hidden md:block" 
          style="clip-path: polygon(0 100%, 200% 200%, 0 0);">
        </div>
        <div
          class="absolute top-0 right-0 w-40 h-40 bg-white dark:bg-dark_tertiary z-20 duration-500 hidden lg:block"
          style="clip-path: polygon(0 100%, 100% 100%, 0 0);">
        </div>
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div class="text-center lg:text-start">
            <h1 class="parallax-text font-bebas dark:text-white text-7xl md:text-8xl lg:text-[16vh]">
              Interested to Hire Me?
            </h1>
            <p class="button-group font-inter dark:text-gray-300 mt-2">
              Please take a look at my CV.
            </p>
          </div>
           <div class="parallax-carousel flex justify-center items-center lg:-mt-32 mt-10 mt-">
            <BaseSpecialButton
              buttonName="view cv here !"
              @click="openCvPopup"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="parallax_section py-20 parallax-section mt-10">
      <div class="max-w-[700px] lg:max-w-[1020px] w-full mx-auto px-4 sm:px-6 lg:px-14">
        <h1 class="parallax-text font-bebas text-primary text-7xl md:text-8xl lg:text-[16vh] text-center">
          {{ $t('header_4') }}
        </h1>
        <div class="button-group flex flex-col sm:flex-row items-center mt-12 gap-4">
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

      <div class="button-group flex flex-col gap-4 items-center justify-center mt-20">
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  image: '/images/rizqya_cv.jpg' 
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
    title: 'Community App',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'community_app_description',
    image: 'images/projects/community.png',
    github: 'https://github.com/rizqya-adzra/KomunitasApp-API-Django',
    datetime: '14 January - March 2025',
    category: 'internship',
    status: 'completed'
  },
  {
    title: 'Rekap Keterlambatan',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'keterlambatan_app_description',
    image: 'images/projects/RekapKeterlambatan.png',
    github: 'https://github.com/rizqya-adzra/RekapKeterlambatan-Laravel',
    datetime: '24 November - 22 December 2024',
    category: 'school',
    status: 'completed'
  },
  {
    title: 'Flight Booking Design',
    subheader: 'UI/UX Design',
    description: 'flight_design_description',
    image: 'images/projects/FlightBooking.png',
    datetime: '1 Februari 2025',
    link: 'https://www.figma.com/design/D3lO1PSAbFmmEyJrOjpDGR/Flight-Booking-App?node-id=35-961&p=f&t=mbkP1QDsKgO5jxyJ-0',
    category: 'personal',
    status: 'ongoing'
  },
  {
    title: 'Portfolio',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'portfolio_app_description',
    image: 'images/projects/portofolio.png',
    github: 'https://github.com/rizqya-adzra/Portfolio',
    link: 'https://rizqya-portfolio.vercel.app/',
    datetime: '7 Agustus - 15 Agustus 2025',
    category: 'personal',
    status: 'completed'
  },
  {
    title: 'Robaloxs Design',
    subheader: 'UI/UX Design',
    description: 'robaloxs_design_description',
    image: 'images/projects/Robaloxs.png',
    link: 'https://www.figma.com/design/YrvkCwbDUkhsLMnLP9tyYB/Robaloxs?node-id=0-1&p=f&t=sFNaTOU9znxnwQO2-0',
    datetime: '20 September 2025',
    category: 'personal',
    status: 'ongoing'
  },
  {
    title: 'Pengaduan Masyarakat',
    subheader: 'WEBSITE APPLICATIONS',
    description: 'pengaduan_masyarakat_app_description',
    image: 'images/projects/Pengaduan.png',
    github: 'https://github.com/rizqya-adzra/PengaduanMasyarakat-Laravel',
    datetime: '10 December - 19 December 2024',
    category: 'internship',
    status: 'completed'
  },
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

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % allButtons.value.length
  }, 1500);

  if (process.client) {
  document.querySelectorAll(".parallax-section").forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top+=520",
        scrub: 1,
      },
    });

    section.querySelectorAll("[data-speed] :scope > :not(.popup-container)").forEach((elem) => {
      const speed = parseFloat(elem.dataset.speed) || 1;
      tl.to(
        elem,
        {
          y: () => -120 * speed, 
          opacity: 1,
          ease: "power1.out",
        },
        0
      );
    });

    const mm = gsap.matchMedia()

    mm.add("(max-width: 768px)", () => {
      tl.to(section.querySelectorAll(".parallax-img"), { y: -30, opacity: 1, ease: "power1.out" }, 0.2)
        .to(section.querySelectorAll(".parallax-carousel"), { y: -30, opacity: 1, ease: "power1.out" }, 0.5)
        .to(section.querySelectorAll(".parallax-text"), { y: -30, opacity: 1, ease: "power2.out" }, 0.3)
        .to(section.querySelectorAll(".button-group"), { y: -30, opacity: 1, ease: "power3.out" }, 0.4)
        .to(section.querySelectorAll(".button-group-x"), { y: -30, x: 0, opacity: 1, ease: "power3.out" }, 0.3)
        .to(section.querySelectorAll(".parallax-title"), { y: -10, opacity: 1, ease: "power3.out" }, 0.3)
        .to(section.querySelectorAll(".bg-group"), { y: -30, opacity: 1, ease: "power4.out" }, 0.1)
    })

    mm.add("(min-width: 769px)", () => {
      tl.to(section.querySelectorAll(".parallax-img"), { y: -180, opacity: 1, ease: "power1.out" }, 0.2)
        .to(section.querySelectorAll(".parallax-carousel"), { y: 80, opacity: 1, ease: "power1.out" }, 0.5)
        .to(section.querySelectorAll(".parallax-text"), { y: -50, opacity: 1, ease: "power2.out" }, 0.3)
        .to(section.querySelectorAll(".button-group"), { y: -33, opacity: 1, ease: "power3.out" }, 0.4)
        .to(section.querySelectorAll(".button-group-x"), { y: -50, x: 300, opacity: 1, ease: "power3.out" }, 0.3)
        .to(section.querySelectorAll(".parallax-title"), { y: -20, opacity: 1, ease: "power3.out" }, 0.3)
        .to(section.querySelectorAll(".bg-group"), { y: -60, opacity: 1, ease: "power4.out" }, 0.1)
    })
  });
}

});
</script>

<style>
.parallax-img,
.parallax-text,
.button-group,
.bg-group {
  opacity: 0;
  transform: translateY(20px); 
}
[data-speed] {
  will-change: transform;
}
.popup .parallax-carousel {
  transform: none !important;
  opacity: 1 !important;
}

</style>