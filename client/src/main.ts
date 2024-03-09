// 全局样式导入
import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 注册全局组件
import gloalComponemnts from '@/components/index'
app.use(gloalComponemnts)

app.mount('#app')
