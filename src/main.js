import { createApp } from 'vue'
import './style.css'
import 'animate.css'
import App from './Layouts/HomeLayout.vue'
import router from './router/router'

createApp(App).use(router).mount('#app')
