import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 normalize.css , npm install normalize.css@8.0.1  --save
import 'normalize.css'
import './style/base.scss'

createApp(App).use(store).use(router).mount('#app')
