<template>
<div class="grid grid-cols-12 gap-8 px-3">
    <div class="col-span-12 text-center">
        <h2 class="text-4xl text-center text-dark-base font-bold">Browse The Range</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
    </div>
    <div v-for="(category, i) in categories.slice(0,limit)"
           :key="`${category}${i}`"
           class="card hover:cursor-pointer relative group col-span-12 sm:col-span-6 md:col-span-4">
       <div class="relative overflow-hidden rounded-lg">
           <img :src="category.image" alt="" class="w-full h-[480px] object-cover  transition duration-300 ease-in-out hover:scale-110">
       </div>
       <div class="mt-5 text-center text-xl text-dark-base font-semibold group-hover:text-primary-base">
           {{category.name}} <span class="material-symbols-rounded">
search
</span>
       </div>
    </div>
</div>
</template>

<script setup >
defineProps({
    categories: {
        type: Object,
        default: null,
    },
});
const limit = ref(3);
</script>