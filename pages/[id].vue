<script setup lang="ts">
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import ProductCard from "~/components/shared/ProductCard.vue";
import {useGlobalStore} from "~/store/globalStore";
import {useCategoryStore} from "~/store/categoryStore";

const categoryStore = useCategoryStore(),
    globalStore = useGlobalStore(),
    categoriesList = computed(() => globalStore.categories),
    productList = computed(() => categoryStore.pageData?.products),
    subCategoryList = computed(() => categoryStore.pageData?.sub_categories),
    categoryData = computed(() => categoryStore.pageData?.data),
    breadCrumbs = computed(() => categoryStore.pageData?.breadcrumbs),
    pageLink = computed(() => useRoute().params.id)

const {data} = await useAsyncData(() => categoryStore.categoryDetails(String(pageLink.value)), {watch: [pageLink]})

useHead({
  title: () => `${data.value?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${data.value?.data.seo_description}`}
  ]
})

</script>

<template>
  <v-container fluid="" class="product-page">

    <block-title :title="categoryData.title"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-row class="main-row">
      <v-col cols="12" v-if="categoryData.abstract">
        <v-card-text
            v-html="categoryData.abstract"></v-card-text>
      </v-col>

      <v-col md="3" cols="12">
        <v-list class="sidebar-menu">
          <v-list-item
              v-for="(item, i) in categoriesList"
              :key="i"
              :value="item"
          >
            <nuxt-link :to="item.link" :title="item.title">
              <v-icon icon="mdi-chevron-right"/>
              {{ item.title }}
            </nuxt-link>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-slide-group
              v-if="subCategoryList.length"
              show-arrows
          >
            <v-slide-group-item
                v-for="(item, i) in subCategoryList"
                :key="i"
            >
              <nuxt-link
                  class="ma-2"
                  :class="{'active' : item.link === pageLink}"
                  :to="item.link"
                  :title="item.title"
              >
                {{ item.title }}
              </nuxt-link>
            </v-slide-group-item>
          </v-slide-group>

          <v-row
              v-if="productList.length"
              class="my-3">
            <v-col
                v-for="(item, i) in productList"
                :key="i"
                md="3"
                cols="12"
            >
              <product-card :data="item"/>
            </v-col>
          </v-row>
          <v-row
              v-else
              class="my-3">
            <div class="pa-3 ma-auto d-flex flex-column justify-center text-center">
              <v-icon class="ma-auto mb-3" size="x-large">mdi-recycle-variant</v-icon>
              Ürünler güncellenmektedir.
            </div>
          </v-row>

          <div v-if="categoryData.content">
            <v-card-title>{{ categoryData.title }}</v-card-title>
            <v-card-text v-html="categoryData.content"></v-card-text>
          </div>

        </v-card>
      </v-col>
    </v-row>

  </v-container>

</template>

<style scoped lang="scss">
.v-list.sidebar-menu {
  padding: 12px;
  border: 1px solid #e5e5e5;

  .v-list-subheader {
    letter-spacing: 0;
    font-weight: 200;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-inline-start: inherit !important;
  }

  .v-list-item {
    width: 100%;
    display: block;
    padding: 0;
    min-height: inherit;
    margin-bottom: 8px;
    border-bottom: 1px solid #e5e5e5;

    a {
      color: #000000;
      text-decoration: none;
      font-weight: 600;
      line-height: 36px;
      display: block;

      .v-icon {
        width: 36px;
        height: 36px;
        opacity: 0.4;
      }
    }

    &.active {
      a {
        color: $themePrimaryColor;
      }
    }

    &:last-child {
      border: none;
      margin-bottom: 0;
    }
  }
}

.v-slide-group {
  position: relative;
  z-index: 98;


  @media only screen and (max-width: 767px) {
    margin: 0 -16px;
  }

  a {
    display: inline-flex;
    line-height: 2rem;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 0 1rem;
    margin: .5rem;
    color: $themeSecondaryColor;
    text-decoration: none;

    &:hover {
      background: rgba(0 0 0 / 03%);
    }

    &.active {
      color: #ffffff;
      background: $themePrimaryColor;
      border: 1px solid $themePrimaryColor;
    }
  }

  :deep(.v-slide-group__next),
  :deep(.v-slide-group__prev) {
    @media only screen and (max-width: 767px) {
      flex: 0 1 32px;
      min-width: 32px;
    }
  }
}

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
      display: flex;
      flex-direction: column-reverse;
    }
  }
}
</style>