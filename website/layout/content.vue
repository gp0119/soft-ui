<template>
  <div class="app-content">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .app-content {
    min-height: calc(100vh - 60px);
    width: 960px;
    position: relative;
    overflow: hidden;
    padding: 20px 40px;
  }
</style>
