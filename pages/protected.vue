<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

type User = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
  };
  dob: {
    date: string;
  };
  login: { uuid: string };
  phone: string;
  email: string;
  location: {
    city: string;
    country: string;
    postcode: string;
    street: {
      name: string;
      number: string;
    };
  };
};

type Users = {
  results: User[];
};

const page = ref(1);
const resultsPerPage = 10;
const users = ref<User[]>([]);
const isAuthenticated = useCookie("isAuthenticated");

const { data, status, error, refresh, clear } = await useAsyncData<Users>(
  "users",
  () =>
    $fetch("https://randomuser.me/api/", {
      params: {
        page: page.value,
        results: resultsPerPage,
      },
    }),
  {
    watch: [page],
  }
);

if (data.value) {
  users.value = data.value.results;
}

watch(data, (newData) => {
  if (newData?.results) {
    users.value = [...users.value, ...newData.results];
  }
});

const handleLoadMore = () => (page.value += 1);

const handleLogout = () => {
  isAuthenticated.value = null;
  navigateTo("/");
};
</script>

<template>
  <section v-if="data" class="py-10">
    <SiteWrap>
      <div class="flex flex-col sm:flex-row sm:justify-between mb-10 gap-5">
        <h1 class="text-4xl font-semibold">Users list</h1>
        <UiButtonsPrimaryButton @click="handleLogout"
          >Logout</UiButtonsPrimaryButton
        >
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-20 mb-10">
        <li v-for="user in users" :key="user.login.uuid">
          <UserData v-bind="user" />
        </li>
      </ul>

      <div class="text-center">
        <UiButtonsPrimaryButton
          @click="handleLoadMore"
          :disabled="status === 'pending'"
          >{{
            status === "success" ? "Load More" : "Loading..."
          }}</UiButtonsPrimaryButton
        >
      </div>
      <div v-if="error">An error occurred: {{ error.message }}</div>
    </SiteWrap>
  </section>
</template>
