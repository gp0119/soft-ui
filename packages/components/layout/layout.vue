<template>
  <section :class="classes"><slot /></section>
</template>

<script setup lang="ts">
  import { computed, provide, ref } from 'vue'
  import { layoutProviderKey } from './util'

  const pre = 'soft-layout'

  const siders = ref<string[]>([])
  const layoutProvider = {
    addSider(id: string) {
      siders.value = [...siders.value, id]
    },
    removeSider(id: string) {
      siders.value = siders.value.filter((currentId) => currentId !== id)
    },
  }

  provide(layoutProviderKey, layoutProvider)

  const classes = computed(() => {
    return {
      [`${pre}`]: true,
      [`${pre}-has-sider`]: siders.value.length > 0,
    }
  })
</script>
