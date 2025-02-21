<template>
    <div class="bg-white flex flex-col justify-center shadow-sm rounded-md ">
        <img :src="studentimage" class="w-full max-w-80"  alt="">
        
       <div class="p-2">
        <h1 class="text-sm ">{{ name }}</h1>
        <div>
            <p>{{ IndexNo }}</p>
            <p>{{ hobby }}</p>
            <p>{{ course }}</p>
            <span>{{ Level }}</span>
        </div>
    </div>
</div>
</template>
<script setup>
defineProps(['name','IndexNo','hobby','course','Level','studentimage'])
</script>