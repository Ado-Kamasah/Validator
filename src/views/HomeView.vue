<script setup>
import StudentCard from '@/components/StudentCard.vue';
import studentsData from '@/stores/students';
import { computed } from 'vue';

// Define props
const props = defineProps(['indexnumber']);
const allStudents = studentsData;
// Computed property to filter students by index number
const filteredStudents = computed(() => {
    return studentsData.filter(student => student.indexNumber === props.indexnumber);
});

// Debugging: Log the props and filteredStudents
console.log('indexnumber:', props.indexnumber);
console.log('filteredStudents:', filteredStudents.value);
</script>

<template>
    <main class="bg-gray-300 h-screen w-full overflow-y-scroll flex justify-center items-center p-6">
        <div v-if="props.indexnumber && props.indexnumber !== 'admin' && filteredStudents.length > 0">
            <StudentCard 
            v-for="student in filteredStudents" 
            :key="student.indexNumber" 
            :picture="student.img"
            :name="student.name"
            :indexnumber="student.indexNumber" 
            :level="student.level"
            :course="student.course" 
        />
        </div>
       <div v-else-if="props.indexnumber === 'admin'" class="w-full h-full px-5 grid grid-cols-3 gap-4 py-10">
            <StudentCard 
            v-for="student in allStudents" 
            :key="student.indexNumber" 
            :picture="student.img"
            :name="student.name"
            :indexnumber="student.indexNumber" 
            :level="student.level"
            :course="student.course" 
        />
       </div>
       <div v-else class="flex flex-col w-full h-full justify-center items-center gap-5">
            <h1 class="text-red-500 animate-pulse text-4xl">Please enter a valid index number</h1>
            <RouterLink to="/">
                <button class="p-2 px-4 bg-gray-700 rounded-md text-white font-medium w-42 justify-self-center">
                    Back
                </button>
            </RouterLink>
        </div>
    </main>
</template>