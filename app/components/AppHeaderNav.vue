<!-- 
  AppHeaderNav.vue
  A Vue component that provides the main application header and navigation drawer.
  Includes a top app bar with a navigation icon, title, and profile menu, as well as a sidebar with navigation links.
-->
<template>
  <!-- Application top app bar -->
  <v-app-bar>
    <!-- Navigation icon toggles the sidebar -->
    <v-app-bar-nav-icon @click="navSidebar = !navSidebar" />
    <!-- Toolbar title with router link to home -->
    <v-toolbar-title>
      <router-link style="text-decoration:none; color:inherit; cursor:pointer;" to="/">
        kulor
      </router-link>
    </v-toolbar-title>
    <!-- Spacer pushes profile menu to the right -->
    <v-spacer />
    <!-- Profile popover menu for logged out users (replace with logged in as needed) -->
    <ProfilePopoverMenu_LoggedOut />
  </v-app-bar>
  <!-- Navigation drawer (sidebar) -->
  <v-navigation-drawer
    v-model="navSidebar"
    app
    expand-on-hover
    permanent
    rail
  >
    <!-- Navigation list -->
    <v-list nav>
      <!-- Top section navigation items -->
      <v-list-item
        v-for="(item, i) in navSidebarItemsTop"
        :key="i"
        color="primary"
        :prepend-icon="item.icon"
        :to="item.route"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <!-- Divider between sections -->
      <v-divider class="my-4" thickness="4" />
      <!-- Bottom section navigation items -->
      <v-list-item
        v-for="(item, i) in navSidebarItemsBottom"
        :key="i"
        color="primary"
        :prepend-icon="item.icon"
        :to="item.route"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-divider class="my-4" thickness="4" />
      <!-- Group 1 navigation items -->
      <v-list-item
        v-for="(item, i) in navSidebarItemsGroup1"
        :key="i"
        color="primary"
        :prepend-icon="item.icon"
        :to="item.route"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  // Import Vue's ref for reactivity
  import { ref } from 'vue'

  // Sidebar open/close state
  const navSidebar = ref(true)

  // Navigation items for the top section of the sidebar
  const navSidebarItemsTop = [
    { title: 'Home', icon: 'mdi-home-outline', route: '/home' },
    { title: 'Favorites', icon: 'mdi-star-outline', route: '/favorites' },
    { title: 'Counter', icon: 'mdi-counter', route: '/counter' },
    { title: 'Colors', icon: 'mdi-palette-outline', route: '/colors' },
  ]

  // Navigation items for the bottom section of the sidebar
  const navSidebarItemsBottom = [
    { title: 'Settings', icon: 'mdi-cog', route: '/settings' },
    { title: 'Help', icon: 'mdi-help-circle', route: '/help' },
  ]

  // Navigation items for a separate group (e.g., test pages)
  const navSidebarItemsGroup1 = [
    { title: 'Test', icon: 'mdi-test-tube', route: '/test' },
  ]

  // Placeholder for open sidebar items (not currently used)
  const openSidebarItems = ref([])

</script>
