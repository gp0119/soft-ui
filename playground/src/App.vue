<template>
  <div>
    <SButton class="mr-20">Default</SButton>
    <SButton class="mr-20" type="primary">Primary</SButton>
    <SButton class="mr-20" type="success">Success</SButton>
    <SButton class="mr-20" type="info">Info</SButton>
    <SButton class="mr-20" type="warning">Warning</SButton>
    <SButton class="mr-20" type="danger">Danger</SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" round>Default</SButton>
    <SButton class="mr-20" round type="primary">Primary</SButton>
    <SButton class="mr-20" round type="success">Success</SButton>
    <SButton class="mr-20" round type="info">Info</SButton>
    <SButton class="mr-20" round type="warning">Warning</SButton>
    <SButton class="mr-20" round type="danger">Danger</SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" circle size="small">Default</SButton>
    <SButton class="mr-20" circle>Default</SButton>
    <SButton class="mr-20" circle size="large">Default</SButton>
  </div>
</template>
<script setup lang="ts">
  import { SButton } from '@soft-ui/components'
</script>
<style>
  .mr-20 {
    margin-right: 20px;
  }
  .mt-20 {
    margin-top: 20px;
  }
</style>
