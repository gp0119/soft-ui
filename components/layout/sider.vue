<template>
  <aside :class="classes" :style="style"><slot /></aside>
</template>

<script lang="ts">
  export default {
    name: 'SSider',
  }
</script>
<script setup lang="ts">
  import { computed } from 'vue'

  const pre = 'soft-layout-sider'

  export type SiderProps = {
    width?: number
  }
  const props = withDefaults(defineProps<SiderProps>(), {
    width: 200,
  })
  const style = computed(() =>
    props.width
      ? {
          '--layoutSiderWidth': props.width + 'px',
        }
      : {}
  )
  const classes = computed(() => {
    return {
      [`${pre}`]: true,
    }
  })
</script>
