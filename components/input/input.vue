<template>
  <div :class="classes">
    <template v-if="props.type === 'input'">
      <input
        :class="[`${pre}-inner`]"
        :type="props.type"
        :value="props.modelValue"
        :placeholder="props.placeholder"
        @input="handleInput"
        @change="handleChange"
      />
    </template>
    <template v-else>
      <textarea id="" name="" cols="30" rows="10" />
    </template>
  </div>
</template>

<script setup lang="ts">
  import type { VNode } from 'vue'
  import { computed } from 'vue'

  export type InputProps = {
    type?: string
    modelValue: string
    clearable?: boolean
    disabled?: boolean
    placeholder?: string
    prefix?: string | VNode
    subfix?: string | VNode
  }
  type TargetElement = HTMLInputElement | HTMLTextAreaElement
  const pre = 'soft-input'
  const props = withDefaults(defineProps<InputProps>(), {
    type: 'input',
    clearable: false,
  })
  const emit = defineEmits(['update:modelValue', 'change'])
  const classes = computed(() => {
    const { clearable, disabled } = props
    return {
      [pre]: true,
      [`${pre}-clearable`]: clearable,
      [`${pre}-disabled`]: disabled,
    }
  })
  const handleInput = (event: Event) => {
    emit('update:modelValue', (event.target as TargetElement).value)
  }
  const handleChange = (event: Event) => {
    emit('change', (event.target as TargetElement).value)
  }
</script>

<style lang="less"></style>
