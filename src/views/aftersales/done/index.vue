<script setup lang="ts">
import { aftersale } from "./hook";
const{
  openDoneDialog
} = aftersale();



</script>

<template>
  <el-row>
    <el-col>
      <el-card class="box-card">
        <div class="card-header">
          <el-button class="button" text @click="openDoneDialog()">测试设备售后</el-button>
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
  .button{
    width:100%;
    height:80px;
    text-align: left
  }
</style>
