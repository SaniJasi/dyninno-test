<script setup lang="ts">
const menu = [
  {
    _uid: "menu-1",
    name: "Public",
    link: "/public",
  },
  {
    _uid: "menu-2",
    name: "Protected",
    link: "/protected",
  },
];
</script>

<template>
  <header class="site-header shadow-xl h-16 flex items-center">
    <SiteWrap>
      <div class="flex justify-between gap-4 items-center">
        <SiteLogo color="black" />
        <nav>
          <ul class="flex gap-4">
            <li v-for="{ _uid, name, link } in menu" :key="_uid">
              <NuxtLink :href="link">
                {{ name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </SiteWrap>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  nav {
    .router-link-active {
      @apply text-indigo-950 underline;
    }
  }
}
</style>
