import { defineStore } from "pinia";

export const useProducts = defineStore("products", {
  state: () => {
    return {
      // [
      //   {
      //       id:1,
      //       title:'...',
      //       price:'...',
      //       category:'...',
      //       description:'...',
      //       image:'...'
      //   },
      //  /*...*/
      // ]
      products: [],
      // ["electronics","jewelery","men's clothing","women's clothing"]
      categories: [],
      // sort: "asc"
    };
  },
  actions: {
    async getProducts() {
      this.products = [];
      const config = useRuntimeConfig();
      const { data: products } = await useFetch(
        `${config.public.API_BASE_URL}/products`,
        { initialCache: false }
      );
      console.log('onnr products', products)
      this.products = products;
    },

    async getCategories() {
      this.categories = [];
      const config = useRuntimeConfig();
      const { data: categories } = await useFetch(
          `${config.public.API_BASE_URL}/categories`,
          { initialCache: false }
      );
      this.categories = categories;
    },
  }
});
