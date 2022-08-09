<script lang="ts" setup>
import { nextTick, ref, watch, computed } from 'vue'

const inputHexString = ref('')
const checkboxGroup1 = ref([])
const checkboxGroup2 = ref([])
const checkboxGroup3 = ref([])
const checkboxGroup4 = ref([])

watch(inputHexString, (newValue, oldValue) => {
    const newValueSplit = newValue.split('');
    const result = newValueSplit.filter(c => (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F')).join('');

    nextTick(() => {
        inputHexString.value = result.substring(0, 8);
    });
});

const inputHex = computed(() => {
    if (inputHexString.value.length == 0) {
        return 0;
    }
    return parseInt(inputHexString.value, 16);
})
</script>

<template>
    <el-card class="box-card" style="width: 100%">
        <el-input v-model="inputHexString" placeholder="Please input" clearable />

        <el-row>
            <el-space>
                <el-tag type="info" size="large">[31:24]</el-tag>

                <el-checkbox-group v-model="checkboxGroup4" size="large">
                    <el-checkbox-button v-for="n in 8" :key="32 - n" :label="32 - n">
                        {{ inputHex >> (32 - n) & 1 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </el-space>
        </el-row>

        <el-row>
            <el-space>
                <el-tag type="info" size="large">[23:16]</el-tag>

                <el-checkbox-group v-model="checkboxGroup3" size="large">
                    <el-checkbox-button v-for="n in 8" :key="24 - n" :label="24 - n">
                        {{ inputHex >> (24 - n) & 1 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </el-space>
        </el-row>

        <el-row>
            <el-space>
                <el-tag type="info" size="large">[15: 8]</el-tag>

                <el-checkbox-group v-model="checkboxGroup2" size="large">
                    <el-checkbox-button v-for="n in 8" :key="16 - n" :label="16 - n">
                        {{ inputHex >> (16 - n) & 1 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </el-space>
        </el-row>

        <el-row>
            <el-space>
                <el-tag type="info" size="large">[ 7: 0]</el-tag>

                <el-checkbox-group v-model="checkboxGroup1" size="large">
                    <el-checkbox-button v-for="n in 8" :key="8 - n" :label="8 - n">
                        {{ inputHex >> (8 - n) & 1 }}
                    </el-checkbox-button>
                </el-checkbox-group>
            </el-space>
        </el-row>

        <el-row>
            <el-space>
                <el-tag type="info" size="large">十进制</el-tag>
                <el-tag size="large">{{ inputHex }}</el-tag>
            </el-space>
        </el-row>

    </el-card>
</template>
