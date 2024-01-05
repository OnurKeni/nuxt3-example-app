// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  // server side rendering mode
  ssr: true,
  // app
  app: {  
    head: {
      title: "Nuxt 3 Example",
      titleTemplate: "%s - Nuxt 3 Example",
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1"},
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 Example",
        },
      ],
      link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
    },
  },
  // build
  build: {
    transpile: ["@headlessui/vue"],
  },

  css: ['~/assets/scss/main.scss','animate.css/animate.min.css'],

  // auto import components
  components: true,

  runtimeConfig: {
    public: {
      API_BASE_URL: "https://64bf0d5d5ee688b6250d1ba1.mockapi.io/onurkenny",
    },
  },
});
