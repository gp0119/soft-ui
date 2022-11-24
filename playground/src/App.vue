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
    <SButton class="mr-20">
      <template #icon>
        <Icon icon="mdi-light:home" />
      </template>
    </SButton>
    <SButton class="mr-20">
      <template #icon>
        <Icon icon="mdi-light:home" />
      </template>
      <span>主页</span>
    </SButton>
    <SButton class="mr-20" circle>
      <template #icon>
        <Icon icon="mdi-light:home" />
      </template>
    </SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" size="small">Small</SButton>
    <SButton class="mr-20">Default</SButton>
    <SButton class="mr-20" size="large">Default</SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" href="//www.baidu.com">百度</SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" disabled>Default</SButton>
    <SButton class="mr-20" type="primary" disabled>Primary</SButton>
    <br />
    <br />
    <br />
    <SButton class="mr-20" loading size="small">Default</SButton>
    <SButton class="mr-20" type="primary" loading>Primary</SButton>
    <SButton class="mr-20" type="primary" loading size="large">Primary</SButton>
  </div>
</template>
<script setup lang="ts">
  import { SButton } from '@soft-ui/components'
  import { Icon } from '@iconify/vue'
</script>
<style>
  .mr-20 {
    margin-right: 20px;
  }
</style>
