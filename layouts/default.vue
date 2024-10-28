<template>
  <div class="site-page">
    <SiteHeader />
    <main class="site-main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped lang="scss">
.site-page {
  @apply flex flex-col min-h-svh;
}

.site-main {
  @apply flex-1;
}
</style>
