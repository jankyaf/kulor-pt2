<!-- 
  GenericExpansionPanel.vue
  A simple, reusable Vue component for displaying a generic expansion panel.
  Can be extended or customized for different content.
-->
<template>
  <!-- Basic expansion panel with a title and icon -->
  <v-expansion-panel>
    <v-expansion-panel-title>
      <v-icon>mdi-plus</v-icon>
      <span>Expansion Panel</span>
    </v-expansion-panel-title>
  </v-expansion-panel>
</template>

<script setup>
  // Define component props (title is required, but not currently used in template)
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  })
</script>
