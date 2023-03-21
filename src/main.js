import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/base.scss'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark, faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faXmark)
library.add(faPen)
library.add(faTrash)
library.add(faCheck)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(ElementPlus).use(router).mount('#app')

