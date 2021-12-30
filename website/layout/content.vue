<template>
  <div class="app-content">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .app-content {
    position: relative;
    overflow: auto;
    padding: 20px 40px;
  }
</style>
