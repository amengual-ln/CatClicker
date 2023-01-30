<script setup>
import { computed } from 'vue'
import { useCatStore } from '../stores/cats.js'
import CatCard from '../components/CatCard.vue'

const store = useCatStore()

const catA = computed(() => {
  return store.getCat(2)
})

const catB = computed(() => {
  return store.getCat(3)
})

</script>

<template>
  <main class="min-h-screen grid grid-cols-2 place-content-center">
    <template v-if="catA && catB">
      <div class="flex flex-col items-center">
        <CatCard :imgUrl="catA.img" @click="() => store.increment(catA.id)" />
        <h1 class="text-2xl text-center m-12">{{ catA.clicks }}</h1>
      </div>
      <div class="flex flex-col items-center">
        <CatCard :imgUrl="catB.img" @click="() => store.increment(catB.id)" />
        <h1 class="text-2xl text-center m-12">{{ catB.clicks }}</h1>
      </div>
    </template>
    <div v-else>
      Calling some kittens...
    </div>
  </main>
</template>
