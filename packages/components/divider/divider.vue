<template>
  <div :class="classes" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const pre = 'soft-divider'
  export type DividerProps = {
    type?: 'horizontal' | 'vertical'
    dashed?: boolean
  }

  const props = withDefaults(defineProps<DividerProps>(), {
    dashed: false,
    type: 'horizontal',
  })

  const classes = computed(() => {
    const { type, dashed } = props
    return {
      [`${pre}`]: true,
      [`${pre}-horizontal`]: type === 'horizontal',
      [`${pre}-vertical`]: type === 'vertical',
      [`${pre}-dashed`]: dashed,
    }
  })
</script>

<style lang="less"></style>
