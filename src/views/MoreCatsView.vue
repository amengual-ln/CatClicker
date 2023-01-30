<script setup>
import { RouterView } from 'vue-router'
import CatList from '../components/CatList.vue';
</script>

<template>
  <section class="grid grid-cols-3">
    <CatList />
    <RouterView />
  </section>
</template>
