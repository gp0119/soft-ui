<template>
  <div v-for="{ path, meta: { title } } in filterRoutes" :key="path">
    <router-link :to="path">
      <s-button type="link">{{ title }}</s-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import type { AppRouteRecordRaw } from '../router'

  const routes = useRouter().options.routes as AppRouteRecordRaw[]
  const filterRoutes = routes.filter((item) => !item.meta.hidden)
</script>

<style lang="less"></style>
