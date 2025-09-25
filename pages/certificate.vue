<template>
  <div class="py-16">
    <div class="max-w-[700px] lg:max-w-[1350px] w-full mx-auto px-4 sm:px-6 lg:px-14">
      <h1 class="font-bebas text-7xl md:text-8xl lg:text-9xl text-primary mb-5">
        {{ $t('certificate') }}
      </h1>

      <div
        class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-5 gap-3"
      >
        <p class="dark:text-gray-300 text-gray-600 font-bold font-inter duration-500">
          Certifications Total: {{ filteredItems.length }}
        </p>

        <div class="flex flex-wrap gap-2">
          <BaseDropdown
            v-model="filterCompany"
            :sortOptions="companyOptions"
            class="min-w-[150px]"
          />

          <BaseDropdown
            v-model="sortBy"
            :sortOptions="sortOptions"
            class="min-w-[150px]"
          />
        </div>
      </div>

      <BaseMasonryGrid
        :items="sortedItems"
        @clickItem="openPopup"
      />
    </div>
  </div>

  <BasePopUpCardDetailed
    :visible="IsPopupVisible"
    :title="popupItem?.title || ''"
    :description="$t(popupItem?.description || 'default_description')"
    :image="popupItem?.image || ''"
    :image_2="popupItem?.image_2 || ''"
    :image_3="popupItem?.image_3 || ''"
    :link="popupItem?.link || ''"
    :datetime="popupItem?.datetime || ''"
    @close="IsPopupVisible = false"
  />
</template>

<script setup>
const sortBy = ref('')
const filterCompany = ref('all')
const IsPopupVisible = ref(false)
const popupItem = ref(null)

useHead({
  title: 'RA | Certificate'
})

const sortOptions = [
  { label: 'Name', value: 'title' },
  { label: 'Date', value: 'datetime' },
]

const dataItems = [
  {
    id: 1,
    image: '/images/certificates/react.png',
    image_2: '/images/certificates/react_2.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR MEMBUAT APLIKASI WEB DENGAN REACT',
    description: 'react_description',
    link: 'https://www.dicoding.com/certificates/N9ZOY1K8YPG5',
  },
  {
    id: 10,
    image: '/images/certificates/Sertifikasi Rizqya.jpg',
    company: 'Median Talenta Raya',
    datetime: '06/2025',
    title: 'INTERNSHIP CERTIFICATION',
    description: 'internship_description',
  },
  {
    id: 2,
    image: '/images/certificates/belajar dasar ai.png',
    image_2: '/images/certificates/belajar dasar ai_2.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR DASAR AI',
    description: 'ai_fundamental_description',
  },
  {
    id: 3,
    image: '/images/certificates/belajardasarpemrogramanjs-dicoding.png',
    image_2: '/images/certificates/belajardasarpemrogramanjs-dicoding_2.png',
    image_3: '/images/certificates/belajardasarpemrogramanjs-dicoding_3.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR DASAR PEMROGRAMAN JAVASCRIPT',
    description: 'basic_js_description',
  },
  {
    id: 11,
    image: '/images/certificates/edusoft.jpg',
    company: 'Edusoft',
    datetime: '2024',
    title: 'ENGLISH DISCOVERIES',
    description: 'english_discoveries_description',
  },
  {
    id: 4,
    image: '/images/certificates/aws cloud.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'CLOUD PRACTITIONER ESSENTIALS (BELAJAR DASAR AWS CLOUD)',
    description: 'aws_cloud_description',
  },
  {
    id: 5,
    image: '/images/certificates/belajarmembuatfrontendweb-dicoding.png',
    image_2: '/images/certificates/belajarmembuatfrontendweb-dicoding_2.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR MEMBUAT FRONT END WEB UNTUK PEMULA',
    description: 'front_end_description',
  },
  {
    id: 5,
    image: '/images/certificates/Screenshot 2025-09-17 085203.png',
    company: 'REDY',
    datetime: '12/2024 - 12/2027',
    title: 'IGDX Career Seminar',
    description: 'front_end_description',
  },
  {
    id: 5,
    image: '/images/certificates/belajar-dasar.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'Belajar Dasar Pemrograman Web',
    description: 'front_end_description',
  },
  {
    id: 6,
    image: '/images/certificates/c.png',
    image_2: '/images/certificates/c_2.png',
    image_3: '/images/certificates/c_3.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'MEMULAI PEMROGRAMAN DENGAN C',
    description: 'c_description',
  },
  {
    id: 7,
    image: '/images/certificates/prinsip pemrograman solid.png',
    image_2: '/images/certificates/prinsip pemrograman solid_2.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR PRINSIP PEMROGRAMAN SOLID',
    description: 'solid_coding_description',
  },
  {
    id: 8,
    image: '/images/certificates/ta.png',
    image_2: '/images/certificates/ta_2.png',
    image_3: '/images/certificates/ta_3.png',
    company: 'Kominfo',
    datetime: '12/2024 - 12/2027',
    title: 'BASIC CYBER SECURITY UNTUK SMA/SEDERAJAT',
    description: 'basic_cyber_description',
  },
  {
    id: 9,
    image: '/images/certificates/unity.png',
    company: 'Unity',
    datetime: '12/2024 - 12/2027',
    title: 'UNITY ESSENTIALS PATHWAY',
    description: 'unity_description',
  },
]

function openPopup(item) {
  popupItem.value = item
  IsPopupVisible.value = true
}

const companyOptions = computed(() => {
  const companies = Array.from(new Set(dataItems.map(item => item.company)))
  return [
    { label: 'All Companies', value: 'all' },
    ...companies.map(c => ({ label: c, value: c }))
  ]
})

const filteredItems = computed(() => {
  if (filterCompany.value === 'all') return dataItems
  return dataItems.filter(item => item.company === filterCompany.value)
})

const sortedItems = computed(() => {
  const items = [...filteredItems.value]
  if (sortBy.value === 'title') {
    return items.sort((a, b) => a.title.localeCompare(b.title))
  }
  if (sortBy.value === 'datetime') {
    return items.sort((a, b) => new Date(a.datetime.split(' - ')[0]) - new Date(b.datetime.split(' - ')[0]))
  }
  return items
})
</script>
