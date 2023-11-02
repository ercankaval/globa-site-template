<script setup lang="ts">
import CategoryCard from "~/components/shared/CategoryCard.vue";
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import {useGlobalStore} from "~/store/globalStore";
import {useContentStore} from "~/store/contentStore";
import {useCategoryStore} from "~/store/categoryStore";

const globalStore = useGlobalStore(),
    contentStore = useContentStore(),
    categoryStore = useCategoryStore(),
    categoriesContent = computed(() => contentStore.contentData?.data),
    categoriesList = computed(() => globalStore.categories),
    breadCrumbs = ref([
      {
        title: 'Anasayfa',
        disabled: false,
        link: '/',
      },
      {
        title: 'Ürünler',
        disabled: true,
        link: '/urunler',
      }
    ])

await useAsyncData(() => contentStore.content('categories'))

useHead({
  title: () => `${contentStore.contentData?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${contentStore.contentData?.data.seo_description}`}
  ]
})

const testApi = async () => {
  categoryStore.testApi('deneme')
      .then((res) => {
        console.log('r', res)
      })
      .catch((err) => {
        console.log('e', err)
      })
}

</script>

<template>
  <v-container fluid="" class="product-page">
    <block-title title="Ürünler"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-btn @click="testApi">testApi</v-btn>

    <v-row class="main-row">
      <v-col
          v-for="(item, i) in categoriesList"
          :key="i"
          md="3"
          cols="12"
      >
        <category-card :data="item"/>
      </v-col>
    </v-row>

    <v-row
        v-if="categoriesContent.title"
        class="d-flex justify-center">
      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-card-title>{{ categoriesContent.title }}</v-card-title>
          <v-card-text v-html="categoriesContent.content"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.product-page {
  @media only screen and (max-width: 767px) {
    padding-top: 60px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .main-row {
    margin-top: 2rem;

    @media only screen and (max-width: 767px) {
      margin-top: 0;
    }
  }
}
</style>