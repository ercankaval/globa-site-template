<script setup lang="ts">

import {useContentStore} from "~/store/contentStore";

const items = ref([
      {text: 'Hakkımızda', href: 'hakkimizda', type: 'about', icon: 'mdi-office-building'},
      {text: 'Sıkça Sorulan Sorular', href: 'sikca-sorulan-sorular', type: 'faq', icon: 'mdi-chat-question'},
      {text: 'İletişim', href: 'iletisim', type: 'contact', icon: 'mdi-email'},
      {text: 'Banka Hesapları', href: 'banka-hesaplari', type: 'bank-accounts', icon: 'mdi-bank'},
      {text: 'Referanslar', href: 'referanslar', type: 'references', icon: 'mdi-rocket'},
      {text: 'Sertifikalar', href: 'sertifikalar', type: 'certificates', icon: 'mdi-check-decagram'},
      {text: 'KVKK', href: 'kvkk', type: 'kvkk', icon: 'mdi-security'},
    ]),
    route = useRoute(),
    contentStore = useContentStore(),
    page = computed(() => contentStore.page)

</script>

<template>
  <v-list>
    <v-list-subheader>KURUMSAL</v-list-subheader>

    <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :class="{'active' : page === item.type}"
    >
      <nuxt-link :to="item.href">
        <v-icon :icon="item.icon"/>
        {{ item.text }}
      </nuxt-link>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
.v-list {
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
</style>