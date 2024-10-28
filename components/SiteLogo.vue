<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>

<template>
  <NuxtLink
    href="/"
    class="text-white font-semibold text-lg"
    :style="{ color: color }"
    >Site logo</NuxtLink
  >
</template>
