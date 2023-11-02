<script setup lang="ts">
import LoadingImage from "assets/images/loading.gif";

const props = defineProps({
  data: Object
})
</script>

<template>
  <v-card>
    <nuxt-link :to="`/urun/${data.link}`">
    <v-img :src="data.image" aspect-ratio="1" :lazy-src="LoadingImage"/>
    <v-card-item>
      <v-card-title>{{ data.title }}}</v-card-title>
      <v-card-text>
        <div class="discount-count" v-if="data.percent !== 0">
          <span>%{{ data.percent }}</span>
          <span>İNDİRİM</span>
        </div>
        <div class="product-price"  v-if="data.price !== 0">
          <span v-if="data.old_price !== 0">{{data.old_price}}</span>
          <span>{{ data.price }}</span>
        </div>
        <div class="product-price" v-else>
          <span></span>
          <span>Fiyat Alınız</span>
        </div>
      </v-card-text>
    </v-card-item>
    </nuxt-link>
  </v-card>
</template>

<style scoped lang="scss">
.v-card {
  width: 100%;
  border-radius: 12px;

  a {
    display: block;
    color: #000000;
    text-decoration: none;
    border: 2px solid #efefef;
    box-shadow: 0 0 5px 0 #fff4f4;
    border-radius: 12px;

    .v-card-item {
      padding: 1rem;

      .v-card-title {
        width: 100%;
        letter-spacing: 0;
        font-size: 1rem;
        text-align: left;
        white-space: inherit;
        line-height: 1.25rem;
        height: 2.5rem;
        font-weight: 600;
        margin-bottom: .5rem;
      }

      .v-card-text {
        text-align: left;
        padding: 0;
        display: flex;
        min-height: 3.5rem;

        .discount-count {
          width: 3.5rem;
          height: 3.5rem;
          background: $themeYellowColor;
          border-radius: 3px;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-right: 1rem;

          span {
            &:first-child {
              font-size: 1rem;
              line-height: 1.25rem;
              font-weight: 700;
            }

            &:last-child {
              font-size: .625rem;
              line-height: 1rem;
              font-weight: 400;
            }

          }
        }

        .product-price {
          color: #000;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;

          span {
            &:first-child {
              font-size: .625rem;
              line-height: 1rem;
              font-weight: 400;
              text-decoration: line-through;
            }

            &:last-child {
              font-size: 1.25rem;
              line-height: 1.5rem;
              font-weight: 700;
            }

          }
        }
      }
    }

    .v-img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    &:hover {
      border: 2px solid $themePrimaryColor;

      .v-card-item {
        .v-card-title {
          color: $themePrimaryColor;
        }

        .v-card-text {
          .product-price {
            color: $themePrimaryColor;

          }
        }
      }
    }
  }
}
</style>