<template>
  <div class="menu-item" :class="classes" @click="onClickItem">{{ item.title }}</div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'
  import type { MenuItemType } from './menu.vue'

  type MenuItemProps = {
    item: {
      path?: string
      title: string
      children?: MenuItemType[]
    }
  }
  const props = defineProps<MenuItemProps>()
  const router = useRouter()
  const classes = computed(() => {
    const route = useRoute()
    return {
      active: route.path === props.item.path,
      title: props.item.children && props.item.children.length,
    }
  })
  const onClickItem = () => {
    const { item } = props
    if (item.children && item.children.length) return
    router.push({
      path: item.path,
    })
  }
</script>

<style lang="less">
  .menu-item {
    padding: 4px 10px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    &.active {
      color: var(--primaryColor);
    }
    &:hover {
      color: var(--primaryColor);
    }
    &.title {
      color: rgba(0, 0, 0, 0.45);
    }
  }
</style>
