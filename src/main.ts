import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'

try {
    console.log("try to updater")
    const { shouldUpdate, manifest } = await checkUpdate()
    if (shouldUpdate) {
        console.log("update start")
        // display dialog
        await installUpdate()
        // install complete, restart app
        await relaunch()
    }
} catch (error) {
    console.log(error)
}

export default {
    data() {
        return {
        }
    }
}

createApp(App)
    .use(ElementPlus)
    .mount('#app')
