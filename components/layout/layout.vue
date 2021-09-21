<template>
  <section :class="classes"><slot /></section>
</template>

<script lang="ts">
  export default {
    name: 'SLayout',
  }
</script>
<script setup lang="ts">
  import type { Component, VNode } from 'vue'
  import { computed, useSlots } from 'vue'

  const pre = 'soft-layout'

  const isHasSider = computed(() => {
    const slots = useSlots()
    if (slots && slots.default) {
      const vNodes: VNode[] = slots.default()
      return vNodes.some((vNode) => {
        const { name: tag } = vNode.type as Component
        return tag === 'SSider'
      })
    }
    return false
  })

  const classes = computed(() => {
    return {
      [`${pre}`]: true,
      [`${pre}-has-sider`]: isHasSider.value,
    }
  })
</script>
