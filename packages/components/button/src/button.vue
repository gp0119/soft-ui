<template>
  <component :is="tagName" :class="classes" v-bind="attrs" @click="handleClick">
    <Icon v-if="isLoading" class="soft-load-loop" type="icon-loading" />
    <Icon v-if="props.icon && !isLoading" :type="props.icon" />
    <span v-if="$slots.default"><slot /></span>
  </component>
</template>

<script setup lang="ts">
  import { computed, useSlots } from 'vue'
  import type { ButtonType, ButtonSize } from '../types'
  import Icon from '../../icon/icon.vue'
  const pre = 'soft-btn'

  export type ButtonProps = {
    type?: ButtonType
    size?: ButtonSize
    icon?: string
    href?: string
    round?: boolean
    circle?: boolean
    disabled?: boolean
    loading?: boolean
    long?: boolean
  }
  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
  })
  const slots = useSlots()
  const tagName = computed(() => (props.type === 'link' && props.href ? 'a' : 'button'))

  const attrs = computed(() => {
    const attr: Record<string, unknown> = {}
    if (!!props.disabled) attr.disabled = !!props.disabled
    if (!!props.href) attr.href = props.href
    return attr
  })
  const isLoading = computed(() => !!props.loading && props.type !== 'link' && props.type !== 'text')

  const classes = computed(() => {
    const { type, size, round, circle, disabled, loading, long } = props
    return {
      [`${pre}`]: true,
      [`${pre}-${type}`]: !!type,
      [`${pre}-${size}`]: !!size,
      [`${pre}-round`]: !!round,
      [`${pre}-circle`]: !!circle,
      [`${pre}-disabled`]: !!disabled,
      [`${pre}-loading`]: !!loading,
      [`${pre}-square`]: !slots.default && !circle,
      [`${pre}-long`]: !!long,
    }
  })

  const emit = defineEmits(['click'])
  const handleClick = (event: Event) => {
    if (isLoading.value || props.disabled) {
      event.preventDefault()
      return
    }
    emit('click', event)
  }
</script>
