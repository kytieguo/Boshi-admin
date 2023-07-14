<script setup lang="ts">
import { worksheet } from "./hook";
const{
  openDoneDialog
} = worksheet();



</script>
<template>
  <el-row>
    <el-col>
      <el-card class="box-card">
          <div class="card-header">
            <el-button class="button" text @click="openDoneDialog()">榆林神木聚丙烯01 <span style="margin-left: 900px;text-size: 10px">xx-xx至xx-xx</span></el-button>
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
    width:100%;
    justify-content: space-between;

  }
  .text {
    font-size: 100px;
    text-align: left;
  }
  .button{
    width:100%;
    height:80px
  }
</style>
