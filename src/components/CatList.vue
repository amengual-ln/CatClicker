<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useCatStore } from '../stores/cats'

const store = useCatStore()

const cats = computed(() => {
    return store.getCats
})
</script>

<template>
    <nav v-if="cats">
        <li v-for="cat in cats" :key="cat.id" class="list-none px-4 py-2">
            <RouterLink :to="{ path: '/morecats/' + cat.id }">{{ cat.name }}</RouterLink>
        </li>
    </nav>
    <div v-else>
        Fetching some kittens...
    </div>
</template>