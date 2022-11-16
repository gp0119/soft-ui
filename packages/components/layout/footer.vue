<template>
  <footer :class="classes" :style="style"><slot /></footer>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const pre = 'soft-layout-footer'
  export type FooterProps = {
    height?: number | string
  }
  const props = withDefaults(defineProps<FooterProps>(), {})
  const style = computed(() =>
    props.height
      ? {
          '--layoutFooterHeight': props.height + 'px',
        }
      : {}
  )
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
</script>
