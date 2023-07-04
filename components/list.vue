<template>
  <div class="pt-10">
    <h1 class="text-4xl text-center">List</h1>
    <ul>
      <li
        v-for="(n, i) in 5"
        :key="`${n}${i}`"
        class="text-white"
        :class="isColor ? 'text-teal-700' : 'text-white'"
      >
        List item
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  categories: {
    type: Array,
    default: null,
  },
  isColor: {
    type: Boolean,
    default: false,
  },
});
</script>