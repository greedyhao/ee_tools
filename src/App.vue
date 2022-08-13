<script setup lang="ts">
import GenPinInit from "./components/GenPinInit.vue"
import ShowHexInBitView from "./components/ShowHexInBitView.vue"
import ConverExceptionLogVue from "./components/ConverExceptionLog.vue"

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

import { emit } from '@tauri-apps/api/event'
import { listen } from '@tauri-apps/api/event'

const version = ref('0.1.1');
const activeName = ref('1');
const checked = ref(false);

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const onChange = (status: boolean) => {
  console.log(status)

  emit('tauri://update')

  listen('tauri://update-available', function (res) {
    console.log('New version available: ', res)
    emit('tauri://update-install')
  })

  listen('tauri://update-status', function (res) {
    console.log('New status: ', res)
  })
}
</script>

<template>
  <el-space :size="10" spacer="|">
    version
    <el-check-tag checked @change="onChange">{{ version }}</el-check-tag>
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
