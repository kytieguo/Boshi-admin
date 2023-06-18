<script setup lang="ts">
import Check from "@iconify-icons/ep/info-filled";
</script>

<template>
  <el-container>
    <el-header style="background-color: lightgray"
      ><div style="margin-top: 15px">聚丙烯01_PH</div></el-header
    >
    <el-main style="height: 300px; background-color: white">
      <el-row>
        <el-col :span="8">
          <div class="unit" style="float: left; height: 40px">
            <el-row style="height: 30px">
              <span style="color: lightgray; text-align: left">就地系统ID</span>
            </el-row>
            <el-row>
              <span style="color: gray; text-align: left">436</span>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="unit" style="float: left; height: 40px">
            <el-row style="height: 30px">
              <span style="color: lightgray; text-align: left">通讯协议</span>
            </el-row>
            <el-row>
              <span style="color: gray; text-align: left">Modbus-TCP</span>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8" />
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="unit" style="float: left; height: 40px; margin-top: 35px">
            <el-row style="height: 30px">
              <span style="color: lightgray; text-align: left">IP地址</span>
            </el-row>
            <el-row>
              <span style="color: gray; text-align: left">192.168.100.252</span>
            </el-row>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="unit" style="float: left; height: 40px; margin-top: 35px">
            <el-row style="height: 30px">
              <span class="textdemo1" style="color: lightgray; text-align: left"
                >端口号</span
              >
            </el-row>
            <el-row>
              <span class="textdemo2" style="color: gray; text-align: left"
                >502</span
              >
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="unit" style="float: left; height: 40px; margin-top: 35px">
            <el-row style="height: 30px">
              <span style="color: lightgray; text-align: left"
                >南向Agent版本</span
              >
              <IconifyIconOffline :icon="Check" />
            </el-row>
            <el-row>
              <span style="color: gray; text-align: left">0.3.55</span>
              <el-button type="success" style="margin-left: 10px"
                >重 启</el-button
              >
            </el-row>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <el-button type="success" size="large" style="margin-top: 20px"
        >编辑</el-button
      >
    </el-footer>
  </el-container>
</template>

<style scoped>
:deep(.el-descriptions__body) {
  background: transparent;
}
</style>
