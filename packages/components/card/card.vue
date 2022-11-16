<template>
  <div :class="classes">
    <div v-if="$slots.cover" :class="`${pre}-cover`"><slot name="cover" /></div>
    <div v-if="$slots.title || $slots.extra || props.title" :class="`${pre}-header`">
      <slot name="title">
        <div v-if="props.title" :class="`${pre}-title`">{{ props.title }}</div>
      </slot>
      <div v-if="$slots.extra" :class="`${pre}-extra`"><slot name="extra" /></div>
    </div>
    <div v-if="$slots.default" :class="`${pre}-body`"><slot /></div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const pre = 'soft-card'
  export type CardProps = {
    title?: string
    size?: 'default' | 'small'
    insert?: boolean
  }
  const props = withDefaults(defineProps<CardProps>(), {
    size: 'default',
  })

  const classes = computed(() => {
    const { insert } = props
    return {
      [`${pre}`]: true,
      [`${pre}-insert-shadow`]: insert,
    }
  })
</script>
