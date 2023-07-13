<script setup lang="ts">
import { worksheet } from "./hook";
const{
  openUnexecutedDialog,
  openDoneDialog
} = worksheet();



</script>
<template>
  <el-row>
    <el-col>
      <el-card class="box-card">
          <div class="card-header">
            <el-button class="button" text
            @click="openUnexecutedDialog()">榆林神木聚丙烯01</el-button>
            <span>xx-xx至xx-xx</span>
          </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <el-card class="box-card">
          <div class="card-header">
            <el-button class="button" text @click="openDoneDialog()">榆林神木聚丙烯01</el-button>
            <span>xx-xx至xx-xx</span>
          </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<style>
  .box-card {
    width: 100%;
    margin-top:20px
  }
  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .text {
    font-size: 100px;
    text-align: center;
  }
</style>
