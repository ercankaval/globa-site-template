<script setup lang="ts">
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import CorporateSidebar from "~/components/shared/CorporateSidebar.vue";
import LoadingImage from '@/assets/images/loading.gif'
import {useGlobalStore} from "~/store/globalStore";
import {useContentStore} from "~/store/contentStore";

const globalStore = useGlobalStore(),
    contentStore = useContentStore(),
    referencesContent = computed(() => contentStore.contentData?.data),
    referencesList = computed(() => contentStore.contentData?.references_list),
    breadCrumbs = computed(() => contentStore.contentData?.breadcrumbs)

await useAsyncData(() => contentStore.content('references'))

useHead({
  title: () => `${contentStore.contentData?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${contentStore.contentData?.data.seo_description}`}
  ]
})

</script>

<template>
  <v-container fluid="">
    <block-title title="Referanslar"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-row class="main-row">
      <v-col md="3" cols="12">
        <corporate-sidebar/>
      </v-col>

      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-card-title tag="h1">{{ referencesContent.title }}</v-card-title>
          <v-card-text>
            <div v-html="referencesContent.content"></div>

            <v-row class="mt-5 mx-2">
              <v-col
                  v-for="(item, i) in referencesList"
                  :key="i"
                  class="border"
                  md="3"
                  cols="6"
              >
                <v-img
                    :src="item.image"
                    :alt="item.title"
                    :lazy-src="LoadingImage"
                    aspect-ratio="1"
                    cover
                    class="bg-grey-lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                      <v-progress-circular
                          indeterminate
                          color="grey-lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  @media only screen and (max-width: 767px) {
    padding-top: 60px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .main-row {
    margin-top: 2rem;

    @media only screen and (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 0;
    }
  }
}
</style>