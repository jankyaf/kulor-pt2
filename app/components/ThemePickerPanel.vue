<!-- 
  ThemePickerPanel.vue
  A Vue component that provides a theme selection interface using Vuetify's expansion panel.
  Allows users to switch between different application themes dynamically.
-->
<template>
  <!-- Expansion panel container with background color and border styling -->
  <v-expansion-panel bg-color="background" class="border">
    <!-- Panel title section with fixed height and surface color -->
    <v-expansion-panel-title color="surface" height="64px">
      <h2>THEME PICKER</h2>
      <!-- Spacer to push content to the left -->
      <v-spacer />
    </v-expansion-panel-title>
    <!-- Panel content area -->
    
    <v-expansion-panel-text no-gutters>
      <!-- Row container with vertical padding -->
      <v-list>
        <v-list-item v-for="theme in themesList" :key="theme.id">
          <v-list-item-title>{{ theme.name }}</v-list-item-title>

        </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script setup>
// Import Vuetify's theme composable for theme management
import { useTheme } from "vuetify";

// Get the theme instance from Vuetify
const theme = useTheme();

// Transform available themes into a formatted list for the combobox
// Maps theme keys to display-friendly names with proper capitalization
const themesList = Object.keys(theme.themes.value).map((themeName) => ({
  id: themeName,  // Original theme identifier
  name:
    themeName.charAt(0).toUpperCase() +  // Capitalize first letter
    themeName
      .slice(1)  // Get remaining characters
      .replace(/([A-Z])/g, " $1")  // Add space before capital letters (camelCase to Title Case)
      .trim() +  // Remove leading/trailing spaces
    " Theme",  // Append "Theme" suffix
}));

// Event handler for when user selects a new theme
const handleThemeChange = (selectedTheme) => {
  if (selectedTheme) {
    // Update the global theme name to the selected theme's ID
    theme.global.name.value = selectedTheme.id;
  }
};
</script>

<!-- Scoped styles - currently empty but available for component-specific styling -->
<style scoped></style>
