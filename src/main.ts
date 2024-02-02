import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from '@/store/index.ts';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App)
// .provide("store", store)
.use(ElementPlus)
.use(store)
.use(router)
.mount('#app')
