<template>
  <s-layout>
    <s-header>header</s-header>
    <s-layout>
      <s-sider>sider</s-sider>
      <s-layout>
        <s-main><router-view /></s-main>
        <s-footer>footer</s-footer>
      </s-layout>
    </s-layout>
  </s-layout>
</template>

<script setup lang="ts"></script>

<style lang="less"></style>
