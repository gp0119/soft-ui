<template>
  <s-layout class="soft-ui-container">
    <s-header><Header /></s-header>
    <s-layout>
      <s-sider> <Menu /> </s-sider>
      <s-main><Content /></s-main>
    </s-layout>
  </s-layout>
</template>

<script setup lang="ts">
  import Menu from './menu.vue'
  import Content from './content.vue'
  import Header from './header.vue'
</script>

<style lang="less">
  .soft-ui-container {
    height: 100vh;
    overflow-y: hidden;
  }
</style>
