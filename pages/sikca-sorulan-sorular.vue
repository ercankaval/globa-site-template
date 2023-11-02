<script setup lang="ts">
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import CorporateSidebar from "~/components/shared/CorporateSidebar.vue";
import {useGlobalStore} from "~/store/globalStore";
import {useContentStore} from "~/store/contentStore";

const globalStore = useGlobalStore(),
    contentStore = useContentStore(),
    faqContent = computed(() => contentStore.contentData?.data),
    faqList = computed(() => contentStore.contentData?.faq_list),
    breadCrumbs = computed(() => contentStore.contentData?.breadcrumbs),
    activeFaq = ref(0)

await useAsyncData(() => contentStore.content('faq'))

useHead({
  title: () => `${contentStore.contentData?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${contentStore.contentData?.data.seo_description}`}
  ]
})

</script>

<template>
  <v-container fluid>
    <block-title title="Sıkça Sorulan Sorular"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-row class="main-row">
      <v-col md="3" cols="12">
        <corporate-sidebar/>
      </v-col>

      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-card-title>{{ faqContent.title }}</v-card-title>
          <v-card-text v-html="faqContent.content"></v-card-text>

          <v-expansion-panels v-model="activeFaq">
            <v-expansion-panel
                v-for="(item, i) in faqList"
                :key="i"
                :title="item.title"
                :text="item.content"
                :value="i"
            ></v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.v-expansion-panels {
  margin-top: 20px;

  :deep(.v-expansion-panel-title) {
    font-weight: 600;
    font-size: 16px;
  }
}

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