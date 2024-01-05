<template>
    <div id="our-products" class="py-10 font-poppins">
        <h2 class="text-4xl text-center text-dark-base font-bold mb-8">Our Products</h2>
        <div class="grid grid-cols-12 gap-3 sm:gap-8 px-3 px-sm-0">
            <div

                v-for="(product, i) in products.slice(0,limit)"
                :key="`${product}${i}`"
                class="card relative flex flex-col group col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 text-primary-base rounded-lg overflow-hidden "
            >
                <div class="relative overflow-hidden">
                    <img :src="product.image"
                         alt=""
                         class="w-full object-cover h-[280px] ">
                    <div v-if="product.discount || product.isNew"  :class="product.discount ? 'bg-red-base' : 'bg-green-base'"
                         class="absolute top-2 right-2 p-6 w-10 h-10 flex items-center justify-center rounded-full text-white group-hover:opacity-25 text-sm tracking-wide font-semibold">
                                {{ product.discount ? `-${product.discount}%` : product.isNew ?  'New' : ''}}
                    </div>
                </div>
                <div class="flex flex-col p-4 bg-light-base flex-1">
                    <span class="text-xl text-gray-base font-semibold">{{ product.name }}</span>
                    <span class="block text-sm text-gray-30">{{ product.category }}</span>
                   <div class="flex justify-between items-center  mt-auto ">
                        <span class="text-xl pt-2">
                            $<b class="font-semibold">{{ getDiscountPrice(product.price,product.discount) }}</b>
                        </span>
                       <span v-if="product.discount" class="text-base text-gray-40 pt-2 font-normal line-through">
                            ${{ product.price }}
                    </span>
                   </div>

                </div>
                <div
                    class="flex flex-col justify-center items-center hover:cursor-pointer opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition absolute inset-0 bottom-0 font-semibold before:absolute before:inset-0 before:z-0 before:bg-dark-base before:opacity-70">
                    <span class="relative text-white text-center pb-2 tracking-wider text-2xl">
                        {{ product.name }}
                    </span>
                    <div class=" relative pt-4 text-center">
                        <nuxt-link
                            :id="`add-to-card-btn-${i}`"
                            class="text-primary-base bg-white font-semibold py-3 px-8 hover:text-white hover:bg-primary-base"
                            :to="`/shop`">
                            Add To Cart
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div
                v-if="products.length > 8 && limit <= 8"
                class="flex justify-center col-span-12 overflow-hidden mt-5 sm:mt-0"
            >
                <button
                    :id="`show-more-btn`"
                    class="text-primary-base  font-semibold py-3 px-8 border border-primary-base hover:text-white hover:bg-primary-base max-w-[245px] w-full"
                    type="button"
                    @click="limit = products.length">
                    Show More
                </button>
            </div>

        </div>
    </div>
</template>
<script setup>
defineProps({
    products: {
        type: Object,
        default: null,
    },
});

const limit = ref(8);

function getDiscountPrice(price, discount) {
    return  discount ? Math.floor((price/100)*discount) : price

}
</script>
<style lang="scss" scoped>
.card {
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  transition: all 300ms ease-in-out;

  &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  }
}

</style>