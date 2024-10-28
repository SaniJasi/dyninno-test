<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
