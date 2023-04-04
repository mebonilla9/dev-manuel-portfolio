import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import { Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from '@/components'

const routes = [
  { path:'/', component:App },
  { path: '/about', component: About },
  { path: '/work', component: Works },
  { path: '/contact', component: Contact },
  { path: '/hero', component: Hero },
  { path: '/experiencie', component: Experience },
  { path: '/tech', component: Tech },
  { path: '/feedbacks', component: Feedbacks },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  hash: true,
  mode: history
})

export default router