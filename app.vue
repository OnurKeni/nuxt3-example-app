<template>
  <div class="h-full pt-17">
      <o-header />
      <nuxt-page />
      <o-footer />
  </div>
</template>
<style>
html,
body,
#__nuxt {
  height: 100%;
}
</style>
<script setup lang="ts">
import OHeader from "~/components/o-header.vue";
import OFooter from "~/components/o-footer.vue";
</script>