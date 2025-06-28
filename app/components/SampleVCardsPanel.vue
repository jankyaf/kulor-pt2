<template>
  <ContentPanel padding="false">
    <v-toolbar border="border-color b-md" color="transparent">
      <v-toolbar-title>Cards</v-toolbar-title>
    </v-toolbar>
    <v-row class="pa-6">
      <v-col v-for="variant in cardVariants" :key="variant" cols="6" :variant="variant">
        <SampleVCard :variant="variant" />
      </v-col>
    </v-row>
  </ContentPanel>
</template>

<script setup>
  const cardVariants = ['elevated', 'flat', 'outlined', 'tonal'] //  'text' is omitted
  const cardColors = ['', 'primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error']
</script>
