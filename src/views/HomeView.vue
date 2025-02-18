<script setup>
import StudentCard from '@/components/StudentCard.vue';
import studentlist from '@/store/studentlist'
</script>

<template>
      <main class="bg-gray-300 h-screen flex justify-center items-center">
<div class="grid grid-cols-5 gap-4">
<StudentCard v-for="student in studentlist" 
:name="student.name"
:IndexNo="student.IndexNo"
:Level="student.Level"
:studentimage="student.studentimage"/>

</div>
</main>
</template>