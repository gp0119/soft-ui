<template>
  <div class="layout-demo">
    <s-layout>
      <s-header :height="200">header</s-header>
      <s-main>main</s-main>
      <s-footer>footer</s-footer>
    </s-layout>
  </div>
  <div class="layout-demo">
    <s-layout>
      <s-header>header</s-header>
      <s-layout>
        <s-sider>sider</s-sider>
        <s-main>main</s-main>
      </s-layout>
      <s-footer>footer</s-footer>
    </s-layout>
  </div>
  <div class="layout-demo">
    <s-layout>
      <s-header>header</s-header>
      <s-layout>
        <s-main>main</s-main>
        <s-sider>sider</s-sider>
      </s-layout>
      <s-footer>footer</s-footer>
    </s-layout>
  </div>
  <div class="layout-demo">
    <s-layout>
      <s-sider>sider</s-sider>
      <s-layout>
        <s-header>header</s-header>
        <s-main>main</s-main>
        <s-footer>footer</s-footer>
      </s-layout>
    </s-layout>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .layout-demo {
    margin-bottom: 20px;
    .soft-layout-header {
      background: #7dbcea;
      line-height: 60px;
      color: #fff;
    }
    .soft-layout-sider {
      background: #3499ec;
      color: #fff;
      padding-top: 60px;
    }
    .soft-layout-main {
      min-height: 120px;
      color: #fff;
      line-height: 120px;
      background: rgba(16, 142, 233, 1);
    }
    .soft-layout-footer {
      background: #7dbcea;
      line-height: 60px;
      color: #fff;
    }
  }
</style>
