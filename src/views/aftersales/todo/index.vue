<script setup lang="ts">
import { aftersale } from "./hook";
const{
  openTodoDialog
} = aftersale();



</script>

<template>
  <el-row>
    <el-col>
      <el-card class="box-card">
        <div class="card-header">
          <el-button class="button" text @click="openTodoDialog()">测试设备售后</el-button>
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
  
    justify-content: space-between;

  }

  .text {
    font-size: 40px;

  }
</style>
