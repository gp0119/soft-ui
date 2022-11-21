<template>
  <div id="soft-container" ref="configProviderRef">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { colorLuminance } from '../../utils/color'
  const colorDifference = 0.2
  const configProviderRef = ref(null)

  export type ConfigProviderProps = {
    backgroud?: string
  }

  const props = withDefaults(defineProps<ConfigProviderProps>(), {
    backgroud: '#e6e7ee',
  })
  const darkColor = colorLuminance(props.backgroud, colorDifference * -1)
  const lightColor = colorLuminance(props.backgroud, colorDifference)

  onMounted(() => {
    configProviderRef.value.style.cssText = `
      --baseColor: ${props.backgroud};
      --darkColor: ${darkColor};
      --lightColor: ${lightColor};
    `
  })
</script>
