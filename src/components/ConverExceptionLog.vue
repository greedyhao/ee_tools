<script>
import { ref, computed } from 'vue'
import ConverExceptionLogAfter from './ConverExceptionLogAfter.vue';
import ConverExceptionLogBefore from './ConverExceptionLogBefore.vue';

const routes = {
    '/': ConverExceptionLogBefore,
    '/about': ConverExceptionLogAfter
}

const textarea = ref('')
const showRawData = ref(true)

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/']
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <component :is="currentView" />
    <el-space :size="10" spacer="|">
        <el-link href="#/">处理前</el-link>
        <el-link href="#/about">处理后</el-link>
    </el-space>
</template>
