<script setup lang="ts">
import LoadingImage from "assets/images/loading.gif";

const props = defineProps({
  data: Object
})
</script>

<template>
  <v-card>
    <nuxt-link :to="props.data.link">
      <v-img :src="props.data.image" :lazy-src="LoadingImage"></v-img>
      <v-card-item>
        <h3>{{ props.data.title }}</h3>
        <p>Ürünleri Keşfet
          <v-icon>mdi-chevron-right</v-icon>
        </p>
      </v-card-item>
    </nuxt-link>
  </v-card>

</template>

<style scoped lang="scss">
.v-card {
  position: relative;

  .v-img {
    z-index: 1;
  }

  .v-card-item {
    position: absolute;
    z-index: 12;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0 0 0 / 10%);
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: end;

    &:before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
    }

    :deep(.v-card-item__content) {
      align-self: end;
      z-index: 2;
    }

    h3 {
      display: block;
      background: #fe2e2a;
      color: #fff;
      padding: .5rem;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    p {
      display: inline-flex;
      align-items: flex-end;
      justify-content: flex-end;
      background: transparent;
      color: #fff;
      padding: .5rem 1rem;
      font-size: 1rem;
      text-decoration: none;
      font-weight: 600;
      border-radius: 9px;

      &:hover {
        background: rgba(0 0 0 / 40%);
      }
    }
  }
}
</style>