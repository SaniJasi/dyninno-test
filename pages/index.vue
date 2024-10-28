<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
const username = ref("");
const password = ref("");
const error = ref(false);

const config = useRuntimeConfig();
const isAuthenticated = useCookie("isAuthenticated");

const handleLogin = () => {
  error.value = false;
  if (
    username.value === config.public.adminUsername &&
    password.value === config.public.adminPassword
  ) {
    isAuthenticated.value = "true";
    navigateTo("/protected");
  } else {
    error.value = true;
  }
};

const handleLogout = () => {
  isAuthenticated.value = null;
  navigateTo("/");
};
</script>

<template>
  <SiteWrap>
    <div
      class="flex flex-col justify-center items-center min-h-[calc(100vh-156px)] py-10"
    >
      <h1 class="text-4xl font-semibold mb-10">Login Page</h1>
      {{ config.adminUsername }}
      <form
        @submit.prevent="handleLogin"
        class="flex flex-col gap-5 w-full max-w-80"
      >
        <input
          type="email"
          v-model="username"
          placeholder="Username"
          required
          class="border px-3 h-11 rounded-md"
        />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
          class="border px-3 h-11 rounded-md"
        />
        <UiButtonsPrimaryButton>Login</UiButtonsPrimaryButton>
      </form>
      <Transition
        ><div v-if="error" class="text-red-600 mt-5">
          Please enter a valid data.
        </div></Transition
      >
    </div>
  </SiteWrap>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
