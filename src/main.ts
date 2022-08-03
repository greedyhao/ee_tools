import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { emit } from '@tauri-apps/api/event'
import { listen } from '@tauri-apps/api/event'

emit('tauri://update')

listen('tauri://update-available', function (res) {
  console.log('New version available: ', res)
  emit('tauri://update-install')
})

listen('tauri://update-status', function (res) {
  console.log('New status: ', res)
})

export default {
    data() {
        return {
        }
    }
}

createApp(App)
    .use(ElementPlus)
    .mount('#app')
