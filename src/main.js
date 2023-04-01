import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { TroisJSVuePlugin } from 'troisjs'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.use(TroisJSVuePlugin)
app.mount('#app')
