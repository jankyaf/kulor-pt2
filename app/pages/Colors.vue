<template>
  <v-container>
    <AppPageHeader title="Colors" description="This is the colors page of the application" />

    <v-row>
      <v-col cols="12">
        <ContentPanel padding="false">
    <v-toolbar border="border-color b-md" color="transparent">
      <v-toolbar-title>Buttons</v-toolbar-title>
    </v-toolbar>
    <v-row class="pa-6" >
      <v-col cols="3" d-flex align="center">
        <v-btn variant="elevated">ELEVATED</v-btn>
      </v-col>
      <v-col cols="3" d-flex align="center">
        <v-btn variant="flat">FLAT</v-btn>
      </v-col>
      <v-col cols="3" d-flex align="center">
        <v-btn variant="outlined">OUTLINED</v-btn>
      </v-col>
      <v-col cols="3" d-flex align="center">
        <v-btn variant="tonal">TONAL</v-btn>
      </v-col>
    </v-row>

      
        </ContentPanel>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <SampleVCardsPanel />
      </v-col>
    </v-row>

  </v-container>


</template>

<script setup>
  import { getAllColors } from '#imports'

  const theme = useTheme()
  const themeslist = Object.keys(theme.themes.value).map(themeName => ({
    id: themeName,
    name: themeName.charAt(0).toUpperCase() + themeName.slice(1) + ' Theme',
  }))

  

</script>