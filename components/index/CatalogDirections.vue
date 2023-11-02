<script setup lang="ts">

import {useGlobalStore} from "~/store/globalStore";

const globalStore = useGlobalStore(),
    catalogSeasonLink = computed(() => globalStore.settings.catalog_season),
    catalogPriceLink = computed(() => globalStore.settings.catalog_price),
    printPriceLink = computed(() => globalStore.settings.print_price)

</script>

<template>
  <v-row class="my-3">
    <v-col md="3" cols="12">
      <v-card>
        <v-card-title>Katalog İndir</v-card-title>
        <v-icon class="card-icon">mdi-book-open-page-variant</v-icon>
        <v-card-actions>
          <a :href="catalogSeasonLink" target="_blank">İncele <v-icon>mdi-arrow-right-thin</v-icon></a>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="3" cols="12">
      <v-card>
        <v-card-title>Fiyat Listesi</v-card-title>
        <v-icon class="card-icon">mdi-book-open-variant</v-icon>
        <v-card-actions>
          <a :href="catalogPriceLink" target="_blank">İncele <v-icon>mdi-arrow-right-thin</v-icon></a>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="3" cols="12">
      <v-card>
        <v-card-title>Baskı Fiyat Listesi</v-card-title>
        <v-icon class="card-icon">mdi-book-open-variant</v-icon>
        <v-card-actions>
          <a :href="printPriceLink" target="_blank">İncele <v-icon>mdi-arrow-right-thin</v-icon></a>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col md="3" cols="12">
      <v-card>
        <v-card-title>Banka Bilgileri</v-card-title>
        <v-icon class="card-icon">mdi-bank</v-icon>
        <v-card-actions>
          <nuxt-link to="/banka-hesaplari">İncele <v-icon>mdi-arrow-right-thin</v-icon></nuxt-link>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.v-card {
  padding: 1rem;
  border: 1px solid #b1b1b1;
  background: transparent;
  box-shadow: none;

  .v-card-title {
    padding: 0;
    letter-spacing: 0;
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .v-icon.card-icon {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    border: 1px solid #b1b1b1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b1b1b1;
    font-size: 2rem;
  }

  .v-card-actions {
    padding: 0;

    a {
      display: block;
      padding: 8px 24px;
      text-decoration: none;
      text-transform: inherit;
      border: 1px solid $themePrimaryColor;
      color: $themePrimaryColor;
      font-size: 14px;
      font-weight: 500;
      margin: 0;
      letter-spacing: 0;

      &:hover {
        background: $themePrimaryColor;
        color: #fff;
      }
    }
  }

  &:hover {
    border: 1px solid $themePrimaryColor;

    .v-card-title {
      color: $themePrimaryColor;
    }

    .v-icon.card-icon {
      border: 1px solid $themePrimaryColor;
      color: $themePrimaryColor;
    }
  }
}
</style>