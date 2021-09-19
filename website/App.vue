<template>
  <s-config-provider>
    <div class="routes">
      <router-link to="/icon">
        <s-button type="link">icon</s-button>
      </router-link>
      <router-link to="/button">
        <s-button type="link">button</s-button>
      </router-link>
      <router-link to="/card">
        <s-button type="link">card</s-button>
      </router-link>
    </div>
    <div class="preview">
      <router-view />
    </div>
  </s-config-provider>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .routes {
    padding: 20px;
  }
  .preview {
    text-align: center;
    padding: 50px;
  }
</style>
