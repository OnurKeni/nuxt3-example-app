<template>
  <div class="h-full pt-17">
    <!-- <NuxtWelcome /> -->
      <o-header />
    <nuxt-page />
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
</script>