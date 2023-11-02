<script setup lang="ts">
import {useGlobalStore} from "~/store/globalStore";

const globalStore = useGlobalStore(),
    corporateList = computed(() => globalStore.footer_data.corporate),
    categoriesList = computed(() => globalStore.footer_data.categories),
    siteSettings = computed(() => globalStore.settings),
    suggestedSearchList = computed(() => globalStore.suggested_search),
    socials = computed(() => {
      return [
        {name: "facebook", icon: "mdi-facebook", url: siteSettings.value.facebook},
        {name: "twitter", icon: "mdi-twitter", url: siteSettings.value.twitter},
        {name: "google", icon: "mdi-youtube", url: siteSettings.value.youtube},
        {name: "linkedin", icon: "mdi-linkedin", url: siteSettings.value.linkedin},
        {name: "instagram", icon: "mdi-instagram", url: siteSettings.value.instagram}
      ]
    })

</script>

<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col md="4" cols="12">
          <v-card-title>Kurumsal</v-card-title>
          <v-list>
            <v-list-item
                v-for="(item, z) in corporateList"
                :key="z"
            >
              <nuxt-link :to="item.link">{{ item.title }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col md="4" cols="12">
          <v-card-title>Kategoriler</v-card-title>
          <v-list>
            <v-list-item
                v-for="(item, z) in categoriesList"
                :key="z"
            >
              <nuxt-link :to="`/${item.link}`">{{ item.title }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col md="4" cols="12">
          <v-card-title>Önerilen</v-card-title>
          <v-list>
            <v-list-item
                v-for="(item, z) in suggestedSearchList"
                :key="z"
            >
              <nuxt-link :to="`/${item.link}`">{{ item.title }}</nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>

      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex justify-center social-buttons">
          <a
              v-for="item in socials"
              :key="item"
              :href="item.url"
              target="_blank"
              class="mx-4">
            <v-icon>{{ item.icon }}</v-icon>
          </a>

        </v-col>
        <v-col cols="12">
          <div class="px-4 py-2 text-center text-white w-100">
            Copyright {{ new Date().getFullYear() }} <strong>Ercan Kaval</strong>. Tüm hakları saklıdır.
          </div>
        </v-col>

      </v-row>
    </v-container>
  </v-sheet>
</template>

<style scoped lang="scss">
.v-sheet {
  background: #000000;
  padding-top: 2rem;

  .v-card-title {
    padding: 0;
    letter-spacing: 0;
    color: #fff;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .v-list {
    padding: 0;
    padding-bottom: 2rem;
    background: transparent;

    .v-list-item {
      padding: 0;
      min-height: inherit;
      font-size: 1rem;
      letter-spacing: 0;

      a {
        color: rgba(255 255 255 / 80%);
        text-decoration: none;
        padding: .5rem;

        &:hover {
          color: rgba(255 255 255 / 100%);
          text-decoration: underline;
        }
      }
    }
  }

  .social-buttons {
    color: #fff;
    font-size: 20px;
    border-top: 1px solid #fff;
    padding-top: 2rem !important;

    a {
      color: #FFFFFF;
      text-decoration: none;

      &:hover {
        opacity: 0.4;
      }
    }
  }
}
</style>