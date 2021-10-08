<template>
  <div class="menu-item" @click="onClickItem">{{ props.item.meta.title }}</div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { AppRouteRecordRaw } from '../router'
  type MenuItemProps = {
    item: AppRouteRecordRaw
    baseUrl: string
  }
  const props = defineProps<MenuItemProps>()
  const router = useRouter()
  const onClickItem = () => {
    const { baseUrl, item } = props
    if (item.children && item.children.length) return
    router.push({
      path: /^\//.test(item.path) ? item.path : `${baseUrl}/${item.path}`,
    })
  }
</script>

<style lang="less">
  .menu-item {
    padding: 4px 10px;
    font-size: 14px;
    cursor: pointer;
  }
</style>
