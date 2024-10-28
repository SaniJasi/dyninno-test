<script setup lang="ts">
import data from "~/assets/json/data.json";
</script>

<template>
  <section class="py-10">
    <SiteWrap>
      <div class="flex flex-col md:flex-row gap-10" v-if="data">
        <article>
          <div class="flex items-center gap-3 mb-10">
            <img
              src="/user.webp"
              alt="user"
              width="80"
              height="80"
              loading="lazy"
            />
            <div>
              <h1 class="text-4xl font-semibold m-0">{{ data.name }}</h1>
              <span class="text-sm text-gray-400">{{ data.position }}</span>
            </div>
          </div>
          <p>{{ data.description }}</p>
          <h2 class="text-2xl font-bold mt-10">Employment History</h2>
          <ul>
            <li
              v-for="{
                name,
                period,
                description,
                skills,
                _uid,
              } in data.employers"
              :key="_uid"
            >
              <h3 v-if="name" class="text-lg font-semibold mt-6">
                {{ name }}
              </h3>
              <span v-if="period" class="text-gray-400 block mb-3 text-sm">{{
                period
              }}</span>
              <p v-if="description" class="mb-2">{{ description }}</p>
              <p><strong>Skills</strong>: {{ skills }}</p>
            </li>
          </ul>
          <template v-if="data.education">
            <h2 class="text-xl font-bold mt-10">Education</h2>
            <ul>
              <li v-for="{ _uid, name, period } in data.education">
                <h3 v-if="name" class="text-lg font-semibold mt-6">
                  {{ name }}
                </h3>
                <p v-if="period" class="text-gray-400 mb-3 text-sm">
                  {{ period }}
                </p>
              </li>
            </ul>
          </template>
        </article>
        <aside class="md:w-100">
          <div class="flex flex-col gap-2 md:sticky top-10">
            <p v-if="data.city">
              {{ data.city
              }}<template v-if="data.country">, {{ data.country }}</template>
            </p>
            <p v-if="data.phone">
              <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
            </p>
            <p v-if="data.email">
              <a :href="`mailto:${data.email}`">{{ data.email }}</a>
            </p>
            <p v-if="data.linkedin">
              <a :href="data.linkedin" target="_blank" rel="noopener noreferrer"
                >LinkedIn</a
              >
            </p>
            <template v-if="data.skills.length > 0">
              <p
                v-for="({ skill, experience }, index) in data.skills"
                :key="index"
                class="flex justify-between text-sm gap-2"
              >
                <strong>{{ skill }}</strong>
                <span class="shrink-0">{{ experience }}</span>
              </p>
            </template>
          </div>
        </aside>
      </div>
      <div v-else>
        <UiTextDefaultText>
          <h1>Nothing Found</h1>
          <p>
            Unfortunately, the page you’re looking for doesn’t exist. It might
            have been removed or moved to a different location.
          </p>

          Return to the homepage
        </UiTextDefaultText>
      </div>
    </SiteWrap>
  </section>
</template>
