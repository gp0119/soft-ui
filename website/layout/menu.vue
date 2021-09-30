<template>
  <div class="menu-wrapper">
    <div v-for="item in filterRoutes" :key="item.path">
      <MenuItem :base-url="item.path" :item="item" />
      <div v-if="item.children" class="menu-item-wrapper">
        <template v-for="child in item.children" :key="child.path">
          <MenuItem :base-url="item.path" :item="child" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { AppRouteRecordRaw } from '../router'
  import MenuItem from './menu-item.vue'

  const routes = useRouter().options.routes as AppRouteRecordRaw[]
  const filterRoutes = routes.filter((item) => !item.meta.hidden)
  console.log(filterRoutes)
</script>

<style lang="less">
  .menu-wrapper {
    padding: 20px 30px;
    .menu-item-wrapper {
      padding: 10px 20px;
    }
  }
</style>
