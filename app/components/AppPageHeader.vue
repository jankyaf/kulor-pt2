<!-- 
  AppPageHeader.vue
  A simple Vue component for displaying a page header with a title and description.
  Used to provide consistent headers across different pages.
-->
<template>
    <v-row>
      <!-- Centered column with vertical margin -->
      <v-col class="text-center my-8" cols="12">
        <div>
          <!-- Main page title -->
          <h1>{{ title }}</h1>
          <!-- Optional page description -->
          <p>{{ description }}</p>
        </div>
      </v-col>
    </v-row>
</template>

<script setup>
  // Define component props for title and description
  const props = defineProps({
    title: String,        // Title to display in the header
    description: String,  // Description to display below the title
  })
</script>
