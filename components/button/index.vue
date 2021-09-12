<template>
  <button :class="classes" :disabled="isDisabled" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { ButtonType, ButtonSize } from './types'
  const pre = 'soft-btn'

  type ButtonProps = {
    type?: ButtonType
    size?: ButtonSize
    round?: boolean
    circle?: boolean
    disabled?: boolean
    loading?: boolean
  }
  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
  })

  const isDisabled = computed(() => !!props.disabled)

  const emit = defineEmits(['click'])

  const classes = computed(() => {
    const { type, size, round, circle, disabled, loading } = props
    return {
      [`${pre}`]: true,
      [`${pre}-${type}`]: !!type,
      [`${pre}-${size}`]: !!size,
      [`${pre}-round`]: !!round,
      [`${pre}-circle`]: !!circle,
      [`${pre}-disabled`]: !!disabled,
      [`${pre}-loading`]: !!loading,
    }
  })

  const handleClick = (event: Event) => {
    emit('click', event)
  }
</script>
