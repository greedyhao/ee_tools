<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue'
const inputHex = ref('')

watch(inputHex, (newValue, oldValue) => {
    const newValueSplit = newValue.split('');
    const result = newValueSplit.filter(c => (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F')).join('');

    nextTick(() => {
        inputHex.value = result.substring(0, 8);
    });
});
</script>

<template>
    <el-card class="box-card" style="width: 400px">
        <el-input v-model="inputHex" placeholder="Please input" />
    </el-card>
</template>
