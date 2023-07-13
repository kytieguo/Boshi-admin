<script setup lang="ts">
import { useColumns } from "./columns";

const { dataList, columns } = useColumns();
</script>

<template>
  <div style="padding-left: 1%">
    <pure-table
      :data="dataList"
      :columns="columns"
      stripe
      style="padding-left: 1%"
    />
  </div>
</template>
