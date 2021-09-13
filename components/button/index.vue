<template>
  <button :class="classes" :disabled="isDisabled" @click="handleClick">
    <Icon v-if="isLoading" class="soft-load-loop" type="icon-loading-b" />
    <Icon v-if="props.icon && !isLoading" :type="props.icon" />
    <span v-if="$slots"><slot /></span>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { ButtonType, ButtonSize } from './types'
  import Icon from '../icon/index.vue'
  const pre = 'soft-btn'

  type ButtonProps = {
    type?: ButtonType
    size?: ButtonSize
    icon?: string
    round?: boolean
    circle?: boolean
    disabled?: boolean
    loading?: boolean
  }
  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
  })

  const isDisabled = computed(() => !!props.disabled)
  const isLoading = computed(() => !!props.loading && props.type !== 'link' && props.type !== 'text')

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

  const emit = defineEmits(['click'])
  const handleClick = (event: Event) => {
    emit('click', event)
  }
</script>
