<script setup lang="ts">
import CategoryCard from "~/components/shared/CategoryCard.vue";
import {useGlobalStore} from "~/store/globalStore";

const items = ref([
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/2023-promosyon-ajanda-modelleri.jpg',
    title: '2023 Promosyon Ajanda',
    slug: '/iletisim'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/2023-promosyon-termos-modelleri.jpg',
    title: 'Promosyon Termos',
    slug: '2'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/2023-promosyon-kupa-bardak-modelleri.jpg',
    title: 'Promosyon Kupa Bardak',
    slug: '3'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-defter-modelleri.jpg',
    title: 'Promosyon Tarihsiz Defterler',
    slug: '4'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-organizer-modelleri.jpg',
    title: 'Organizer',
    slug: '5'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/plastik-kalemler-05272022.jpg',
    title: 'Plastik Kalem',
    slug: '6'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-metal-kalem-modelleri.jpg',
    title: 'Metal Kalem',
    slug: '7'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/anahtarliklar-28102022.jpg',
    title: 'Anahtarlık',
    slug: '8'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/vip-promosyon-urunleri-kapak.jpg',
    title: 'Lüks / VIP Promosyon Ürünleri',
    slug: '9'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/powerbank-05272022.jpg',
    title: 'Powerbank',
    slug: '10'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/promosyon-oto-kokusu-kapak.jpg',
    title: 'Promosyon Oto Kokuları',
    slug: '12'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-kalem-modelleri.jpg',
    title: 'Promosyon Kalem',
    slug: '13'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/M7o0ip0yZk97nh6p-selale-masa-takvimi-12991.jpg',
    title: 'Promosyon Takvim',
    slug: '14'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/matbaa-urunleri-05272022.jpg',
    title: 'Matbaa Promosyon Ürünleri',
    slug: '15'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/2023-promosyon-usb-bellek-modelleri.jpg',
    title: 'USB Bellek',
    slug: '16'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/teknolojik-urunler-05272022.jpg',
    title: 'Teknolojik Ürünler',
    slug: '17'
  },
  {
    column: 4,
    image: 'https://cdn.promosyonik.com/2023-promosyon-kursun-kalem-modelleri.jpg',
    title: 'Kurşun Kalem',
    slug: '18'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-mouse-pad-modelleri.jpg',
    title: 'Mouse Pad',
    slug: '19'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/2023-promosyon-bardak-altligi-modelleri.jpg',
    title: 'Bardak Altlığı',
    slug: '20'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/otel-promosyon-urunleri-kategori.jpg',
    title: 'Otel Promosyon Ürünleri',
    slug: '21'
  },
  {
    column: 3,
    image: 'https://cdn.promosyonik.com/emlak-promosyon.jpg',
    title: 'Emlakçı Promosyon Ürünleri',
    slug: '22'
  }
])

const globalStore = useGlobalStore(),
    categoriesList = computed(() => globalStore.categories)

</script>

<template>
  <v-row>
    <v-col
        v-for="(item, i) in categoriesList"
        :key="i"
        md="3"
        cols="12"
    >
    <category-card :data="item"/>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">

</style>