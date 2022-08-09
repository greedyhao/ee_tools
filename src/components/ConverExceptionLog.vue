<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
const showRawData = ref(true)
</script>

<template>
    <el-card class="box-card" style="width: 600px">
        <el-input v-model="textarea" rows="14" type="textarea" placeholder="Please input" />
    </el-card>
    <el-switch v-model="showRawData" size="default" active-text="原数据" inactive-text="转换后" />

</template>
