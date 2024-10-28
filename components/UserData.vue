<script setup lang="ts">
defineProps<{
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
}>();
</script>

<template>
  <div class="flex gap-5 items-start">
    <img
      :src="picture.large"
      :alt="name.first"
      loading="lazy"
      width="100"
      height="100"
      class="block object-cover shrink-0 rounded-full shadow-md"
    />
    <div class="">
      <h3 class="text-xl font-medium mb-3">
        {{ name.title }} {{ name.first }} {{ name.last }}
      </h3>
      <ul class="flex flex-col gap-2">
        <li>
          <a :href="`tel: ${{ phone }}`">{{ phone }}</a>
        </li>
        <li>
          <a :href="`mailto: ${{ email }}`">{{ email }}</a>
        </li>
        <li>
          {{ location.city }}, {{ location.country }},
          {{ location.street.name }}, {{ location.street.number }},
          {{ location.postcode }}
        </li>
      </ul>
    </div>
  </div>
</template>
