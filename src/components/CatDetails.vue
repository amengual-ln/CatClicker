<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCatStore } from '../stores/cats'
import CatCard from '../components/CatCard.vue'

const route = useRoute()

const store = useCatStore()

const cat = computed(() => store.getCats.find(cat => cat.id === route.params.breed))

</script>

<template>
    <div class="grid col-span-2 lg:col-span-1 place-content-center text-center">
        <h1 class="text-xl text-center m-8">{{ cat.name }}</h1>
        <CatCard @click="store.increment(cat.id)" :imgUrl="cat.img" />
        <h2 class="text-2xl text-center m-12">{{ cat.clicks }}</h2>
    </div>
</template>