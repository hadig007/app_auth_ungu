import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import './axios.js'

const app = createApp(App)
app.use(router)
app.use(store)



app.mount('#app')
