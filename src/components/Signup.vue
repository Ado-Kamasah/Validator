<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    
    <div class="bg-white p-6 w-86 rounded-lg shadow-2xl flex flex-col justify-center gap-5">
        <h1 class="text-gray-600 font-medium">Sign Up Here</h1>
       <form action="" method="post" class="w-full flex flex-col gap-2.5">
        <input type="text" class="px-4 py-2 text-gray-800 border border-gray-100 rounded-md bg-gray-300" placeholder="Enter your index number">
        <button class="p-2 px-4 bg-gray-700 rounded-md text-white font-medium">Validate</button>
       </form>
       <RouterLink to="/">
        <span>login</span>
       </RouterLink>
    </div>
</template>