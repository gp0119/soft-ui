<template>
  <div class="app-wrapper">
    <Header />
    <div class="divier" />
    <div class="app-content-wrapper">
      <Aside />
      <div class="divier vertical" />
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
    overflow: hidden;
    .app-content-wrapper {
      min-height: calc(100vh - 60px);
      transition: margin-left 0.28s;
      margin-left: 300px;
      position: relative;
      overflow: auto;
    }
    .divier {
      position: relative;
      &:before {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background: var(--darkColor);
      }
      &:after {
        content: '';
        height: 1px;
        width: 100vw;
        position: absolute;
        top: 1px;
        left: 0;
        background: var(--lightColor);
      }
      &.vertical:before {
        width: 1px;
        height: 100vh;
        left: 0;
        top: 0;
      }
      &.vertical:after {
        width: 1px;
        height: 100vh;
        left: 1px;
        top: 0;
      }
    }
  }
</style>
