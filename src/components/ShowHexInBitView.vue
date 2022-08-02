<script lang="ts" setup>
import { nextTick ,ref, watch } from 'vue'
const inHex = ref('')

watch(inHex, (newValue, oldValue) => {
    const getValue = newValue.charAt(newValue.length - 1);
    if (!((getValue >= '0' && getValue <= '9') || (getValue >= 'a' && getValue <= 'f') || (getValue >= 'A' && getValue <= 'F'))
    || newValue.length > 8) {
        nextTick(() => {
            inHex.value = newValue.slice(0, -1);
        });
    }
});
</script>

<template>
    <el-card class="box-card" style="width: 400px">
        <el-input v-model="inHex" placeholder="Please input" />
    </el-card>
</template>
