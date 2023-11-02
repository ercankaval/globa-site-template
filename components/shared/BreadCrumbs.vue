<script setup lang="ts">
const props = defineProps({
      data: {
        type: Array,
        default: []
      },
    }),
    items = computed(() => props.data?.length ? props.data : [])

</script>

<template>
  <ul class="v-breadcrumbs">
    <li
        v-for="(item, i) in items"
        :key="i"
        class="v-breadcrumbs-item"
        :class="{'v-breadcrumbs-item--disabled' : item.disabled}">
      <nuxt-link class="v-breadcrumbs-item--link" :href="item.link">{{ item.title }}</nuxt-link>
      <v-icon v-if="i+1 !== items.length" icon="mdi-chevron-right" class="ml-3"></v-icon>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.v-breadcrumbs {
  justify-content: center;

  :deep(.v-breadcrumbs-item) {
    font-size: 14px;
    font-weight: 600;
  }

  :deep(.v-breadcrumbs-divider) {
    font-size: 14px;
    opacity: 0.4;
  }
}
</style>