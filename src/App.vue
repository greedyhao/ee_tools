<script setup lang="ts">
import GenPinInit from "./components/GenPinInit.vue"
import ShowHexInBitView from "./components/ShowHexInBitView.vue"

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const version = ref('0.1.1');
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-row>
    version
    <el-tag effect="dark">{{ version }}</el-tag>
  </el-row>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="管脚初始化" name="first">
      <GenPinInit />
    </el-tab-pane>
    <el-tab-pane label="进制转换" name="second">
      <ShowHexInBitView />
    </el-tab-pane>
  </el-tabs>

</template>

<style scoped>
</style>
