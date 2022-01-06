<template>
  <s-input v-model="value1" placeholder="please input" @change="handleValue1Change" />
  <div style="width: 600px; margin-top: 20px">
    <s-input v-model="value1" placeholder="please input" @change="handleValue1Change" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const value1 = ref('hello')
  const handleValue1Change = (value) => {
    console.log(value)
  }
</script>

<style lang="less"></style>
