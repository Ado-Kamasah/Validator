<script setup>
import StudentCard from '@/components/StudentCard.vue';
import studentlist from '@/store/studentlist'
import Typography from '@/components/Ui/Typography.vue'; 

const headings=([
      {h1:'Attractive people'} , {h2:'People'}
])
</script>

<template>
      <main class="bg-gray-300 h-screen flex flex-col justify-center items-center">
            <Typography v-for="heading in headings" :content="heading"/>
            <Typography :content="{h2:'Attractive people'}" textcolor="text-green-300"/>
            <Typography :content="{h3:'Attractive people'}"/>
            <Typography :content="{h4:'Attractive people'}"/>
<div class="grid grid-cols-5 gap-4">

<StudentCard v-for="student in studentlist" 
:name="student.name"
:IndexNo="student.IndexNo"
:hobby="student.hobby"
:Level="student.Level"
:course="student.course"
:studentimage="student.studentimage"/>

</div>
</main>
</template>