<script setup lang="ts">
import {useGlobalStore} from "~/store/globalStore";

const globalStore = useGlobalStore()
</script>

<template>
  <v-card class="legal-card">
    <v-card-text>
      <p>
        Size daha iyi bir hizmet verebilmek için Internet sayfamızda çerezler kullanıyoruz.
        Sayfamızı kullanmaya devam ederek çerez politikamıza izin vermiş oluyorsunuz.<br>
        Daha fazla bilgi için
        <nuxt-link to="/kvkk">buraya tıklayınız.</nuxt-link>
      </p>
    </v-card-text>
    <v-btn @click="globalStore.setLegalViewed">Tamam</v-btn>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  position: fixed;
  bottom: 0;
  z-index: 9999;
  width: 100%;

  padding: 16px;
  border: none;
  box-shadow: none;
  background: $themeSecondaryColor;
  color: #FFFFFF;
  display: flex;

  .v-card-text {
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0;

    p {
      margin: 0 0 16px;

      &:last-child {
        margin: 0;
      }

      a {
        color: $themePrimaryColor;
        text-decoration: none;
      }
    }
  }

  .v-btn {
    letter-spacing: 0;
    font-weight: 600;
    text-transform: inherit;
    font-size: 16px;
  }
}
</style>