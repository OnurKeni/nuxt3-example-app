<template>
    <section class="bg-white h-full">
        <banner/>
        <div class="container mx-auto">
         <list v-if="products && products.length" :products="products"/>
        </div>
    </section>
</template>
<script setup>
import {useProducts} from "~/stores/products";

const productsStore = useProducts();
await productsStore.getProducts();
await productsStore.getCategories();
const products = [...productsStore.products];
const categories = [ ...productsStore.categories];
console.log('onr products', products);
console.log('onr categories', categories);


// State
const currentCategory = ref("all");
const sortOptions = ref([
    {name: "asc", href: "#", current: true},
    {name: "desc", href: "#", current: false},
])

function sortBy(sort) {
    sortOptions.value = sortOptions.value.map((option) => {
        option.current = option.name === sort.name;
        return option;
    });

    sortProducts(sort.name);
}

async function sortProducts(sort) {
    productsStore.setSort(sort);
    currentCategory.value === "all"
        ? await productsStore.getProducts()
        : await productsStore.getProductsByCategory(currentCategory.value)
}
</script>