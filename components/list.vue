<template>
    <div class="py-10">
        <h1 class="text-4xl text-center text-dark-base font-bold mb-8">Our Products</h1>
        <div class="grid grid-cols-12 gap-3 sm:gap-8 px-3 px-sm-0">
            <div
                    v-for="(product, i) in products"
                    :key="`${product}${i}`"
                    class="card col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-primary-base rounded-lg overflow-hidden "
            >
                <div class="overflow-hidden">
                    <img alt="" class="w-full object-cover max-h-[280px]" :src="product.image">
                </div>
                <div class="p-4 bg-light-base">
                    <span class="text-gray-base font-semibold">{{product.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
    products: {
        type: Object,
        default: null,
    },
});
// console.log('asd', this.products)
const limit = ref(8);
</script>
<style lang="scss" scoped>
.card {
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;

    img {
      cursor: pointer;
      transform: scale(1.5);
      transition: all 400ms ease-in-out;
    }
  }
}
</style>