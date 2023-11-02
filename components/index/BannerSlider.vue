<script setup lang="ts">
import {useContentStore} from "~/store/contentStore";

const contentStore = useContentStore(),
    bannerList = computed(() => contentStore.contentData?.banners)

</script>

<template>
  <v-carousel class="my-3" hide-delimiters>
    <nuxt-link
        v-for="(item, i) in bannerList"
        :key="i"
        :to="item.external_url">
    <v-carousel-item
        :src="$device.isDesktop ? item.image : item.image_mobile"
    ></v-carousel-item>
    </nuxt-link>
  </v-carousel>
</template>

<style scoped lang="scss">
.v-carousel {
  height: auto !important;
}
</style>