<template>
  <div>
    <div>{{ props.item.meta.title }}</div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  type MenuItemProps = {
    item: {
      path: string
      meta: {
        title: string
      }
    }
    baseUrl: string
  }
  const props = defineProps<MenuItemProps>()
  console.log(props)

  const resolvedPath = computed(() => {
    const { baseUrl, item } = props
    if (/^\//.test(item.path)) {
      return item.path
    }
    return `${baseUrl}/${item.path}`
  })
  console.log(resolvedPath)
</script>

<style lang="less"></style>
