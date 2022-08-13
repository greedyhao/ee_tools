<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'

const textarea = ref('')

const ra = ref('0xXXXXXXXX');
const sp = ref('0xXXXXXXXX');
const gp = ref('0xXXXXXXXX');
const tp = ref('0xXXXXXXXX');
const t0 = ref('0xXXXXXXXX');
const t1 = ref('0xXXXXXXXX');
const t2 = ref('0xXXXXXXXX');
const s0 = ref('0xXXXXXXXX');
const s1 = ref('0xXXXXXXXX');
const a0 = ref('0xXXXXXXXX');
const a1 = ref('0xXXXXXXXX');
const a2 = ref('0xXXXXXXXX');
const a3 = ref('0xXXXXXXXX');
const a4 = ref('0xXXXXXXXX');
const a5 = ref('0xXXXXXXXX');
const a6 = ref('0xXXXXXXXX');
const a7 = ref('0xXXXXXXXX');
const s2 = ref('0xXXXXXXXX');
const s3 = ref('0xXXXXXXXX');
const s4 = ref('0xXXXXXXXX');
const s5 = ref('0xXXXXXXXX');
const s6 = ref('0xXXXXXXXX');
const s7 = ref('0xXXXXXXXX');
const s8 = ref('0xXXXXXXXX');
const s9 = ref('0xXXXXXXXX');
const s10 = ref('0xXXXXXXXX');
const s22 = ref('0xXXXXXXXX');
const t3 = ref('0xXXXXXXXX');
const t4 = ref('0xXXXXXXXX');
const t5 = ref('0xXXXXXXXX');
const t6 = ref('0xXXXXXXXX');

function readDateFromText(text: String, row: number, col: number) {
    var reult = "0xXXXXXXXX";
    if (text.split('\n').length > row) {
        var temp = text.split('\n')[row];

        if (temp.split(' ').length > col) {
            reult = "0x" + temp.split(' ')[col];
        }
    }

    return reult;
}

watch(textarea, (newValue, oldValue) => {
    while (newValue.length > 0 && newValue[0] != 'E') {
        newValue = newValue.substring(1);
    }

    nextTick(() => {
        textarea.value = newValue;
    });
});

const x0 = computed(() => {
    return readDateFromText(textarea.value, 1, 0);
}
)

</script>

<template>
    <el-space direction="vertical">
        <el-card class="box-card" style="width: 600px">
            <el-space>

                <el-space direction="vertical" :size="2">
                    <el-space :size="2">
                        <el-tag>x0</el-tag>
                        <el-tag type="info"> {{ x0 }}</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>tp</el-tag>
                        <el-tag type="info">{{ tp }}</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s0</el-tag>
                        <el-tag type="info">{{ s0 }}</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a2</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a6</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s4</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s8</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t3</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                </el-space>

                <el-space direction="vertical" :size="2">
                    <el-space :size="2">
                        <el-tag>ra</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t0</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s1</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a3</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a7</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s5</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s9</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t4</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                </el-space>

                <el-space direction="vertical" :size="2">
                    <el-space :size="2">
                        <el-tag>sp</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t1</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a0</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a4</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s2</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s6</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s10</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t5</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                </el-space>

                <el-space direction="vertical" :size="2">
                    <el-space :size="2">
                        <el-tag>gp</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t2</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a1</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>a5</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s3</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s7</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>s11</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                    <el-space :size="2">
                        <el-tag>t6</el-tag>
                        <el-tag type="info">0x00000000</el-tag>
                    </el-space>
                </el-space>

            </el-space>
        </el-card>
        <el-card class="box-card" style="width: 600px">
            <el-input v-model="textarea" rows="14" type="textarea" placeholder="Please input" />
        </el-card>
    </el-space>
</template>
