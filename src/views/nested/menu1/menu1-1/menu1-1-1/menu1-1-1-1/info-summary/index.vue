<script setup lang="ts">
import { useColumns } from "./columns";

const { columns, dataList } = useColumns();
</script>

<template>
  <pure-table row-key="id" border :data="dataList" :columns="columns">
    <template #echart="{ index }">
      <!-- <p style="text-indent: 2em">{{ "统计信息" }}</p> -->
      <div :ref="'PieChartRef' + index" class="w-full h-[100px]" />
    </template>
  </pure-table>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
