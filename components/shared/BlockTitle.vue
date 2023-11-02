<script setup lang="ts">

const props = defineProps({
  title: String
})
</script>

<template>
  <v-row>
    <v-col cols="12" class="block-title">
      <h2>{{ props.title }}</h2>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.block-title {
  h2 {
    padding: 1rem 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }
}
</style>