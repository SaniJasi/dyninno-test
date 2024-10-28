// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
  app: {
    pageTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      adminUsername: process.env.ADMIN_USERNAME,
      adminPassword: process.env.ADMIN_PASSWORD,
    },
  },
});
