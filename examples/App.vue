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
  import ConfigProvider from '../components/config-provider/config-provider.vue'
  import Button from '../components/button/button.vue'

  console.log(typeof Button)
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
