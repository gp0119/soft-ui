<template>
  <i :class="classes" :style="styles" @click="handleClick" />
</template>

<script setup lang="ts">
  import { computed, withDefaults } from 'vue'

  export type IconType = {
    type: string
    size?: string | number
    color?: string
  }
  const prefixCls = 'soft-icon'
  const emit = defineEmits(['click'])
  const props = withDefaults(defineProps<IconType>(), {})
  const classes = computed(() => {
    const { type } = props
    return [`${prefixCls}`, `${type}`]
  })
  const styles = computed(() => {
    const style: Record<string, string> = {}
    const { size, color } = props
    if (size) {
      style['font-size'] = `${size}px`
    }
    if (color) {
      style.color = color
    }
    return style
  })
  const handleClick = (event: Event) => {
    emit('click', event)
  }
</script>
