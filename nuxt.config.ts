// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  // server side rendering mode
  ssr: false,
  // app
  app: {  
    head: {
      title: "Nuxt 3 Example",
      titleTemplate: "%s - Nuxt 3 Example",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 Example",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  // build
  build: {
    transpile: ["@headlessui/vue"],
  },

  // auto import components
  components: true,

  runtimeConfig: {
    public: {
      API_BASE_URL: "https://fakestoreapi.com",
    },
  },
});
