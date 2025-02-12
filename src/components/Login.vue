<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const indexNumber = ref('');
const router = useRouter();

const validateIndexNumber = () => {
    // Navigate to the student data route with the index number as a parameter
    if (indexNumber.value) {
        console.log(indexNumber.value);
        router.push({ path: `/student-data/${indexNumber.value}` });
    }
};
</script>

<template>
    <div class="bg-white p-6 w-86 rounded-lg shadow-2xl flex flex-col justify-center gap-5">
        <h1 class="text-gray-600 font-medium">Login Here</h1>
        <form @submit.prevent="validateIndexNumber" class="w-full flex flex-col gap-2.5">
            <input 
                type="text" 
                v-model="indexNumber" 
                class="px-4 py-2 text-gray-800 border border-gray-100 rounded-md bg-gray-300" 
                placeholder="Enter your index number"
            />
            <button 
                type="submit" 
                class="p-2 px-4 bg-gray-700 rounded-md text-white font-medium w-full"
            >
                Validate
            </button>
        </form>
        <RouterLink to="/sign-up">
            <span>Sign Up</span>
        </RouterLink>
    </div>
</template>