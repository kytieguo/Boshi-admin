<script setup lang="ts">
import { useColumns } from "./columns";

const { dataList } = useColumns();
</script>

<template>
  <div v-for="item in dataList" :key="item.key" style="padding: 1% 2% 1% 4%">
    {{ item.label }}: {{ item.value }}
  </div>
</template>
