import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'

export default {
    data () {
        return {
            msg: 123
        }
    }
}

createApp(App)
    .use(ElementPlus)
    .use(VueClipboard)
    .mount('#app')
