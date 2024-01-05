<template>
<div class="flex justify-end items-center bg-hero bg-cover bg-bottom h-[280px] md:h-[400px] lg:h-[700px]">
  <div
        class="brand-card hidden md:flex flex-col px-9 pb-9 pt-16 md:mr-12 bg-[#FFF3E3] rounded-xl max-w-[643px] shadow-[0_5px_15px_rgba(0, 0, 0, 0.35)] animate__animated animate__fadeInRight">
    <span  class="text-[#333] text-base mb-2">New Arrival</span>
    <span  class="text-6xl text-[#B88E2F] font-bold mb-4">Discover Our <br> New Collection</span>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
    <nuxt-link
        :to="`#our-products`"
        :id="`show-products-btn`"
        class="text-center font-semibold py-3 px-8 mt-8 border border-primary-base text-white bg-primary-base hover:text-primary-base hover:bg-transparent max-w-[245px] w-full rounded"
        type="button"
        @click="limit = products.length">
      Go Products
    </nuxt-link>
  </div>
</div>
</template>

<script setup lang="ts">
onMounted(() => {

  if (window.location.hash) {
    window.location.href = window.location.href.split('#')[0]
  }
})
</script>