<script setup lang="ts">
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
    <el-card class="box-card" style="width: 600px">
        <el-input v-model="textarea" rows="14" type="textarea" placeholder="Please input" />
    </el-card>
    <el-row>
        <el-button>转换</el-button>
    </el-row>

</template>
