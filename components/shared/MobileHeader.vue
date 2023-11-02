<script setup lang="ts">
import Logo from '@/assets/images/logo.svg'

const menu = ref(false),
    search = ref(false),
    corporateList = ref([
      {text: 'Hakkımızda', href: 'hakkimizda', icon: 'mdi-office-building'},
      {text: 'Sıkça Sorulan Sorular', href: 'sikca-sorulan-sorular', icon: 'mdi-chat-question'},
      {text: 'İletişim', href: 'iletisim', icon: 'mdi-email'},
      {text: 'Banka Hesapları', href: 'banka-hesaplari', icon: 'mdi-bank'},
      {text: 'Referanslar', href: 'referanslar', icon: 'mdi-rocket'},
      {text: 'Sertifikalar', href: 'sertifikalar', icon: 'mdi-check-decagram'},
      {text: 'KVKK', href: 'kvkk', icon: 'mdi-security'},
    ]),
    searchList = ref([
      "nevresim takımları",
      "sırt çantası",
      "tunik",
      "kahve makinesi",
      "elbise",
      "oyuncak",
      "abajur",
    ]),
    searchField = ref()

const toggleMenu = () => {
  search.value = false
  menu.value = !menu.value
}

const toggleSearch = () => {
  menu.value = false
  search.value = !search.value
  searchField.value.focus()
}
</script>

<template>
  <div>
    <v-app-bar>
      <nuxt-link to="/" style="width: 180px; height: 50px;">
        <v-img :src="Logo"/>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn icon @click="toggleSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon @click="toggleMenu" class="mr-0">
        <v-icon :icon="menu ? 'mdi-close' : 'mdi-menu'"></v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="menu"
        temporary
    >
      <v-list>
        <v-list-item>
          <nuxt-link to="/">Anasayfa</nuxt-link>
        </v-list-item>

        <v-list-group value="Kurumsal">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                title="Kurumsal"
            ></v-list-item>
          </template>

          <v-list-item
              v-for="(item, i) in corporateList"
              :key="i"
          >
            <nuxt-link :to="item.href">{{ item.text }}</nuxt-link>
          </v-list-item>
        </v-list-group>

        <v-list-group value="Kategoriler">
          <template v-slot:activator="{ props }">
            <v-list-item
                v-bind="props"
                title="Kategoriler"
            ></v-list-item>
          </template>

          <v-list-item
              v-for="(item, i) in corporateList"
              :key="i"
          >
            <nuxt-link :to="item.href">{{ item.text }}</nuxt-link>
          </v-list-item>
        </v-list-group>

        <v-list-item>
          <nuxt-link to="/iletisim">İletişim</nuxt-link>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-navigation-drawer
        v-model="search"
        location="right"
        temporary
    >
      <v-sheet class="pa-3">

        <v-text-field
            ref="searchField"
            label="Arama Yap"
            variant="underlined"
            append-inner-icon="mdi-magnify"
        ></v-text-field>

        <v-card-title>Önerilen Aramalar</v-card-title>

        <v-chip
            v-for="(item, i) in searchList "
            :key="i"
            class="ma-1"
            color="success"
            variant="outlined"
        >
          {{ item }}
        </v-chip>
      </v-sheet>
    </v-navigation-drawer>
  </div>
</template>

<style scoped lang="scss">
.v-app-bar {
  padding: 0 16px;
}

.v-navigation-drawer {
  width: 300px !important;

  .v-list {
    padding-top: 32px;

    .v-list-item {
      min-height: inherit;
      padding: 0;
      margin: 0 .5rem;

      :deep(.v-list-item-title),
      a {
        display: block;
        letter-spacing: 0;
        font-weight: 500;
        text-decoration: none;
        color: $themeSecondaryColor;
        padding: .5rem;
        line-height: 2rem;
      }
    }
  }
}
</style>