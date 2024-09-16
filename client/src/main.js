import './assets/css/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)

// 注册全局组件
import gloalComponemnts from '@/components/index'
app.use(gloalComponemnts)



// element-plus 的设置
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)



app.use(createPinia())
app.use(router)

app.mount('#app')
