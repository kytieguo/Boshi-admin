<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "Fighting"
});
import { alarmdetail } from "./hook";
const { openDetailDialog } = alarmdetail();
</script>

<template>
  <!--  <el-card class="box-card" style="display: flex; flex-flow: wrap">
    <el-row>
      <el-button type="text" @click="openDetailDialog"
        >点击打开 Dialog</el-button
      >
      <span style="margin-left: 20px" />
      <span>榆林神木聚丙烯01</span>
      <span>包装设备01</span>
      <span style="margin-left: 20px" />
      <span>05-24</span>
    </el-row>
  </el-card> -->
  <el-button style="width: 400px; height: 70px" @click="openDetailDialog">
    <div style="float: left">
      <span style="margin-left: 20px; font-size: 15px">热封加热片</span>
      <span style="margin-left: 20px">榆林神木聚丙烯01</span>
      <span style="margin-left: 10px">包装设备01</span>
      <span style="margin-left: 20px">05-24</span>
    </div>
  </el-button>
</template>

<style>
.box-card {
  width: 1000px;
}
</style>
