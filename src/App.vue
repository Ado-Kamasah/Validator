<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
     <main class="bg-gray-300 h-screen flex justify-center items-center">
  <RouterView/>
  </main>
</template>
<style>
.scroll-enter-active,
.scroll-leave-active{
  transition: transform 3s ease, opacity 3s ease;
}
.scroll-enter-from{
  opacity: 0;
  transform: translate(20px);
}
.scroll-leave-to{
  opacity: 0;
  transform: translate(-20px);
}
.scroll-smooth{
  scroll-behavior: smooth;
}
</style>
