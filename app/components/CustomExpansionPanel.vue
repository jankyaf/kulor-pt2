<!-- 
  CustomExpansionPanel.vue
  A Vue component that provides a custom expansion panel using a sheet and toolbar.
  Allows toggling of expanded/collapsed state and displays two cards side by side when expanded.
-->
<template>
  <!-- Sheet container with border and transparent background -->
  <v-sheet border color="transparent">
    <!-- Toolbar with title, spacer, and expand/collapse button -->
    <v-toolbar height="64">
      <v-toolbar-title class="text-h5 font-weight-bold">THEMES</v-toolbar-title>
      <v-spacer />
      <!-- Button toggles the expanded state -->
      <v-btn size="large" @click="isExpanded = !isExpanded">
        <!-- Icon changes based on expanded state -->
        <v-icon size="x-large">{{ isExpanded ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- Content container, only shown when expanded -->
    <v-container v-show="isExpanded">
      <v-row>
        <!-- First column with a card -->
        <v-col cols="6">
          <v-card height="250px">
            <v-card-title>asd</v-card-title>
            <v-card-text>asd</v-card-text>
            <v-spacer vertical />
            <v-card-actions>
              <v-btn>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- Second column with a tonal card -->
        <v-col cols="6">
          <v-card height="100%" variant="tonal">
            <v-card-title>management</v-card-title>
            <v-card-text>asdfsdfsdfsdfsdfsdfsdf</v-card-text>
            <v-card-actions>
              <v-btn>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
  // Expanded/collapsed state, provided as a required model prop
  const isExpanded = defineModel<boolean>('isExpanded', { required: true })
</script>
