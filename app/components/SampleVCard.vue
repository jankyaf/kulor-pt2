<template>
  <v-card :color="color" :variant="variant">
    <v-card-title> Title </v-card-title>
    <v-card-subtitle> {{ variant.toUpperCase() }} </v-card-subtitle>
    <v-card-text> This is a card. </v-card-text>
    <v-card-actions>
      <v-btn> action1 </v-btn>
      <v-btn> action2 </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'elevated',
      validator: value => ['elevated', 'flat', 'outlined', 'tonal', 'text'].includes(value),
    },
    color: {
      type: String,
      default: '',
      validator: value => ['', 'primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error'].includes(value),
    },
  })

  // const cardClasses = computed(() => {
  //   return {
  //     'v-card--variant': props.variant,
  //     'v-card--color': props.color,
  //   }
  // })
</script>
