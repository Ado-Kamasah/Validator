<script setup>
    defineProps(['content'])
</script>
<template>
    <h1 v-if="content.h1"class="text-8xl font-bold text-orange-600 m-auto">
        {{ content.h1 }}
    </h1>
    <h2 v-if="content.h2"class="text-6xl font-bold text-blue-600 m-auto">
        {{ content.h2 }}
    </h2>
    <h3 v-if="content.h3"class="text-4xl font-bold text-green-600 m-auto">
        {{ content.h3 }}
    </h3>
    <h4 v-if="content.h4"class="text-2xl font-bold text-amber-600 m-auto">
        {{ content.h4 }}
    </h4>
</template>