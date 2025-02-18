<template>
    <div class="bg-white flex flex-col justify-center shadow-sm rounded-md ">
        <img :src="studentimage" class="w-full max-w-80"  alt="">
        
       <div class="p-2">
        <h1 class="text-sm ">{{ name }}</h1>
        <div>
            <p>{{ IndexNo }}</p>
            <span>{{ Level }}</span>
        </div>
        <h4>Information Communication </h4>
    </div>
</div>
</template>
<script setup>
defineProps(['name','IndexNo','Level','studentimage'])
</script>