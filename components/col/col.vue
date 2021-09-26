<template>
  <component :is="props.tag" :style="style" :class="classes">col</component>
</template>

<script setup lang="ts">
  import { computed, inject } from 'vue'
  const pre = 'soft-col'
  type SizeObject = {
    span: number
    offset: number
  }
  export type ColProps = {
    span: number
    offset: number
    push: number
    pull: number
    tag: string
    xs: number | SizeObject
    sm: number | SizeObject
    md: number | SizeObject
    lg: number | SizeObject
    xl: number | SizeObject
  }

  const props = withDefaults(defineProps<ColProps>(), {
    tag: 'div',
    span: 0,
    offset: 0,
    push: 0,
    pull: 0,
  })
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
  const style = computed(() => {
    const { gutter } = inject('SRow')
    if (gutter.value) {
      return {
        paddingLeft: `${gutter.value / 2}px`,
        paddingRight: `${gutter.value / 2}px`,
      }
    }
    return {}
  })
</script>

<style lang="less"></style>
