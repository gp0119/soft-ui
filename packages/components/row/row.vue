<template>
  <component :is="props.tag" :style="style" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
  import { computed, provide, toRef } from 'vue'
  const pre = 'soft-row'

  export type RowProps = {
    tag?: string
    gutter?: number | string
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
    align?: 'top' | 'middle' | 'bottom'
  }

  const props = withDefaults(defineProps<RowProps>(), {
    tag: 'div',
  })
  provide('SRow', { gutter: toRef(props, 'gutter') })

  const classes = computed(() => {
    const { justify, align } = props
    return {
      [`${pre}`]: true,
      [`${pre}-justify-${justify}`]: !!justify,
      [`${pre}-align-${align}`]: !!align,
    }
  })

  const style = computed(() =>
    props.gutter
      ? {
          marginLeft: `-${Number(props.gutter) / 2}px`,
          marginRight: `-${Number(props.gutter) / 2}px`,
        }
      : {}
  )
</script>

<style lang="less"></style>
