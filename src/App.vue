<script lang="ts">
import { defineComponent } from 'vue'


let id = 0;
let pinId = 0;
export default defineComponent({
  data() {
    return {
      picked: "A",
      portTables: [
        { id: id++, name: "GPIOA", value: "A" },
        { id: id++, name: "GPIOB", value: "B" },
        { id: id++, name: "GPIOE", value: "E" },
        { id: id++, name: "GPIOF", value: "F" },
      ],
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

      <el-space direction="horizontal">
        <div v-for="port in portTables" :key=port.id>
          <input type="radio" :id="port.id.toString" :value="port.value" v-model="picked">{{ port.name }}
        </div>
      </el-space>

      <el-space direction="horizontal">
        <div :key="1">
          <div v-for="(pin, index) in pinTables" :key="pin.id" class="text item">
            <div v-if="index < pinNumber / 2">
              <input type="checkbox" :id="pin.id.toString" v-model="pin.checked">{{ pin.name }}
            </div>
          </div>
        </div>
        <div :key="2">
          <div v-for="(pin, index) in pinTables" :key="pin.id" class="text item">
            <div v-if="index > pinNumber / 2 - 1">
              <input type="checkbox" :id="pin.id.toString" v-model="pin.checked">{{ pin.name }}
            </div>
          </div>
        </div>
      </el-space>
    </el-space>
  </el-card>

</template>

<style scoped>
</style>
