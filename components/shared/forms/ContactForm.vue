<script setup lang="ts">
import {useGlobalStore} from "~/store/globalStore";

const state = ref({
      name_lastname: '',
      phone: '',
      email: '',
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
    state.value.newsletter_approve = true
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

    <v-row>

      <v-col cols="12" class="py-0">
      <v-alert
          v-if="showMessage.status"
          :type="showMessage.type"
          :text="showMessage.text"
          closable
          class="mb-3"
      ></v-alert>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.name_lastname"
            :rules="nameLastnameRules"
            label="Ad Soyad"
            required
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.phone"
            :rules="phoneRules"
            label="Telefon Numarası"
            required
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-text-field
            variant="outlined"
            density="compact"
            v-model="state.email"
            :rules="emailRules"
            label="Email Adresi"
            required
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="py-0">
        <v-textarea
            variant="outlined"
            density="compact"
            v-model="state.notes"
            rows="2"
            label="Notlar"
            hide-details
        ></v-textarea>
      </v-col>

      <v-col cols="12" class="pa-0 mt-3">
        <v-checkbox
            hide-details
            v-model="state.newsletter_approve"
            label="Kampanya ve bildirimlerden haberdar olmak için abone olun."
        ></v-checkbox>
      </v-col>

      <v-col cols="12" class="pa-0 mt-3">
        <v-card-actions class="justify-end pa-0 ma-0">
          <v-btn @click="submitForm" class="w-50">Teklif Al</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-form>
</template>

<style scoped lang="scss">
.v-form {
  margin-top: 2rem;
  margin-bottom: 1rem;

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
}
</style>