<script setup>
import {Carousel, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import DialogGallery from "~/components/shared/DialogGallery.vue";

const props = defineProps({
      images: Array
    }),
    slideTo = (val) => {
      currentSlide.value = val
    },
    prevCarousel = () => {
      if (currentSlide.value + 1 !== 1)
        currentSlide.value--
    },
    nextCarousel = () => {
      if (currentSlide.value + 1 !== imageList.value.length)
        currentSlide.value++
    },
    currentSlide = ref(0),
    dialog = ref(false),
    openDialog = (index) => {
      currentSlide.value = index
      dialog.value = true
    },
    closeDialog = (cid) => {
      dialog.value = false
      currentSlide.value = cid
    },
    imageList = computed(() => props.images)

const imageList2 = ref([
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
])

</script>

<template>
  <v-card class="real-estate-images">
    <Carousel
        :transition="100"
        class="main-carousel"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide">
      <Slide
          v-for="(item, i) in imageList"
          :key="i"
          class="main-carousel-slide"
      >
        <div class="main-carousel-item">
          <div class="main-carousel-item-image">
            <img
                @click="openDialog(i)"
                :src="item.image"
                alt=""
            >
          </div>
        </div>
      </Slide>

      <template #addons>
        <div class="main-carousel-navigations">
          <v-btn
              @click="prevCarousel"
              :class="{'disabled-navigation' : currentSlide  === 0}"
              class="main-carousel-navigations-prev-button"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
              @click="nextCarousel"
              :class="{'disabled-navigation' : currentSlide ===imageList.length - 1}"
              class="main-carousel-navigations-next-button"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </template>
    </Carousel>

    <Carousel
        :transition="100"
        class="thumbnail-carousel"
        :items-to-show="$device.isDesktop ? 7 : 3"
        v-model="currentSlide"
        :class="[imageList.length <= 7 ? 'fix-carousel' : '']"
    >
      <Slide
          class="thumbnail-carousel-slide"
          v-for="(item, i) in imageList"
          :key="i"
      >
        <div class="thumbnail-carousel-item" @click="slideTo(i)">
          <div
              :class="[i === currentSlide ? 'active-item' : '']"
              class="thumbnail-carousel-item-image"
          >
            <img :src="item.image" alt="">
          </div>
        </div>
      </Slide>

    </Carousel>

    <dialog-gallery
        :dialog="dialog"
        :images="imageList"
        :current-slide="currentSlide"
        @blur="closeDialog"
    />
  </v-card>
</template>

<style lang="scss" scoped>
.v-card.real-estate-images {
  position: relative;
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 9px;
  padding: 0;
  margin: 0 0 2rem;
  box-shadow: none;
  display: block;

  @media only screen and (max-width: 767px) {
    margin: 0;
  }

  .main-carousel {
    position: relative;
    overflow: hidden;

    .main-carousel-item {
      width: 100%;
      position: relative;

      .main-carousel-item-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        background: #181818;
        overflow: hidden;

        img {
          position: absolute;
          width: 100%;
          min-height: 100%;
          left: 0;
          top: 0;
          cursor: pointer;
        }
      }
    }

    .main-carousel-navigations {
      .v-btn {
        position: absolute;
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(221, 229, 237, 0.3);
        border-radius: 18px;
        width: 36px;
        height: 36px;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
        padding: 0;
        display: block;
        box-shadow: none;
        min-width: auto;
        transition: .1s;
        z-index: 12;
        color: #fff;
        font-size: 22px;
        cursor: pointer;

        :deep(.v-btn__overlay),
        :deep(.v-btn__underlay),
        :deep(.v-ripple__container),
        &:after {
          display: none;
        }

        &.main-carousel-navigations-prev-button {
          left: 9px;
        }

        &.main-carousel-navigations-next-button {
          right: 9px;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(221, 229, 237, 0.42);
        }
      }
    }

    :deep(.carousel__viewport) {
      position: relative;
      z-index: 10;
    }
  }

  .thumbnail-carousel {
    position: relative;
    overflow: initial;
    width: calc(100% - 32px);
    margin: 9px auto;

    &.fix-carousel {
      :deep(.carousel__track) {
        transform: inherit !important;
      }
    }

    :deep(.carousel__viewport) {
      position: relative;
      z-index: 12;
    }

    .thumbnail-carousel-item {
      width: 100%;
      position: relative;
      margin: 0 4.5px;

      .thumbnail-carousel-item-image {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        overflow: hidden;
        border: 1px solid #D9D9D9;
        border-radius: 3px;

        &.active-item {
          border: 2px solid #CD7728;
        }

        img {
          position: absolute;
          width: 100%;
          min-height: 100%;
          left: 0;
          top: 0;
        }
      }
    }
  }
}
</style>