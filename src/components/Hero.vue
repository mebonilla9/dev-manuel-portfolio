<script setup>
import { styles } from '@/styles'
import { ComputersCanvas } from '@/components/canvas'
import { computed } from 'vue'

const startDiv = computed(() => {
  return styles.paddingX + " absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5"
})

const titleStyle = computed(() => {
  return styles.heroHeadText + " text-white";
})

const descriptionStyle = computed(() => {
  return styles.heroSubText + " mt-2 text-white-100"
})

</script>
<template>
  <section class="relative w-full h-screen mx-auto">
    <div :class="startDiv">
      <div class="flex flex-col justify-center items-center mt-5">
        <div class="w-5 h-5 rounded-full bg-[#915eff]" />
        <div class="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 :class="titleStyle">Hi, I'm <span class="text-[#915eff]">Manuel</span></h1>
        <p :class="descriptionStyle">
          With 13 years of experience as a software developer, eight years of experience as a software instructor. <br class="sm:block hidden"/>And four years of experience as a software development Tech Lead. I have the skills and experience to help your team deliver high-quality, scalable services. and reliable software solutions.
        </p>
      </div>
    </div>
    
    <ComputersCanvas />
  </section>
</template>
<style scoped></style>