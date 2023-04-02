<script setup>
import Navbar from '@/components/Navbar.vue' 
import Hero from '@/components/Hero.vue' 
import About from '@/components/About.vue' 
</script>

<template>
  <router-view>
    <div class="relative z-0 bg-primary">
    <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    <About />
  </div>
  </router-view>
</template>

<style scoped>
</style>
