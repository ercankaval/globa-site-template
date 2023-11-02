<script setup lang="ts">

const state = ref({
      name_lastname: '',
      phone: '',
      email: '',
      quantity: null,
      notes: '',
      newsletter_approve: true,
    }),
    nameLastnameRules = ref([
      (v: any) => !!v || 'Bu alan boş bırakılamaz'
    ]),
    phoneRules = ref([
      (v: any) => !!v || 'Bu alan boş bırakılamaz'
    ]),
    emailRules = ref([
      v => !!v || 'Bu alan boş bırakılamaz',
      v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Geçerli bir email girin',
    ]),
    quantityRules = ref([
      (v: any) => !!v || 'Bu alan boş bırakılamaz'
    ]),
    form = ref(),
    showMessage = ref({
      status: false,
      text: '',
      type: ''
    })
const submitForm = async () => {
  const {valid, errors} = await form.value.validate()
  console.log('v', valid)
  console.log('e', errors)

  if (valid) {
    form.value.reset()
    showMessage.value = {
      status: true,
      text: 'Mesajınız başarılı bir şekilde bize ulaşmıştır. En kısa sürede sizinle iletişime geçeceğiz.',
      type: 'success'
    }
  }
}

</script>

<template>
  <v-form ref="form" class="mx-2">

    <v-alert
        v-if="showMessage.status"
        :type="showMessage.type"
        :text="showMessage.text"
        closable
        class="mb-3"
    ></v-alert>

    <v-row>
      <v-col md="6" cols="12">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.name_lastname"
            :rules="nameLastnameRules"
            label="Ad Soyad"
            required
        ></v-text-field>
      </v-col>

      <v-col md="6" cols="12">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.phone"
            :rules="phoneRules"
            label="Telefon Numarası"
            required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row>
      <v-col md="6" cols="12">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.email"
            :rules="emailRules"
            label="Email Adresi"
            required
        ></v-text-field>
      </v-col>
      <v-col md="6" cols="12">
        <v-text-field
            variant="outlined"
            density="compact"
            type="number"
            min="1"
            v-model="state.quantity"
            :rules="quantityRules"
            label="Adet"
            required
        ></v-text-field>
      </v-col>

    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-col cols="12">
        <v-textarea
            variant="outlined"
            density="compact"
            v-model="state.notes"
            rows="2"
            label="Notlar"
            hide-details
        ></v-textarea>
      </v-col>
    </v-row>

    <v-spacer></v-spacer>

    <v-row class="mt-3">
      <v-col md="6" cols="12">
        <v-checkbox
            hide-details
            v-model="state.newsletter_approve"
            label="Kampanya ve bildirimlerden haberdar olmak için abone olun."
        ></v-checkbox>
      </v-col>

      <v-col md="6" cols="12">
        <v-card-actions class="justify-end pa-0 ma-0">
          <v-btn @click="submitForm" class="w-50">Teklif Al</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>

    <v-alert
        type="info"
        :icon="false"
        density="compact"
        text="Adete göre fiyat değişmektedir. Müşteri temsilcilerimizden teklif almak için formu doldurun."
        class="mt-3"
    ></v-alert>
  </v-form>
</template>

<style scoped lang="scss">
.v-form {

  .v-card-actions {
    display: flex;
    justify-content: space-between;
    margin: 16px 0;

    .v-btn {
      width: 40%;
      border: 1px solid $themePrimaryColor;
      padding: 16px 24px;
      height: auto;
      text-transform: inherit;
      letter-spacing: 0;
      font-weight: 600;
      font-size: 14px;
      border-radius: 4px;
      background: $themePrimaryColor;
      color: #FFFFFF;

      @media only screen and (max-width: 767px) {
        width: 100% !important;
      }
    }
  }

  .v-col-md-6 + .v-col-md-6 {
    @media only screen and (max-width: 767px) {
      padding-top: 0;
    }
  }
}
</style>