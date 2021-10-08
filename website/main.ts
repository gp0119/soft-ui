import { createApp } from 'vue'
import App from './App.vue'
import SoftUi from '/~/index'
import '/~/style.less'
import './style.less'
import router from './router'

createApp(App).use(SoftUi).use(router).mount('#app')
