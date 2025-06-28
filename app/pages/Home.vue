<!-- 
  Home.vue
  The Home page serves as the main entry point for the application.
  Provides navigation buttons to Favorites and Counter pages.
-->
<template>
  <!-- Page header with title and description -->
  <AppPageHeader title="Home" description="This is the home page" />
  <v-container>
    <v-row class>
      <v-col cols="12" class="text-center">
        <!-- Button to navigate to Favorites page -->
        <v-btn class="mr-4" color="primary" @click="navigateToFavorites">Go to Favorites</v-btn>
        <!-- Button to navigate to Counter page -->
        <v-btn color="secondary" @click="navigateToCounter">Go to Counter</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Import page header component and router
import AppPageHeader from '@/components/AppPageHeader.vue'
import { useRouter } from 'vue-router';

// Router instance for navigation
const router = useRouter();

// Navigate to Favorites page
const navigateToFavorites = () => {
  router.push('/favorites');
};
// Navigate to Counter page
const navigateToCounter = () => {
  // This function will navigate to the Counter page when the button is clicked.
  router.push('/counter');
};

</script>