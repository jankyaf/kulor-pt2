<!-- 
  ButtonVariantDisplayCard.vue
  A Vue component that displays a collection of buttons with different colors using a specific variant.
  Used to showcase how different accent colors look with various button styles (elevated, tonal, outlined).
-->
<template>
  <v-card class="border-lg" color="background">
    <v-card-title class="text-center">{{ title }}</v-card-title>
    <v-divider color="surface-variant" thickness="4" />
    <v-list bg-color="background">
      <v-list-item v-for="(color, name) in colors" :key="name" class="ma-4">
        <v-btn class="w-100" :color="name" :variant="variant">{{ name }}</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'BUTTON',
    },
    colors: {
      type: Object,
      required: true,
    },
    variant: {
      type: String,
      default: 'elevated',
    },
    backgroundColor: {
      type: String,
      default: 'background',
    },
  })
</script>
