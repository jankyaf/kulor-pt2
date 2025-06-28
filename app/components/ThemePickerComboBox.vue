<template>
  <v-combobox
    item-title="name"
    item-value="id"
    :items="themesList"
    no-label
    variant="outlined"
    density="compact"
    hide-details
    @update:model-value="handleThemeChange"
  />
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
      .trim()  // Remove leading/trailing spaces
}));

// Event handler for when user selects a new theme
const handleThemeChange = (selectedTheme) => {
  if (selectedTheme) {
    // Update the global theme name to the selected theme's ID
    theme.global.name.value = selectedTheme.id;
  }
};
</script>