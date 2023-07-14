<script setup lang="ts">
import { useColumns } from "./columns";
const { columns, dataList } = useColumns();
</script>

<template>
  <pure-table row-key="id" border :data="dataList" :columns="columns">
    <template #echart="{ index }">
      <div :ref="'PieChartRef' + index" class="w-full h-[100px]" />
    </template>
  </pure-table>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="当前报警列表" name="first">当前报警列表</el-tab-pane>
    <el-tab-pane label="历史报警列表" name="second">历史报警列表</el-tab-pane>
    <el-tab-pane label="报警频次" name="third">报警频次</el-tab-pane>
  </el-tabs>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" />
  </el-table>
</template>

<script setup lang="ts"></script>
