<template>
  <header :class="classes" :style="style"><slot /></header>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const pre = 'soft-layout-header'
  export type HeaderProps = {
    height?: number | string
  }
  const props = withDefaults(defineProps<HeaderProps>(), {
    height: 60,
  })
  const style = computed(() =>
    props.height
      ? {
          '--layoutHeaderHeight': props.height + 'px',
        }
      : {}
  )
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
</script>
