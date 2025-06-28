<!-- 
  ColorCodeDisplayCard.vue
  A Vue component that displays a list of color codes with visual swatches.
  Used to show the hex values and names of colors in a card format.
-->
<template>
  <!-- Card container with large border, background color, and flat variant -->
  <v-card class="border-lg" color="background" variant="flat">
    <!-- Card title centered at the top -->
    <v-card-title class="text-center">{{title}}</v-card-title>
    <!-- Divider with surface variant color and thick styling -->
    <v-divider color="surface-variant" thickness="4" />
    <!-- List container for color items -->
    <v-list bg-color="background">
      <!-- List item for each color in the colors object -->
      <v-list-item v-for="(color, name) in colors" :key="name" class="ma-4">
        <!-- Prepend slot: color swatch box -->
        <template v-slot:prepend>
          <div class="d-flex align-center">
            <div
              :style="{ width: '36px', height: '36px', backgroundColor: color, marginRight: '8px', borderRadius: '4px' }"
            />
          </div>
        </template>
        <!-- Color name -->
        <v-list-item-title>{{ name }}</v-list-item-title>
        <!-- Color hex code -->
        <v-list-item-subtitle>{{ color }} </v-list-item-subtitle>
        <!-- Optionally, RGB values could be shown here -->
        <!-- <v-list-item-subtitle>rgb: {{ hexToRgb(color).r }}, {{ hexToRgb(color).g }},  {{ hexToRgb(color).b }}</v-list-item-subtitle>  -->
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  // Define component props with validation and defaults
  const props = defineProps({
    // Title to display at the top of the card
    title: {
      type: String,
      default: 'COLOR CODES',  // Default title if none provided
    },
    // Object containing color definitions to display
    colors: {
      type: Object,
      required: true,  // Colors object is required for this component to function
    },
  })
</script>
