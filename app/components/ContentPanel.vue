<template>
  <v-sheet
    border="md"
    :class="paddingClass"
    color="transparent"
    rounded="lg"
    v-bind="$attrs"
  >
    <slot />
  </v-sheet>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    padding: {
      type: [Boolean, String],
      default: true,
    },
  })

  const paddingClass = computed(() => {
    if (props.padding === false) return ''
    if (typeof props.padding === 'string') return props.padding
    return 'pa-6'
  })
</script>
