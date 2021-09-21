<template>
  <footer :class="classes" :style="style"><slot /></footer>
</template>

<script lang="ts">
  export default {
    name: 'SFooter',
  }
</script>
<script setup lang="ts">
  import { computed } from 'vue'

  const pre = 'soft-layout-footer'
  export type FooterProps = {
    height?: number
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
