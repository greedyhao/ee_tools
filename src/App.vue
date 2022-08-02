<script setup lang="ts">
import GenPinInit from "./components/GenPinInit.vue"
import ShowHexInBitView from "./components/ShowHexInBitView.vue"

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>

  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first"><GenPinInit /></el-tab-pane>
    <el-tab-pane label="Config" name="second"><ShowHexInBitView /></el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
  
</template>

<style scoped>
</style>
