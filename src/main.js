import { createApp } from 'vue'
import App from './App.vue'
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'

import './tailwind.css'
 
window.Alpine = Alpine
Alpine.start()
Alpine.plugin(intersect)

createApp(App).mount('#app')
