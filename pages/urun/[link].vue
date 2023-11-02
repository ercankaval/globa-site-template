<script setup lang="ts">
import ProductCarousel from "~/components/shared/ProductCarousel.vue";
import BlockTitle from "~/components/shared/BlockTitle.vue";
import BreadCrumbs from "~/components/shared/BreadCrumbs.vue";
import ImageCarouselThumb from "~/components/shared/ImageCarouselThumb.vue";
import ProductForm from "~/components/shared/forms/ProductForm.vue";
import {useProductStore} from "~/store/productStore";

// STATIC
const contentList = ref([
  {
    value: 2,
    q: "Çalışma Şartları",
    a: "<p>Firmamız tekli olarak, kişisel olarak ürün satışı gerçekleştirmemektedir.</p><p>Fiyatlarımıza KDV dahil değildir.</p><p>Fiyat listesinde belirtilen ürün fiyatlarını, şirketimiz değiştirme hakkına sahiptir.</p><p>Sipariş Anlaşması karşılıklı onaylanır. Kesin sipariş işleminde telefonla sipariş alınmaz.</p><p>Banka havaleleri fatura kesilecek şirket veya kişi ismi adına gönderilmelidir.</p><p>Siparişlerde tasarım onayı alınmadan, baskıya aşamasına geçilmez.</p><p>Kesin sipariş de Havale ile yapılan ödemelerde ön ödemenin yapıldığına ait Banka Dekontunun firmamıza iletilmesi gerekmektedir.</p><p>Sipariş verilmeden önce ürününün renk, ebad, teknik özeliklerinin görülmesi için, numunesinin görülmesi tavsiye edilir.</p>"
  },
  {
    value: 3,
    q: "Numune Talebi",
    a: "<p>Her türlü ürünün numune isteği ücretlidir. Ürünler sitemizde belirtilen fiyat üzerinden ödemesi alındıktan sonra karşı ödemeli olarak kargo yapılır.</p>"
  },
  {
    value: 4,
    q: "Ödeme Koşulları",
    a: "<p>Kataloğumuzda ve internet sitemizde yer alan fiyatlar banka havalesi, kredi kartı tek slip ile ödeme yapıldığında geçerlidir.</p><p>Ürün siparişi %50 ön ödemenin yapılmasından sonra kesinleşir, ürünler tüm ödeme işleminin tamamlanmasından sonra tarafınıza teslim edilir. </p><p>Toplam sipariş tutarı yüksek olan siparişler için, firmaya özel ödeme koşulları belirlenebilmektedir.</p>"
  },
  {
    value: 5,
    q: "Nakliye Koşuları",
    a: "<p>Ürünlerin nakliyesi alıcı firmaya aittir, isterseniz sizin anlaşmalı olduğunuz kargo firmasına verilebilir. Anlaşmalı olduğunuz kargo firması yok ise firmamızın anlaşmalı olduğu kargo ile ürünleriniz karşı ödemeli olarak size yollanır.</p><p>Teslimatta alıcı firmanın isteğine göre ambar, depomuzdan direk müşteri tarafından alınması gibi seçenekler de uygulanabilmektedir.</p><p>Toplu Siparişler ve özel anlaşma dahlinde ürün teslimatları firmamızca yapılabilmektedir.</p>"
  },
])


const productStore = useProductStore(),
    productData = computed(() => productStore.pageData?.data),
    productPrices = computed(() => productStore.pageData?.prices),
    productImages = computed(() => productStore.pageData?.images),
    similarProducts = computed(() => productStore.pageData?.similar_products),
    breadCrumbs = computed(() => productStore.pageData?.breadcrumbs),
    pageLink = computed(() => useRoute().params.link)

const {data} = await useAsyncData(() => productStore.productDetails(String(pageLink.value)), {watch: [pageLink]})

useHead({
  title: () => `${data.value?.data.seo_title}`,
  meta: [
    {name: 'description', content: () => `${data.value?.data.seo_description}`}
  ]
})

</script>

<template>
  <v-container fluid="" class="product-page">

    <block-title :title="productData.title"/>

    <bread-crumbs :data="breadCrumbs"/>

    <v-row class="main-row">
      <v-col md="6" cols="12">
        <image-carousel-thumb :images="productImages"/>

        <v-card class="corporate-content" v-if="$device.isDesktop">
          <v-card-title>Ürün Hakkında</v-card-title>
          <v-card-text>
            <p>EBAT: 54cm², 1.8mm KALINLIK, 4 RENK ÖN ARKA OFSET BASKILI, ÖZEL KESİM UYGULANABİLİR. SAĞLIK BAKANLIĞI
              ONAYLI</p>
            <p>Koku Çeşitleri: vanilya, okyanus, bahar, çilek, karışık meyve, yeşil elma, kavun, karpuz</p>
          </v-card-text>
        </v-card>

        <v-card class="corporate-content">
          <div
              v-for="(item, i) in contentList"
              :key="i"
              class="border-b mb-3 pb-3"
          >
            <v-card-title>{{ item.q }}</v-card-title>
            <v-card-text v-html="item.a"></v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col md="6" cols="12">
        <div class="sticky-card">
          <v-card class="product-content">
            <v-card-title tag="h1">Karakalem Tasarımlı Kişiye Özel Kupa</v-card-title>
            <v-row>
              <v-col cols="12">
                <v-alert
                    type="success"
                    :icon="false"
                    variant="outlined"
                    density="compact"
                    text="Özel üretim ürünüdür. İstenilen adette üretim yapılabilmektedir."
                ></v-alert>
              </v-col>
              <v-col md="6" cols="12">
                <v-card-text>
                  <p><b>Ürün Kodu:</b> 1234567</p>
                  <p><b>Termin:</b> 8-12 İş Günü</p>
                  <p><b>Min. Sipariş Adedi:</b> 500</p>
                  <p><b>Kategori:
                    <nuxt-link to="/">Plastik Kalemler</nuxt-link>
                  </b></p>
                  <p><b>Stok:</b> 1234567</p>
                </v-card-text>
              </v-col>
              <v-col md="6">
                <v-card-text v-if="productPrices.length">
                  <p
                      v-for="(item, i) in productPrices"
                      :key="i"
                  ><b>{{ item.quantity }} Adet: <a href="">{{ item.price }}</a></b></p>
                </v-card-text>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-btn class="whatsapp">
                <v-icon icon="mdi-whatsapp" class="mr-2"></v-icon>
                Whatsapp'tan İletişime Geç
              </v-btn>
              <v-btn class="phone">
                <v-icon icon="mdi-phone" class="mr-2"></v-icon>
                Hemen Ara
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card class="corporate-content" v-if="!$device.isDesktop">
            <v-card-title>Ürün Hakkında</v-card-title>
            <v-card-text>
              <p>EBAT: 54cm², 1.8mm KALINLIK, 4 RENK ÖN ARKA OFSET BASKILI, ÖZEL KESİM UYGULANABİLİR. SAĞLIK BAKANLIĞI
                ONAYLI</p>
              <p>Koku Çeşitleri: vanilya, okyanus, bahar, çilek, karışık meyve, yeşil elma, kavun, karpuz</p>
            </v-card-text>
          </v-card>

          <v-card class="product-content">
            <v-card-title tag="h3">Sipariş Formu</v-card-title>

            <product-form/>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <block-title title="Bunlar da ilginizi çekebilir"/>

    <product-carousel :products="similarProducts"/>
  </v-container>
</template>

<style scoped lang="scss">
.v-card.product-content {
  padding: 16px;
  border: 1px solid #e5e5e5;
  box-shadow: none;

  .v-card-title {
    padding: 0;
    font-weight: 600;
    font-size: 20px;
    letter-spacing: 0;
    margin-bottom: 16px;
  }

  .v-card-text {
    padding: 0;
    font-weight: 400;
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

  & + .v-card {
    margin-top: 16px;
  }

  .v-card-actions {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    .v-btn {
      width: 40%;
      border: 1px solid #e5e5e5;
      padding: 16px 24px;
      height: auto;
      text-transform: inherit;
      letter-spacing: 0;
      font-weight: 600;
      font-size: 14px;
      border-radius: 4px;

      background: $themePrimaryColor;
      color: #FFFFFF;
      border-color: $themePrimaryColor;

      &.whatsapp {
        background: $whatsapp;
        color: #FFFFFF;
        border-color: $whatsapp;
      }

      &.phone {
        background: $themeBlueColor;
        color: #FFFFFF;
        border-color: $themeBlueColor;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    .v-card-title {
      font-size: 18px;
    }
    .v-card-text {
      font-size: 14px;
    }
    .v-card-actions {
      flex-direction: column;
      padding: 0;
      margin-bottom: 0;

      .v-btn {
        margin: 0 0 12px;
        width: 100%;
      }
    }
  }
}

.product-page {
  @media only screen and (max-width: 767px) {
    padding-top: 60px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .main-row {
    margin-top: 2rem;

    @media only screen and (max-width: 767px) {
      margin-top: 0;
    }
  }

  .sticky-card {
    position: sticky;
    top: 20px;
  }
}

</style>