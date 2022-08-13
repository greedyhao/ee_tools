<script>
import { ref, computed } from 'vue'
import ConverExceptionLogAfter from './ConverExceptionLogAfter.vue';
import ConverExceptionLogBefore from './ConverExceptionLogBefore.vue';

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
    <el-space direction="vertical">
        <ConverExceptionLogAfter />
        <ConverExceptionLogBefore />
    </el-space>
</template>
