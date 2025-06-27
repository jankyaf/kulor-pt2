<script lang="ts" setup>
//
</script>

<template>
  <HelloWorld />
</template>

<!-- **consider not using SSR** -->


<!-- -------------------------------------------------------------------------- -->
<!--            CONTENT MODULE INSTALLATION TEST (NOT WORKING)                  -->
<!-- -------------------------------------------------------------------------- -->
<!--
<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
-->
