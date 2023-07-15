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
      <el-text style="font-size: larger">基本信息</el-text><br />
    </div>
    <el-row>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">建筑面积:{{ floor_space }}</el-text>
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px"
            >竣工日期:{{ completion_date }}</el-text
          >
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <el-text style="font-size: 17px">所属行业:{{ industry }}</el-text>
        </el-card>
      </el-col>
    </el-row>
    <el-divider />
    <el-text style="font-size: larger">地理位置: {{ location }}</el-text>
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
      floor_space: "xxx",
      completion_date: "xxxx",
      industry: "xxxx",
      location: "xxxxx"
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
