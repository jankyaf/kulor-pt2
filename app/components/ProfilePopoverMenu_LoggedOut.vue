<!-- 
  ProfilePopoverMenu_LoggedOut.vue
  A Vue component that provides a popover menu for users who are not logged in.
  Allows users to enter email and password to login or register.
  Uses Vuetify's v-menu, v-btn, v-list, and v-card components for layout and interactivity.
-->
<template tag="account_button">
  <div class="text-center">
    <!-- Menu popover for account actions -->
    <v-menu v-model="menu" :close-on-content-click="false" location="end">
      <!-- Activator slot: account icon button opens the menu -->
      <template #activator="{ props }">
        <v-btn icon size="large" v-bind="props"><v-icon>mdi-account-question</v-icon></v-btn>
      </template>

      <!-- Card containing login/register form -->
      <v-card color="blue-grey-darken-" min-width="300">
        <v-list bg-color="transparent">
          <!-- Title list item -->
          <v-list-item title="LOGIN OR REGISTER BELOW">
            <!-- Optionally, a favorite button could be added here -->
          </v-list-item>
          <!-- List item with login/register form fields and buttons -->
          <v-list-item>
            <!-- Email input field -->
            <v-text-field v-model="email" label="Email" variant="outlined" density="compact" />
            <!-- Password input field -->
            <v-text-field v-model="password" label="Password" variant="outlined" density="compact" />
            <!-- Login button -->
            <v-btn
              color="primary"
              variant="outlined"
              
              prepend-icon="mdi-login"
              width="100%"
              @click="login"
            >LOGIN</v-btn>
            <!-- Register button -->
            <v-btn
              class="mt-4"
              color="primary"
              variant="elevated"
              prepend-icon="mdi-account-plus"
              width="100%"
              @click="register"
            >REGISTER</v-btn>
          </v-list-item>
        </v-list>

        <v-divider />

      </v-card>
    </v-menu>
  </div>
</template>

<!-- -------------------------------------------------------------------------- -->
<script setup>
  // Import Vue's ref for reactivity
  import { ref } from 'vue'

  // State for favorite (not currently used)
  const fav = ref(true)
  // State for menu open/close
  const menu = ref(false)
  // State for message display (not currently used)
  const message = ref(false)
  // State for hints (not currently used)
  const hints = ref(true)

  // Placeholder for email and password fields
  const email = ref('')
  const password = ref('')

  // Placeholder login function
  function login() {
    // Implement login logic here
    alert(`Login with email: ${email.value}`)
  }

  // Placeholder register function
  function register() {
    // Implement registration logic here
    alert(`Register with email: ${email.value}`)
  }
</script>
