<script lang="ts">
import { defineComponent } from 'vue'
import { ElMessageBox } from 'element-plus'
import { invoke } from '@tauri-apps/api'

let pinId = 0;
export default defineComponent({
    data() {
        return {
            pinCfg: {
                port: "GPIOA",
                pinTables: [
                    { id: pinId++, name: "pin0", checked: false },
                ],
                pinNumber: 16,
                pinDefaultStateIsLow: false,
            },
            pinIsUpdate: false,
            result: "未检测到引脚",
            dialogTableVisible: false,
            textarea2: "",
        }
    },
    methods: {
        updatePinTables() {
            if (pinId < this.pinCfg.pinNumber) {
                for (var i = pinId; i < this.pinCfg.pinNumber; i++) {
                    this.pinCfg.pinTables.push({ id: pinId++, name: "pin" + i.toString(), checked: false });
                }
            }
        },
        clearPinSelection() {
            for (var i = 0; i < this.pinCfg.pinNumber; i++) {
                this.pinCfg.pinTables[i].checked = false;
            }
        },
        genCodeEnd() {
            this.dialogTableVisible = false;
            invoke('copy_text', { text: this.result });
        },
        genCodeDo() {
            if (this.pinIsUpdate == true) {
                this.pinIsUpdate = false; // 避免重复数据

                var pinCode = "(" + this.result + ")";
                var portFen = this.pinCfg.port + "FEN" + " &= ~" + pinCode + ";\n";
                var portDe = this.pinCfg.port + "DE" + " |= " + pinCode + ";\n";
                var portDir = this.pinCfg.port + "DIR" + " &= ~" + pinCode + ";\n";
                var port = "";
                if (this.pinCfg.pinDefaultStateIsLow == false) {
                    port = this.pinCfg.port + " |= " + pinCode + ";\n";
                } else {
                    port = this.pinCfg.port + " &= ~" + pinCode + ";\n";
                }
                this.result = portFen + portDe + portDir + port;
            }
        },
        genCode() {
            if (this.pinIsUpdate == false && this.result == "") {
                ElMessageBox.alert('请先选择引脚', '注意！', {
                    confirmButtonText: 'Close',
                })
            } else {
                this.genCodeDo();
                this.dialogTableVisible = true;
            }
        },
    },
    mounted() {
        this.updatePinTables();

    },
    watch: {
        pinCfg: {
            handler(val) {
                var selectedPin = "";
                for (var i = 0; i < this.pinCfg.pinNumber; i++) {
                    if (this.pinCfg.pinTables[i].checked == true) {
                        selectedPin += "BIT(" + i.toString() + ")" + " | ";
                    }
                }
                selectedPin = selectedPin.slice(0, selectedPin.length - 3);
                this.result = selectedPin;
                if (selectedPin != "") {
                    this.pinIsUpdate = true;
                }
            },
            deep: true
        }
    },
    setup() {
    }
})
</script>

<template>
    <el-card class="box-card">

        <el-space direction="vertical">

            <el-row class="mb-4">
                <el-button type="info" @click="clearPinSelection">清空pin选择</el-button>
                <el-button type="success" @click="genCode">生成代码</el-button>
            </el-row>

            <el-space direction="horizontal">
                <el-tag size="large">默认引脚电平选择</el-tag>
                <el-switch v-model="pinCfg.pinDefaultStateIsLow" size="large" active-text="低电平" inactive-text="高电平" />
            </el-space>

            <el-radio-group v-model="pinCfg.port" size="large">
                <el-radio-button label="GPIOA" />
                <el-radio-button label="GPIOB" />
                <el-radio-button label="GPIOE" />
                <el-radio-button label="GPIOF" />
            </el-radio-group>

            <el-space direction="horizontal">
                <div :key="1">
                    <div v-for="(pin, index) in pinCfg.pinTables" :key="pin.id" class="text item">
                        <div v-if="index < pinCfg.pinNumber / 2">
                            <el-checkbox :label="pin.id.toString" v-model="pin.checked" border>{{ pin.name }}
                            </el-checkbox>
                        </div>
                    </div>
                </div>
                <div :key="2">
                    <div v-for="(pin, index) in pinCfg.pinTables" :key="pin.id" class="text item">
                        <div v-if="index > pinCfg.pinNumber / 2 - 1">
                            <el-checkbox :label="pin.id.toString" v-model="pin.checked" border>{{ pin.name }}
                            </el-checkbox>
                        </div>
                    </div>
                </div>
            </el-space>

            <el-dialog v-model="dialogTableVisible" title="代码预览">

                <el-input v-model="result" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="未选择引脚" />

                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="genCodeEnd">复制到剪切板</el-button>
                    </span>
                </template>
            </el-dialog>

        </el-space>
    </el-card>

</template>
