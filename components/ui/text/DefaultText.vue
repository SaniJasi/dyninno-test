<script setup lang="ts">
defineProps<{
  txtCenter?: boolean;
}>();
</script>

<template>
  <div class="default-text" :class="txtCenter && 'text-center'">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default-text {
  @apply py-10;
}
</style>
