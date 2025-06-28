<!-- 
  Counter.vue
  The Counter page provides a simple interactive counter with increment, decrement, and reset functionality.
  Demonstrates state management and event handling in Vue.
-->
<template>
  <!-- Page header with title and description -->
  <AppPageHeader title="Counter" description="This is the counter page" />
  <v-container>
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="10" style="min-width: 500px;">
        <v-row>
          <v-col>
            <!-- Card displaying the current count -->
            <v-card class="mx-auto">
              <v-card-title>COUNT = {{ count }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <!-- Increment, decrement, and reset buttons -->
            <v-btn prepend-icon="mdi-plus" color="primary" @click="increment" class="mr-4">Increment</v-btn>
            <v-btn prepend-icon="mdi-minus" color="secondary" @click="decrement" class="mr-4">Decrement</v-btn>
            <v-btn prepend-icon="mdi-refresh" color="error" @click="reset" class="float-right">Reset</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Import page header component
import AppPageHeader from '@/components/AppPageHeader.vue'
import { ref } from "vue";

// Reactive state for the counter
const count = ref(0);

// Increment the counter
const increment = () => {
  count.value++;
};

// Decrement the counter
const decrement = () => {
  count.value--;
};

// Reset the counter to zero
const reset = () => {
  count.value = 0;
};
</script>
