<template>
  <Button class="mr-16" type="default">Default</Button>
  <Button class="mr-16" type="primary">Primary</Button>
  <Button class="mr-16" type="info">Info</Button>
  <Button class="mr-16" type="success">Success</Button>
  <Button class="mr-16" type="warning">Warning</Button>
  <Button class="mr-16" type="danger">Danger</Button>
  <Button class="mr-16" type="text">Text</Button>
  <Button class="mr-16" type="link">Link</Button>
  <br />
  <br />
  <Button class="mr-16" type="default" round>Default</Button>
  <Button class="mr-16" type="primary" round>Primary</Button>
  <Button class="mr-16" type="info" round>Info</Button>
  <Button class="mr-16" type="success" round>Success</Button>
  <Button class="mr-16" type="warning" round>Warning</Button>
  <Button class="mr-16" type="danger" round>Danger</Button>
  <br />
  <br />
  <Button class="mr-16" size="small">Small</Button>
  <Button class="mr-16">Default</Button>
  <Button class="mr-16" size="large">Large</Button>
  <br />
  <br />
  <Button class="mr-16" size="small" round>Small</Button>
  <Button class="mr-16" round>Default</Button>
  <Button class="mr-16" size="large" round>Large</Button>
  <br />
  <br />
  <Button class="mr-16" @click="handleClick">Default</Button>
  <Button class="mr-16" disabled @click="handleClick">Default</Button>
</template>

<script setup lang="ts">
  import Button from '/~/button/index.vue'
  const handleClick = (e) => {
    console.log(e)
  }
</script>

<style lang="less">
  .mr-16 {
    margin-right: 16px;
  }
</style>
