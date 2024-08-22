<script setup>
import HomePage from './pages/HomePage.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <div class="app">
    <Header/>
    <HomePage/>
    <Footer/>
  </div>
</template>

<style scoped>

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif
  
}

</style>
