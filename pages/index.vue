<template>
    <section class="bg-white">
        <banner/>
        <div class="container mx-auto">
          <lazy-categories class="pt-14 pb-7" v-if="categories && categories.length"  :categories="categories"/>
         <lazy-list class="py-7" v-if="products && products.length" :products="products"/>
        </div>
    </section>
</template>
<script setup>
import {useProducts} from "~/stores/products";

const productsStore = useProducts();
await productsStore.getProducts();
await productsStore.getCategories();
const products = [...productsStore.products];
const categories = [...productsStore.categories];

</script>