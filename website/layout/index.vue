<template>
  <div class="app-wrapper">
    <Header />
    <div class="app-content-wrapper">
      <Aside />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Aside from './menu.vue'
  import Content from './content.vue'
  import Header from './header.vue'
</script>

<style lang="less">
  .app-wrapper {
    position: relative;
    height: 100%;
    color: var(--textColor);
    overflow-x: hidden;
    .app-content-wrapper {
      min-height: 100%;
      transition: margin-left 0.28s;
      margin-left: calc((100vw - 1376px) / 2 + 288px);
      padding-top: 60px;
      position: relative;
    }
  }
</style>
