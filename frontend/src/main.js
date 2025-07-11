import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Import directive
import scrollanimation from './directives/animateOnScroll.js'

const app = createApp(App)

app.directive('animate-on-scroll', scrollanimation)
app.use(router)
app.mount('#app')
