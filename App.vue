<script setup>
import GlobalHeader from '@/components/shared/GlobalHeader.vue'
import MobileHeader from "~/components/shared/MobileHeader.vue";
import FooterComponent from "~/components/shared/FooterComponent.vue";
import LegalInfo from "~/components/shared/LegalInfo.vue";
import {useGlobalStore} from "~/store/globalStore";

const globalStore = useGlobalStore(),
    isLegalView = computed(() => globalStore.legalViewed),
    initialize = computed(() => globalStore.siteInitialize),
    title = computed(() => globalStore.siteMeta.title),
    description = computed(() => globalStore.siteMeta.description),
    route = useRoute(),
    {domain} = useRuntimeConfig().public

useHead({
  htmlAttrs: {lang: 'tr'},
  link: [
    {
      rel: 'canonical',
      href: domain + route.path,
    },
  ],
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'}
  ],
})

useSeoMeta({
  // title,
  // description,
  ogLocale: 'tr_TR',
  ogUrl: domain + route.path,
  ogType: 'website',
  ogSiteName: title,
  ogImage: domain + '/images/social-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 627,
  ogImageType: 'image/png',
  ogDescription: description,
  ogTitle: title,
  twitterCard: 'summary_large_image',
  twitterDescription: description,
  twitterImage: domain + '/images/social-image.png',
  twitterSite: '@serversideup',
  twitterTitle: title
})

onMounted(() => {
  if (!initialize.value) {
    globalStore.setInitialize()
  }
})

if (!initialize.value) {
  await useAsyncData('user', () => globalStore.getGlobalData())
  console.log('global running')
}

</script>

<template>
  <v-layout class="d-block">
    <v-container fluid="">
      <div>
        <global-header v-if="$device.isDesktop"/>
        <mobile-header v-else/>
      </div>

      <router-view/>

    </v-container>

    <footer-component/>

    <legal-info v-if="isLegalView"/>
  </v-layout>
</template>

<style scoped>

</style>