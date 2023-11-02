<script setup lang="ts">
import {Carousel, Slide, Navigation} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProductCard from "~/components/shared/ProductCard.vue";

const props = defineProps({
      products: Array
    }),
    touch = ref(false)

</script>

<template>
  <v-row class="mb-3">
    <v-col cols="12">
      <Carousel
          class="video-carousel"
          :items-to-show="$device.isDesktop ? 6 : 1.5"
          :touchDrag="touch"
          :mouseDrag="touch"
      >
        <Slide
            v-for="(item, i) in props.products"
            :key="i"
        >
          <product-card :data="item"/>
        </Slide>

        <template #addons>
          <Navigation/>
        </template>
      </Carousel>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
:deep(.carousel__slide) {
  padding: 0 .5rem;
}

:deep(.carousel__viewport) {
  overflow: inherit;
  padding: 12px 0;


  @media only screen and (max-width: 767px) {
    overflow: hidden;
  }
}

:deep(.carousel__prev), :deep(.carousel__next) {
  width: 3rem;
  height: 3rem;
  background: rgba(255 255 255 / 40%);
  border-radius: 1.5rem;
  color: #000;

  &:hover {
    background: rgba(255 255 255 / 100%);
  }
}
</style>