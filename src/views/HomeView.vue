<script setup>
import StudentCard from '@/components/StudentCard.vue';
import Heading from '@/components/Ui/text/Heading.vue';
import Subheading from '@/components/Ui/text/Subheading.vue';
import studentlist from '@/store/studentlist'
import Smallheading from '@/components/Ui/text/Smallheading.vue';
import H3 from '@/components/Ui/text/H3.vue';
</script>

<template>
      <main class="bg-gray-300 h-screen flex flex-col justify-center items-center">
            <Heading content="Attractive heading"/>
            <Subheading subheading="Hello my people"/>
            <Smallheading Smallheading="Available with conditions"/>
            <H3 content="I can change all the time"/>
<div class="grid grid-cols-5 gap-4">
      
<StudentCard v-for="student in studentlist" 
:name="student.name"
:IndexNo="student.IndexNo"
:Level="student.Level"
:studentimage="student.studentimage"/>

</div>
</main>
</template>