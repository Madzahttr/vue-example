import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/dist/css/adminlte.min.css'

import '@/store/subscriber'

axios.defaults.baseURL = 'http://localhost:8080'

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(store).use(router).mount('#app')
})
