<template>
  <div class="soft-ui-docs">
    <VpNav />
    <div class="p-2.5">
      <VPSidebar />
      <Content />
    </div>
  </div>
</template>

<script setup lang="ts">
  import VpNav from './vp-nav.vue'
  import VPSidebar from './vp-sidebar.vue'
</script>
