<script setup>
import { computed } from 'vue'
import { useCatStore } from '../stores/cats'
import CatCard from '../components/CatCard.vue'

const store = useCatStore()

const cat = computed(() => {
  return store.getCat(1)
})
</script>

<template>
  <main class="min-h-screen grid place-content-center">
    <div v-if="cat" class="col-start-2">
      <CatCard :imgUrl="cat?.img" @click="store.increment(cat?.id)"></CatCard>
      <h1 class="text-2xl text-center m-12">{{ cat?.clicks }}</h1>
    </div>
    <div v-else class="col-start-2">
      Calling a kitten...
    </div>
  </main>
</template>
