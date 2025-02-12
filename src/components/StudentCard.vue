<script setup>
defineProps(['picture','name', 'indexnumber', 'level', 'course']);
</script>
<template>
    <div class="bg-white rounded-lg shadow-lg h-96 w-80 flex flex-col space-y-4">
        <img :src="picture" alt="" class="w-full h-58 transition-transform duration-300 ease-in-out object-cover rounded-t-lg hover:scale-125 hover:skew-2 hover:shadow-2xl hover:rounded-lg">
        <div class="p-4 text-base text-gray-500">
            <h1 class="font-medium text-lg text-gray-800">Name: {{ name }}</h1>
        <div class="flex justify-between items-center ">
            <p>Index Number: {{ indexnumber }}</p>
            <span>level: {{ level }}</span>
        </div>
        <h4 >Programme: {{ course }}</h4>
        </div>
    </div>
</template>