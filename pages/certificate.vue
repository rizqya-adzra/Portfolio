<template>
  <div class="py-16">
    <div class="w-[1200px] mx-auto">
      <h1 class="font-bebas text-9xl text-[#714AFF] mb-5">{{ $t('certificate') }}</h1>

      <div class="flex items-end justify-between mb-5 gap-3">
        <p class="dark:text-gray-300 text-gray-600 font-bold font-inter duration-500">
          Certifications Total: {{ filteredItems.length }}
        </p>

        <div class="flex gap-2">
          <BaseDropdown
            v-model="filterCompany"
            :sortOptions="companyOptions"
          />
  
          <BaseDropdown
            v-model="sortBy"
            :sortOptions="sortOptions"
          />
        </div>
      </div>

      <BaseMasonryGrid :items="sortedItems" />
    </div>
  </div>
</template>

<script setup>
const sortBy = ref('')
const filterCompany = ref('all')

const sortOptions = [
  { label: 'Name', value: 'title' },
  { label: 'Date', value: 'datetime' },
]

const dataItems = [
  {
    id: 1,
    image: '/images/certificates/react.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR MEMBUAT APLIKASI WEB DENGAN REACT',
    description: 'Ini adalah deskripsi dari item pertama.',
  },
  {
    id: 10,
    image: '/images/certificates/Sertifikasi Rizqya.jpg',
    company: 'Median Talenta Raya',
    datetime: '06/2025',
    title: 'INTERNSHIP CERTIFICATION',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    image: '/images/certificates/belajar dasar ai.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR DASAR AI',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    image: '/images/certificates/belajardasarpemrogramanjs-dicoding.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR DASAR PEMROGRAMAN JAVASCRIPT',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 11,
    image: '/images/certificates/edusoft.jpg',
    company: 'Edusoft',
    datetime: '2024',
    title: 'ENGLISH DISCOVERIES',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    image: '/images/certificates/aws cloud.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'CLOUD PRACTITIONER ESSENTIALS (BELAJAR DASAR AWS CLOUD)',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 5,
    image: '/images/certificates/belajarmembuatfrontendweb-dicoding.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR MEMBUAT FRONT END WEB UNTUK PEMULA',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 6,
    image: '/images/certificates/c.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'MEMULAI PEMROGRAMAN DENGAN C',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 7,
    image: '/images/certificates/prinsip pemrograman solid.png',
    company: 'Dicoding',
    datetime: '12/2024 - 12/2027',
    title: 'BELAJAR PRINSIP PEMROGRAMAN SOLID',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 8,
    image: '/images/certificates/ta.png',
    company: 'Kominfo',
    datetime: '12/2024 - 12/2027',
    title: 'BASIC CYBER SECURITY UNTUK SMA/SEDERAJAT',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
  {
    id: 9,
    image: '/images/certificates/unity.png',
    company: 'Unity',
    datetime: '12/2024 - 12/2027',
    title: 'UNITY ESSENTIALS PATHWAY',
    description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
  },
]

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
