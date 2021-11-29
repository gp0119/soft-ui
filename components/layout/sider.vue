<template>
  <aside :class="classes" :style="style"><slot /></aside>
</template>

<script setup lang="ts">
  import { computed, inject, onBeforeUnmount, onMounted } from 'vue'
  import { generateId, layoutProviderKey } from './util'

  const pre = 'soft-layout-sider'

  export type SiderProps = {
    width?: number | string
  }
  const layoutProvider = inject(layoutProviderKey, undefined)
  const uniqueId = generateId('soft-layout-sider-')

  onMounted(() => {
    layoutProvider && layoutProvider.addSider && layoutProvider.addSider(uniqueId)
  })
  onBeforeUnmount(() => {
    layoutProvider && layoutProvider.removeSider && layoutProvider.removeSider(uniqueId)
  })
  const props = withDefaults(defineProps<SiderProps>(), {
    width: 200,
  })
  const style = computed(() =>
    props.width
      ? {
          '--layoutSiderWidth': props.width + 'px',
        }
      : {}
  )
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
</script>
