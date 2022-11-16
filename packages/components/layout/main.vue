<template>
  <main :class="classes"><slot /></main>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const pre = 'soft-layout-main'
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
</script>
