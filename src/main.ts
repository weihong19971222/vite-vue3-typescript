import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import store from '@/store/index.ts';

createApp(App).provide("store", store).use(router).mount('#app')
