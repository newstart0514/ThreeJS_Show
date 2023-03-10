import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入VueRouter
import router from "@/router"
// 引入UI
import naive from "naive-ui"

// @ts-ignore
createApp(App).use(naive).use(router).mount('#app')
