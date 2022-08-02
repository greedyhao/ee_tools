import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

export default {
    data() {
        return {
        }
    }
}

createApp(App)
    .use(ElementPlus)
    .mount('#app')
