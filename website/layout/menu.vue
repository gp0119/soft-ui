<template>
  <div class="app-asider">
    <div v-for="item in menuList" :key="item.path" class="menu-item-wrapper">
      <MenuItem :base-url="item.path" :item="item" />
      <div v-if="item.children" class="sub-menu-item-wrapper">
        <template v-for="child in item.children" :key="child.path">
          <MenuItem :base-url="item.path" :item="child" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MenuItem from './menu-item.vue'

  export type MenuItemType = {
    path?: string
    title: string
  }

  const menuList: {
    path?: string
    title: string
    children?: MenuItemType[]
  }[] = [
    {
      path: '/getting-started',
      title: '快速上手',
    },
    {
      title: 'Basic 基础组件',
      children: [
        {
          path: '/button',
          title: 'Button 按钮',
        },
        {
          path: '/grid',
          title: 'Grid 布局',
        },
        {
          path: '/icon',
          title: 'Icon 图标',
        },
        {
          path: '/layout',
          title: 'Layout 容器',
        },
      ],
    },
    {
      title: '数据展示',
      children: [
        {
          path: '/card',
          title: 'Card 卡片',
        },
      ],
    },
  ]
</script>

<style lang="less">
  .app-asider {
    height: 100%;
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    width: 300px;
    padding: 40px 0;
    .menu-item-wrapper {
      padding: 0 40px;
    }
  }
</style>
