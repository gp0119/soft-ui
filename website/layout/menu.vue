<template>
  <div class="app-asider">
    <div v-for="item in filterRoutes" :key="item.path" class="menu-item-wrapper">
      <MenuItem :base-url="item.path" :item="item" class="menu-item-title" />
      <div v-if="item.children" class="sub-menu-item-wrapper">
        <template v-for="child in item.children" :key="child.path">
          <MenuItem :base-url="item.path" :item="child" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import type { AppRouteRecordRaw } from '../router'
  import MenuItem from './menu-item.vue'

  const routes = useRouter().options.routes as AppRouteRecordRaw[]
  const filterRoutes = routes.filter((item) => !item.meta.hidden)
  const route = useRoute()
  console.log(route)
</script>

<style lang="less">
  .app-asider {
    transition: width 0.28s;
    width: calc((100% - 1376px) / 2 + 288px);
    padding: 24px 32px 96px calc((100% - 1376px) / 2);
    height: 100%;
    position: fixed;
    top: 60px;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    .menu-item-wrapper {
      padding: 0 40px;
      .menu-item-title {
        font-size: 16px;
        font-weight: 440;
      }
      .sub-menu-item-wrapper {
        padding-left: 1em;
      }
    }
  }
</style>
