<template>
  <div class="app-content">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .app-content {
    height: calc(100vh - 60px);
    position: relative;
    overflow: auto;
    padding: 20px 40px;
  }
</style>
