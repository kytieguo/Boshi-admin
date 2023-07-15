<template>
  <div>
    <div style="margin-bottom: 15px">
      <el-text style="font-size: larger">统计信息</el-text>
    </div>
    <el-row>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px"
            >正常运行设备个数:{{ normal }}</el-text
          >
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">故障设备个数:{{ fault }}</el-text>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">离线设备个数:{{ offline }}</el-text>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">待机设备个数:{{ standby }}</el-text>
        </el-card>
      </el-col>
    </el-row>
    <el-divider />
    <div style="margin-bottom: 15px">
      <el-text style="font-size: larger">能耗统计</el-text>
    </div>
    <el-text style="font-size: larger">{{ energy_consumption }}kWh</el-text>
    <el-divider />
    <div style="margin-bottom: 15px">
      <el-text style="font-size: larger">环境信息</el-text><br />
    </div>
    <el-row>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">室内温度:{{ temperature }}</el-text>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">室内湿度:{{ humidity }}%</el-text>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px"
            >室内粉尘浓度:{{ dust_concentration }}mg/m<sup>2</sup></el-text
          >
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      normal: 10,
      fault: 2,
      offline: 0,
      standby: 0,
      energy_consumption: 1000,
      temperature: 24.3,
      humidity: 9.7,
      dust_concentration: 0.43
    };
  }
};
</script>

<style scoped>
.box-card {
  width: 90%;
}

.el-col {
  margin: 5px;
  border-radius: 4px;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.grid-content {
  min-height: 36px;
  border-radius: 4px;
}
</style>
