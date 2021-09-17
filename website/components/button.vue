<template>
  <s-button class="mr-16" type="default" autofocus> Default </s-button>
  <s-button class="mr-16" type="primary">Primary</s-button>
  <s-button class="mr-16" type="info"> Info </s-button>
  <s-button class="mr-16" type="success">Success</s-button>
  <s-button class="mr-16" type="warning">Warning</s-button>
  <s-button class="mr-16" type="danger">Danger</s-button>
  <s-button class="mr-16" type="text" href="www.baidu.com" disabled>Text</s-button>
  <s-button class="mr-16" type="text" href="www.baidu.com">Text</s-button>
  <s-button class="mr-16" type="link">Link</s-button>
  <s-button class="mr-16" type="link" href="www.baidu.com">Link</s-button>
  <s-button class="mr-16" type="link" href="www.baidu.com" disabled> Disabled Link </s-button>
  <br />
  <br />
  <s-button class="mr-16" type="default" round>Default</s-button>
  <s-button class="mr-16" type="primary" round>Primary</s-button>
  <s-button class="mr-16" type="info" round>Info</s-button>
  <s-button class="mr-16" type="success" round>Success</s-button>
  <s-button class="mr-16" type="warning" round>Warning</s-button>
  <s-button class="mr-16" type="danger" round>Danger</s-button>
  <br />
  <br />
  <s-button class="mr-16" size="small">Small</s-button>
  <s-button class="mr-16">Default</s-button>
  <s-button class="mr-16" size="large">Large</s-button>
  <s-button class="mr-16" size="small" icon="icon-search">Search</s-button>
  <s-button class="mr-16" icon="icon-search">Search</s-button>
  <s-button class="mr-16" size="large" icon="icon-search">Search</s-button>
  <s-button class="mr-16" size="small" icon="icon-delete-fill">Delete</s-button>
  <s-button class="mr-16" icon="icon-delete-fill">Delete</s-button>
  <s-button class="mr-16" size="large" icon="icon-delete-fill">Delete</s-button>
  <br />
  <br />
  <s-button class="mr-16" size="small" icon="icon-search" />
  <s-button class="mr-16" icon="icon-search" />
  <s-button class="mr-16" size="large" icon="icon-search" />
  <s-button class="mr-16" size="small" icon="icon-image-fill" />
  <s-button class="mr-16" icon="icon-image-fill" />
  <s-button class="mr-16" size="large" icon="icon-image-fill" />
  <s-button class="mr-16" size="small" icon="icon-search" circle loading />
  <s-button class="mr-16" icon="icon-search" circle loading />
  <s-button class="mr-16" size="large" icon="icon-search" circle loading />
  <s-button class="mr-16" size="small" icon="icon-image-fill" circle />
  <s-button class="mr-16" icon="icon-image-fill" circle />
  <s-button class="mr-16" size="large" icon="icon-image-fill" circle />
  <br />
  <br />
  <s-button class="mr-16" size="small" round>Small</s-button>
  <s-button class="mr-16" round>Default</s-button>
  <s-button class="mr-16" size="large" round>Large</s-button>
  <br />
  <br />
  <s-button class="mr-16" @click="handleClick">Default</s-button>
  <s-button class="mr-16" disabled @click="handleClick">Default</s-button>
  <br />
  <br />
  <s-button class="mr-16" type="default" loading>Default</s-button>
  <s-button class="mr-16" type="primary" loading>Primary</s-button>
  <s-button class="mr-16" type="info" loading>Info</s-button>
  <s-button class="mr-16" type="success" loading>Success</s-button>
  <s-button class="mr-16" type="warning" loading>Warning</s-button>
  <s-button class="mr-16" type="danger" loading>Danger</s-button>
  <s-button class="mr-16" type="text" loading>Text</s-button>
  <s-button class="mr-16" type="link" loading>Link</s-button>
  <br />
  <br />
  <s-button class="mr-16" type="default" icon="icon-search">Default</s-button>
  <s-button class="mr-16" type="primary" icon="icon-search">Primary</s-button>
  <br />
  <br />
  <s-button class="mr-16" type="default" long>Long s-button</s-button>
  <s-button class="mr-16 mt-16" type="primary" long>Long s-button</s-button>
</template>

<script setup lang="ts">
  const handleClick = (e) => {
    console.log(e)
  }
</script>

<style lang="less">
  .mr-16 {
    margin-right: 16px;
  }
  .mt-16 {
    margin-top: 16px;
  }
</style>
