<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { useCatStore } from './stores/cats'

const store = useCatStore()

onMounted(() => {
  store.fetchCats()
})

</script>

<template>
  <header class="my-8">
    <nav class="flex gap-8 justify-center">
      <RouterLink to="/">One cat</RouterLink>
      <RouterLink to="/twocats">Two cats</RouterLink>
      <RouterLink to="/morecats">More cats</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
