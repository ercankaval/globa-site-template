<script setup lang="ts">
import Logo from '@/assets/images/arackoku-logo.svg';
import {useGlobalStore} from "~/store/globalStore";

const subHeaderList = ref([]),
    globalStore = useGlobalStore(),
    categoriesList = computed(() => globalStore.categories)

</script>

<template>
  <div class="header">
    <v-row class="header-navigator">
      <v-col cols="2" class="logo">
        <nuxt-link to="/"><img :src="Logo" alt=""/></nuxt-link>
      </v-col>
      <v-col cols="7" class="navbar">
        <v-list>
          <v-list-item>
            <nuxt-link to="/">Anasayfa</nuxt-link>
          </v-list-item>

          <v-list-item class="navbar-has">
            <nuxt-link to="">Kurumsal
              <v-icon>mdi-chevron-down</v-icon>
            </nuxt-link>

            <v-list class="submenu-level-1">
              <v-list-item>
                <nuxt-link to="/hakkimizda">Hakkımızda</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/sikca-sorulan-sorular">Sıkça Sorulan Sorular</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/banka-hesaplari">Banka Hesapları</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/sertifikalar">Sertifikalar</nuxt-link>
              </v-list-item>
              <v-list-item>
                <nuxt-link to="/kvkk">KVKK</nuxt-link>
              </v-list-item>
            </v-list>
          </v-list-item>

          <v-list-item>
            <nuxt-link to="/referanslar">Referanslar</nuxt-link>
          </v-list-item>

          <v-list-item class="navbar-has">
            <nuxt-link to="/urunler">Ürünler
              <v-icon>mdi-chevron-down</v-icon>
            </nuxt-link>

            <v-list class="submenu-level-1">
              <v-list-item
                  v-for="(item, i) in categoriesList"
                  :key="i"
              >
                <nuxt-link :to="`/${item.link}`" :title="item.title">{{ item.title }}</nuxt-link>
              </v-list-item>
            </v-list>
          </v-list-item>

          <v-list-item>
            <nuxt-link to="/iletisim">İletişim</nuxt-link>
          </v-list-item>

          <v-list-item class="super-button">
            <nuxt-link to="/iletisim">Whatsapp</nuxt-link>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="3" class="search">

        <v-text-field
            label="Arama Yap"
            variant="underlined"
            append-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-slide-group
        v-if="subHeaderList.length"
        show-arrows
    >
      <v-slide-group-item
          v-for="(item, i) in subHeaderList"
          :key="i"
      >
        <nuxt-link
            class="ma-2"
            to="/iletisim"
        >
          {{ item }}
        </nuxt-link>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 999;

  .header-navigator {
    position: relative;
    z-index: 99;

    .logo {
      img {
        max-width: 100%;
        height: 4rem;
      }
    }

    .navbar {
      .v-list {
        width: 100%;
        background: transparent;
        display: flex;
        justify-content: flex-start;
        padding: 1rem 0;
        overflow: initial;

        .v-list-item {
          min-height: inherit;
          padding: 0;
          margin: 0 .5rem;

          a {
            display: block;
            letter-spacing: 0;
            font-weight: 500;
            text-decoration: none;
            color: $themeSecondaryColor;
            padding: 0 .5rem;
            line-height: 2rem;
          }

          &.super-button {
            margin-left: auto;

            a {
              /* Border Css */
              border: 10px solid;
              border-image-slice: 1;
              border-width: 2px;
              border-image-source: linear-gradient(to left, $themeSecondaryColor, $themePrimaryColor);

              /* Text Css */
              font-weight: 700;
              background: -webkit-linear-gradient($themeSecondaryColor, $themePrimaryColor);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }

          &.navbar-has {
            a {
              display: flex;
              align-items: center;

              .v-icon {
                margin-left: 4px;
                opacity: 0.8;
              }
            }
          }

          .submenu-level-1 {
            position: absolute;
            background: #fff;
            min-width: 200px;
            left: 0;
            top: 120%;
            display: block;
            border: 1px solid #e5e5e5;
            transition: 0.35s;
            opacity: 0;
            visibility: hidden;

            .v-list-item {
              margin: 0;
              font-size: 14px;
              border-bottom: 1px solid #e5e5e5;

              &:last-child {
                border: none;
              }

              a {
                padding: 0 1rem;

                &:hover {
                  background: #F7F8FB;
                }
              }
            }
          }

          &:hover {
            .submenu-level-1 {
              transition: .35s;
              top: 100%;
              opacity: 1;
              visibility: visible;
            }
          }
        }
      }
    }

    .search {

    }
  }

  .v-slide-group {
    position: relative;
    z-index: 98;

    a {
      display: inline-flex;
      line-height: 2rem;
      font-weight: 500;
      font-size: 14px;
      border: 1px solid #e5e5e5;
      border-radius: 1rem;
      padding: 0 1rem;
      margin: .5rem;
      color: $themeSecondaryColor;
      text-decoration: none;

      &:hover {
        background: rgba(0 0 0 / 03%);
      }
    }
  }
}
</style>