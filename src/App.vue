<script setup>
import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from '@/components'
</script>

<template>
  <router-view>
    <div class="relative z-0 bg-primary">
      <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div class="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </router-view>
</template>

<style scoped></style>
