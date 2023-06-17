<script setup lang="ts">
import { ref } from "vue";
// import { useI18n } from "vue-i18n";
// import { useRoute } from "vue-router";
import { PureTable } from "@pureadmin/table";
import { useColumns } from "./columns";
defineOptions({
  name: "Menu1-1-2"
});
const tableRef = ref();
const {
  loading,
  columns,
  dataList,
  pagination,
  loadingConfig,
  adaptiveConfig,
  onSizeChange,
  onCurrentChange
} = useColumns();
</script>

<template>
  <div>
    <el-card shadow="never">
      <div class="dark:text-white">
        <pure-table
          ref="tableRef"
          border
          adaptive
          :adaptiveConfig="adaptiveConfig"
          row-key="id"
          alignWhole="center"
          showOverflowTooltip
          :loading="loading"
          :loading-config="loadingConfig"
          :data="
            dataList.slice(
              (pagination.currentPage - 1) * pagination.pageSize,
              pagination.currentPage * pagination.pageSize
            )
          "
          :columns="columns"
          :pagination="pagination"
          @page-size-change="onSizeChange"
          @page-current-change="onCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>
