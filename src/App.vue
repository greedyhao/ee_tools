<script setup lang="ts">
import GenPinInit from "./components/GenPinInit.vue"
import ShowHexInBitView from "./components/ShowHexInBitView.vue"
import ConverExceptionLogVue from "./components/ConverExceptionLog.vue"

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const version = ref('0.1.1');
const activeName = ref('1')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-space :size="10" spacer="|">
    version
    <el-tag effect="dark">{{ version }}</el-tag>
  </el-space>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="管脚初始化" name="1">
      <GenPinInit />
    </el-tab-pane>
    <el-tab-pane label="进制转换" name="2">
      <ShowHexInBitView />
    </el-tab-pane>
    <el-tab-pane label="异常信息处理" name="3">
      <ConverExceptionLogVue />
    </el-tab-pane>
  </el-tabs>

</template>

<style scoped>
</style>
