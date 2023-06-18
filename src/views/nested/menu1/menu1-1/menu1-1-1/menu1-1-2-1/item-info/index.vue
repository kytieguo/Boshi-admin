<script setup lang="ts">
import { useColumns } from "./columns";

const { columns, dataList } = useColumns();
</script>

<template>
  <div class="container">
    <div class="main">
      <pure-table row-key="id" border :data="dataList" :columns="columns">
        <template #echart="{ index }">
          <div :ref="'PieChartRef' + index" class="w-full h-[100px]" />
        </template>
      </pure-table>
    </div>
    <div class="main">
      <p style="color: gray; text-indent: 1em">{{ "能耗统计" }}</p>
      <p style="color: gray; text-indent: 1em">{{ "0Kwh" }}</p>
    </div>
    <div>
      <el-form-item>
        <el-button class="btn" size="small" type="primary">
          {{ "编辑" }}
        </el-button>
        <el-button class="btn" size="small" type="primary">
          {{ "取消" }}
        </el-button>
      </el-form-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.main {
  margin-bottom: 100px;
}

.btn {
  min-width: 56px;
  min-height: 28px;
  margin-top: 70px;
  margin-left: 10px;
}
</style>
