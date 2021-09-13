<template>
  <ConfigProvider>
    <div class="routes">
      <router-link to="/icon">
        <Button type="link">icon</Button>
      </router-link>
      <router-link to="/button">
        <Button type="link">button</Button>
      </router-link>
    </div>
    <div class="preview">
      <router-view />
    </div>
  </ConfigProvider>
</template>

<script setup lang="ts">
  import ConfigProvider from '/~/config-provider/index.vue'
  import Button from '/~/button/index.vue'
</script>

<style lang="less">
  .routes {
    padding: 20px;
  }
  .preview {
    text-align: center;
    padding: 50px;
  }
</style>
