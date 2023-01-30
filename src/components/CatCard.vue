<script setup>
defineProps({
    imgUrl: String
})
</script>

<template>
    <figure class="cursor-pointer shadow-lg shadow-black/25 m-8 max-w-xl">
        <img :src="imgUrl" alt="A cat" />
    </figure>
</template>