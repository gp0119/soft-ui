<template>
  <component :is="props.tag" :style="style" :class="classes"><slot /></component>
</template>

<script setup lang="ts">
  import { computed, inject } from 'vue'
  const pre = 'soft-col'
  type SizeObject = {
    span: number
    offset: number
  }
  type ColSize = {
    span?: number | string
    offset?: number | string
    order?: number | string
    push?: number | string
    pull?: number | string
  }
  export type ColProps = {
    span?: number | string
    offset?: number | string
    order?: number | string
    push?: number | string
    pull?: number | string
    tag?: string
    xs?: number | SizeObject
    sm?: number | SizeObject
    md?: number | SizeObject
    lg?: number | SizeObject
    xl?: number | SizeObject
    xxl?: number | SizeObject
  }

  const props = withDefaults(defineProps<ColProps>(), {
    tag: 'div',
  })
  const classes = computed(() => {
    const { span, order, offset, push, pull } = props
    let sizeClassObj = {}
    ;['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach((size) => {
      let sizeProps: ColSize = {}
      const propSize = props[size]
      if (typeof propSize === 'number') {
        sizeProps.span = propSize
      } else if (typeof propSize === 'object') {
        sizeProps = propSize || {}
      }

      sizeClassObj = {
        ...sizeClassObj,
        [`${pre}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
        [`${pre}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
        [`${pre}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
        [`${pre}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
        [`${pre}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
      }
    })
    return {
      [`${pre}`]: true,
      [`${pre}-span-${span}`]: span !== undefined,
      [`${pre}-order-${order}`]: order,
      [`${pre}-offset-${offset}`]: offset,
      [`${pre}-push-${push}`]: push,
      [`${pre}-pull-${pull}`]: pull,
      ...sizeClassObj,
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
