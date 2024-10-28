<script setup lang="ts">
defineProps<{
  placeholder: string;
  type: string;
}>();
const model = defineModel();
</script>

<template>
  <input
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    required
    class="border px-3 h-11 rounded-md"
  />
</template>
