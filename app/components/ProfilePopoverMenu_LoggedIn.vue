<!-- 
  ProfilePopoverMenu_LoggedIn.vue
  A Vue component that provides a popover menu for users who are logged in.
  Displays user info, toggles for settings, and action buttons.
  Uses Vuetify's v-menu, v-btn, v-list, v-card, and v-switch components for layout and interactivity.
-->
<template tag="account_button">
  <div class="text-center">
    <!-- Menu popover for account actions -->
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <!-- Activator slot: account icon button opens the menu -->
      <template #activator="{ props }">
        <v-btn icon size="large" v-bind="props"><v-icon>mdi-account-circle-outline</v-icon></v-btn>
      </template>

      <!-- Card containing user info and settings -->
      <v-card min-width="300">
        <v-list>
          <!-- User info list item with avatar, subtitle, and title -->
          <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" subtitle="Founder of Vuetify" title="John Leider">
            <template #append>
              <!-- Favorite button (toggles red color) -->
              <v-btn :class="fav ? 'text-red' : ''" icon="mdi-heart" variant="text" @click="fav = !fav" />
            </template>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <!-- Toggle for enabling messages -->
          <v-list-item>
            <v-switch v-model="message" color="purple" hide-details label="Enable messages" />
          </v-list-item>

          <!-- Toggle for enabling hints -->
          <v-list-item>
            <v-switch v-model="hints" color="purple" hide-details label="Enable hints" />
          </v-list-item>
        </v-list>

        <!-- Card actions: cancel and save buttons -->
        <v-card-actions>
          <v-spacer />

          <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" variant="text" @click="menu = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<!-- -------------------------------------------------------------------------- -->
<script setup>
  // Import Vue's ref for reactivity
  import { ref } from 'vue'

  // State for favorite (toggles heart color)
  const fav = ref(true)
  // State for menu open/close
  const menu = ref(false)
  // State for enabling messages
  const message = ref(false)
  // State for enabling hints
  const hints = ref(true)
</script>
