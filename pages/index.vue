<script setup lang="ts">
import BannerSlider from "~/components/index/BannerSlider.vue";
import CatalogDirections from "~/components/index/CatalogDirections.vue";
import BlockTitle from "~/components/shared/BlockTitle.vue";
import CategoriesCards from "~/components/index/CategoriesCards.vue";
import ProductCarousel from "~/components/shared/ProductCarousel.vue";
import {useGlobalStore} from "~/store/globalStore";
import {useContentStore} from "~/store/contentStore";

const globalStore = useGlobalStore(),
    contentStore = useContentStore(),
    homeContent = computed(() => contentStore.contentData?.data),
    productsFeatured = computed(() => contentStore.contentData?.products_featured)

await useAsyncData(() => contentStore.content('home'))

useHead({
  title: () => `${contentStore.contentData?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${contentStore.contentData?.data.seo_description}`}
  ]
})

</script>

<template>
  <div class="home-page">
    <banner-slider/>

    <catalog-directions/>

    <block-title title="Ürün Kategorileri"/>

    <categories-cards/>

    <block-title title="Öne Çıkan Ürünler"/>

    <product-carousel :products="productsFeatured"/>

    <v-row
        v-if="homeContent.title"
        class="d-flex justify-center">
      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-card-title>{{ homeContent.title }}</v-card-title>
          <v-card-text v-html="homeContent.content"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.home-page {
  @media only screen and (max-width: 767px) {
    padding-top: 60px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>