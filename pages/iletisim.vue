<script setup lang="ts">
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import CorporateSidebar from "~/components/shared/CorporateSidebar.vue";
import ContactForm from "~/components/shared/forms/ContactForm.vue";
import {useGlobalStore} from "~/store/globalStore";
import {useContentStore} from "~/store/contentStore";

const globalStore = useGlobalStore(),
    contentStore = useContentStore(),
    contactContent = computed(() => contentStore.contentData?.data),
    breadCrumbs = computed(() => contentStore.contentData?.breadcrumbs)

await useAsyncData(() => contentStore.content('contact'))

useHead({
  title: () => `${contentStore.contentData?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${contentStore.contentData?.data.seo_description}`}
  ]
})

</script>

<template>
  <v-container fluid="">
    <block-title title="İletişim"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-row class="main-row">
      <v-col md="3" cols="12">
        <corporate-sidebar/>
      </v-col>

      <v-col md="9" cols="12">
        <v-card class="corporate-content">
          <v-row>
            <v-col md="5" cols="12">
              <v-card-title>{{ contactContent.title }}</v-card-title>
              <v-card-text v-html="contactContent.content"></v-card-text>
            </v-col>
            <v-col md="6" cols="12" class="offset-md-1">
              <v-card-title>İletişim Formu</v-card-title>

              <contact-form/>
            </v-col>
          </v-row>
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