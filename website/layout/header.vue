<template>
  <div class="app-header">
    <div class="header-container">
      <s-button>SoftUI</s-button>
      <div>
        <s-button>组件</s-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .app-header {
    height: 60px;
    overflow: hidden;
    position: fixed;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    width: 100vw;
    .header-container {
      max-width: 1376px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
