<script setup>
import {onMounted, ref, watch} from "vue";
import {Carousel, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const
    props = defineProps({
      dialog: {
        type: Boolean,
        Default: false
      },
      images: Array,
      currentSlide: Number
    }),
    currentSlidePopup = ref(0),
    prevCarousel = () => {
      if (currentSlidePopup.value + 1 !== 1)
        currentSlidePopup.value--
    },
    nextCarousel = () => {
      if (currentSlidePopup.value + 1 !== props.images.length)
        currentSlidePopup.value++
    },
    onKeydown = (e) => {
      if (e.key === 'ArrowRight') {
        nextCarousel()
      }
      if (e.key === 'ArrowLeft') {
        prevCarousel()
      }
      if (e.key === 'Escape') {
        closeDialog()
      }
    },
    emit = defineEmits(['blur']),
    closeDialog = () => {
      emit('blur', currentSlidePopup.value)
    }

watch(() => props.dialog, (newVal, oldVal) => {
  currentSlidePopup.value = props.currentSlide
});


onMounted(() => {
  document.addEventListener("keydown", onKeydown);
})
</script>

<template>
  <client-only>
    <v-dialog
        v-model="props.dialog"
        fullscreen
        transition="dialog-bottom-transition"
        @click:outside="closeDialog"
    >
      <v-btn
          class="dialog-close-button"
          @click="closeDialog"
      ></v-btn>
      <v-card class="image-popup">
        <v-card class="image-popup-container">
          <Carousel
              :transition="100"
              class="large-carousel"
              :items-to-show="1"
              :wrap-around="false"
              v-model="currentSlidePopup">
            <Slide
                v-for="(item, index) in props.images"
                :key="index"
                class="large-carousel-slide"
            >
              <div class="large-carousel-item">
                <div class="large-carousel-item-image">
                  <img :src="item.image" alt="">
                </div>
              </div>
            </Slide>

            <template #addons>
              <div class="large-carousel-navigations">
                <v-btn
                    @click="prevCarousel"
                    :class="{'disabled-navigation' : currentSlidePopup  === 0}"
                    class="large-carousel-navigations-prev-button"
                ></v-btn>
                <v-btn
                    @click="nextCarousel"
                    :class="{'disabled-navigation' : currentSlidePopup === images.length - 1}"
                    class="large-carousel-navigations-next-button"
                ></v-btn>
              </div>
              <v-card-text class="large-carousel-count">{{ currentSlidePopup + 1 }}/{{ props.images.length }}</v-card-text>
            </template>
          </Carousel>
        </v-card>
      </v-card>
    </v-dialog>
  </client-only>
</template>

<style lang="scss" scoped>
.image-popup {
  background: rgba(0 0 0 / 20%);
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  box-shadow: none;
  border: none;

  .image-popup-container {
    min-width: 100%;
    background: transparent;
    box-shadow: none;
    border: none;
    padding: 6px 0 0;
    border-radius: 0;

    .large-carousel {
      position: relative;
      overflow: hidden;
      display: inline-block;
      width: 100%;
      height: 100%;

      .large-carousel-item {
        position: relative;
        display: block;
        width: calc(100% - 12rem);
        max-width: 177.78vh;
        height: 56.25vw;
        max-height: 100%;
        margin: auto;
        overflow: hidden;

        .large-carousel-item-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;

          img {
            position: absolute;
            width: auto;
            height: 100%;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
        }
      }

      .large-carousel-navigations {
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

          :deep(.v-btn__overlay),
          :deep(.v-btn__underlay),
          :deep(.v-btn__content),
          :deep(.v-ripple__container),
          &:after {
            display: none;
          }

          &:before {
            position: absolute;
            content: "";
            width: 1.5rem;
            height: 1.5rem;
            left: 50%;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            transition: .1s;
          }

          &.large-carousel-navigations-prev-button {
            left: 1.5rem;

            &:before {
              font: normal normal normal 24px/1 "Material Design Icons";
              content: "\F0141";
              color: #FFFFFF;
            }
          }

          &.large-carousel-navigations-next-button {
            right: 1.5rem;

            &:before {
              font: normal normal normal 24px/1 "Material Design Icons";
              content: "\F0142";
              color: #FFFFFF;
            }
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
        height: 100%;
        padding: 2rem 0;

        .carousel__track {
          height: 100%;
        }
      }
    }
  }
}

:deep(.v-overlay__scrim) {
  background: rgba(0, 0, 0, 0.8);
  opacity: 1;
}

.dialog-close-button {
  position: absolute;
  width: 36px;
  height: 36px;
  right: 1.5rem;
  top: 1rem;
  border-radius: 1.5rem;
  padding: 0;
  z-index: 99;
  box-shadow: none;
  min-width: inherit;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(221, 229, 237, 0.3);
  color: #fff;
  cursor: pointer;

  :deep(.v-btn__overlay),
  :deep(.v-btn__underlay),
  :deep(.v-ripple__container),
  &:after {
    display: none;
  }

  &:before {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 4px;
    font: normal normal normal 24px "Material Design Icons";
    content: "\F0156";
    color: #FFFFFF;
  }

  &:hover {
    background: #FFFFFF;
    border: 1px solid rgba(221, 229, 237, 0.42);

    &:before {
      color: #000000;
    }
  }
}

.large-carousel-count {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  font-weight: 500;
  font-size: .875rem;
  line-height: 1.5rem;
  padding: .75rem 0 0;
  text-align: center;
  color: #FFFFFF;
}

@media only screen and (max-width: 767px) {
  .image-popup {
    .image-popup-container {
      .large-carousel {
        padding-bottom: 2rem;

        .large-carousel-item {
          width: calc(100% - 2rem);
        }

        .large-carousel-navigations {
          display: none;
        }

        .large-carousel-count {
          bottom: 2rem;
        }
      }
    }
  }
}
</style>