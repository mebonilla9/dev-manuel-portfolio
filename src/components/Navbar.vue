<script setup>
import { styles } from '@/styles'
import { navLinks } from '@/constants'
import { logo, menu, close } from '@/assets'
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router'

const active = ref('')
const toggle = ref(false)

const navStyle = ref(
  styles.paddingX + ' w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
)
const clickHome = () => {
  active.value = ''
  window.scrollTo(0, 0)
}
/*const setToggle = (value) => {
  toggle.value = value
}*/
const activeLink = computed(() => (title) => {
  return (active.value === title ? 'text-white' : 'text-secondary') + ' hover:text-white text-[18px] font-medium cursor-pointer'
})
const activeLinkMenu = computed(() => (title) => {
  return (active.value === title ? 'text-white' : 'text-secondary') + ' font-poppins font-medium cursor-pointer text-[16px]'
})
const toggleMenu = computed(() => {
  return (!toggle.value ? 'hidden' : 'flex') + ' p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'
})
</script>
<template>
  <nav :class="navStyle">
    <div class="w-full flex justify-between items-center max-w-7x1 mx-auto">
      <RouterLink to="/" class="flex items-center gap-2" @click="clickHome">
        <img :src="logo" alt="logo" class="w-9 h-9 object-contain" />
        <p class="text-white text-[18px] font-bold cursor-pointer flex">Manuel &nbsp <span class="sm:block hidden"> |
            Software Engineer</span></p>
      </RouterLink>
      <ul class="list-none hidden sm:flex flex-row gap-10">
        <li v-for="link in navLinks" :key="link.id" :class="activeLink(link.title)" @click="active=link.title">
          <a :href="link.id">{{ link.title }}</a>
        </li>
      </ul>
      <div class="sm:hidden flex flex-1 justify-end items-center">
        <img :src="toggle ? close : menu" alt="menu" class="w-[28px] h-[28px] object-contain cursor-pointer"
          @click="toggle=!toggle">
        <div :class="toggleMenu">
          <ul class="list-none flex justify-end items-start flex-col gap-4">
            <li v-for="link in navLinks" :key="link.id" :class="activeLinkMenu(link.title)" @click="">
              <a :href="link.id">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>