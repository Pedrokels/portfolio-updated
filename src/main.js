import { createApp } from 'vue'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { reveal } from './directives/reveal'

createApp(App).use(router).directive('reveal', reveal).mount('#app')
