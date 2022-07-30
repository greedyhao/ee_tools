<script lang="ts">
import { defineComponent } from 'vue'

let pinId = 0;
export default defineComponent({
  data() {
    return {
      port: "GPIOA",
      pinTables: [
        { id: pinId++, name: "pin0", checked: false },
      ],
      pinNumber: 16,
    }
  },
  methods: {
    updatePinTables() {
      if (pinId < this.pinNumber) {
        for (var i = pinId; i < this.pinNumber; i++) {
          this.pinTables.push({ id: pinId++, name: "pin" + i.toString(), checked: false });
        }
      }
    },
    clearPinSelection() {
      for (var i = 0; i < this.pinNumber; i++) {
        this.pinTables[i].checked = false;
      }
    }
  },
  mounted() {
    this.updatePinTables();
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
        <el-button type="success">生成代码</el-button>
      </el-row>

      <el-radio-group v-model="port" size="large">
        <el-radio-button label="GPIOA" />
        <el-radio-button label="GPIOB" />
        <el-radio-button label="GPIOE" />
        <el-radio-button label="GPIOF" />
      </el-radio-group>

      <el-space direction="horizontal">
        <div :key="1">
          <div v-for="(pin, index) in pinTables" :key="pin.id" class="text item">
            <div v-if="index < pinNumber / 2">
              <el-checkbox :label="pin.id.toString" v-model="pin.checked" border>{{ pin.name }}</el-checkbox>
            </div>
          </div>
        </div>
        <div :key="2">
          <div v-for="(pin, index) in pinTables" :key="pin.id" class="text item">
            <div v-if="index > pinNumber / 2 - 1">
              <el-checkbox :label="pin.id.toString" v-model="pin.checked" border>{{ pin.name }}</el-checkbox>
            </div>
          </div>
        </div>
      </el-space>

    </el-space>
  </el-card>

</template>
