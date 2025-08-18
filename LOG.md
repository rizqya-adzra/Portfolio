[RA] Update 2025-08-07 v1.0.0
- Menginstall Projek dan Dependency
- Menambahkan folder Components, Layouts, Pages, Utils, dan i18n

[RA] Update 2025-08-07 v1.0.1
- Menambahkan component AppHeader dan AppFooter 
- Menambahkan component base yang berisi PrimaryButton, SecondaryButton, TertiaryButton, NavigationButton
- Menambahkan page index dan certificate

[RA] Update 2025-08-08 v1.0.2
- Memperbaiki tampilan component TertiaryButton agar bisa memakai icon
- Menginstall google-fonts dan menambahkan font Inter, Jaro, dan Bebas Neue lihat di tailwind.config.js dan nuxt.config.js
- Menambahkan component video infinite untuk index.vue
- Memperbaiki typo Deustch menjadi Deutsch di nuxt.config.js

[RA] Update 2025-08-08 v1.0.3
- Memperbaiki tampilan component TertiaryButton agar bisa memakai icon
- Menginstall google-fonts dan menambahkan font Inter, Jaro, dan Bebas Neue lihat di tailwind.config.js dan nuxt.config.js
- Menambahkan component video infinite untuk index.vue
- Memperbaiki typo Deustch menjadi Deutsch di nuxt.config.js
- Menambahkan Header Tentang Saya
- Mengubah TertiaryButton menjadi ExternalLinkButton
- Mengubah tampilan TertiaryButton dengan tambahan tooltip
- Menambahkan Header Kemampuan

[RA] Update 2025-08-09 v1.0.4
- Memperbaiki PrimaryButton, SecondaryButton, TertiaryButton, AppFooter, AppHeader, VideoPlay, dan LanguageSwitch
- Menambahkan PopUpCard untuk header Tentang Saya
- Menambahkan kalimat untuk diterjemahkan di de.json, en.json, dan id.json
- Mengubah tampilan AppHeader menjadi putih dan hitam tergantung dengan color-mode yang digunakan

[RA] Update 2025-08-09 v1.0.5
- Menambahkan subpage Projects
- Menambahkan Vertical Carousel
- Menambahkan SpecialButton untuk subpage Hire Me
- Menambahkan subpage Sent Me Anything dengan text area dan ExternalLinkButton

[RA] Update 2025-08-10 v1.0.6
- Menambahkan PopUpCardDetailed untuk VerticalCarousel
- Menginstall @tailwindcss/line-clamp (npm install @tailwindcss/line-clamp)
- Menambahkan PopUpCardDetailed untuk menampilkan CV
- Menambahkan kalimat di Project untuk diterjemahkan di de.json, en.json, dan id.json
- Menambahkan props link di PrimaryButton 

[RA] Update 2025-08-10 v1.0.7
- Menginstall @supabase/supabase-js (npm install @supabase/supabase-js)
- Menambahkan .env untuk supabase
- Menambahkan sekaligus menyambungkan form yang ada di index.vue ke table message di supabase
- Menambahkan Alert untuk form

[RA] Update 2025-08-11 v1.0.8
- Memeperbaiki Alert pada message ketika dikirimkan ke supabase
- Memperbaiki warna VerticalCarousel berserta parent dan childnya
- Menambahkan assets/scrollbar.css untuk mengubah desain default scrollbar dan membuatnya dinamis untuk nuxtjs colormode

[RA] Update 2025-08-11 v1.1.0
- Menambahkan content di page certificate.vue
- Memperbaiki padding untuk Abilities subpage
- Mengubah ukuran semua title di subpage menjadi text-9xl 
- Menambahkan Component MansoryGrid 
- Menambahkan filter atau sortir berdasarkan nama, datetime, dan nama company
- Memperbaiki warna card untuk light mode di VerticalCarousel
- Menambahkan Component Dropdown untuk sortir sertifikasi
- Mengubah ukuran PrimaryKey yang tadinya text-xl menjadi text-2xl
- Mengubah ukuran tooltip di supbage Abilities yang tadinya memakai px menjadi vh

[RA] Update 2025-08-11 v1.1.1
- Menambahkan Component PopUpCardDetailed di page certificate.vue dan menghubungkannya dengan MasonryGrid
- Menambahkan props image_2 dan image_3 di Component PopUpCardDetailed

[RA] Update 2025-08-12 v1.2.0
- Menambahkan content di page experience.vue
- Menambahkan Component TimelineItem untuk page experience.vue

[RA] Update 2025-08-12 v1.2.1
- Menambahkan Responsive di seluruh halaman dan hampir seluruh Component
- Menambahkan Title di seluruh page
- Memperbaiki Dark and Light Mode Toggle yang awalnya tidak sinkron dengan pilihan color-mode user, menjadi sinkron dengan menyambungkannya dengan onMounted

[RA] Update 2025-08-17 v1.2.2
- Menambahkan Data untuk pengalaman dan sertifikat

[RA] Update 2025-08-17 v1.3.0
- Menambahkan page article.vue
