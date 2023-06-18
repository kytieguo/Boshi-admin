<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header
      style="
        height: 80px;
        font-size: 12px;
        text-align: right;
        background-color: white;
      "
    >
      <span style="float: left; margin-top: 15px; font-size: 20px"
        >码垛设备01</span
      >
      <el-tag
        type="success"
        style="float: left; margin-top: 10px; margin-left: 10px"
        >网关在线</el-tag
      >
      <el-tag
        type="success"
        style="float: left; margin-top: 10px; margin-left: 10px"
        >设备在线</el-tag
      >
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
        style="margin-top: 50px"
      >
        <el-tab-pane label="信息概览" name="first" />
        <el-tab-pane label="机器设备信息" name="second" />
        <el-tab-pane label="数据监视" name="third" />
        <el-tab-pane label="运维参数" name="fourth" />
        <el-tab-pane label="运营指标" name="fifth" />
        <el-tab-pane label="报警信息" name="sixth" />
        <el-tab-pane label="设备维修历史" name="seventhth" />
      </el-tabs>
      <div class="line" />
    </el-header>
    <el-main>
      <el-container>
        <el-header style="background-color: lightgray"
          ><div style="margin-top: 15px">数据监视</div></el-header
        >
        <el-main style="height: 175px; background-color: white">
          <el-row>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >转位计数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">4</span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >编辑计数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">3</span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >当前层数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">2</span>
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div
                class="unit"
                style="float: left; height: 40px; margin-top: 35px"
              >
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left">总垛数</span>
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">105</span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="unit"
                style="float: left; height: 40px; margin-top: 35px"
              >
                <el-row style="height: 30px">
                  <span
                    class="textdemo1"
                    style="color: lightgray; text-align: left"
                    >码垛速度</span
                  >
                </el-row>
                <el-row>
                  <span class="textdemo2" style="color: gray; text-align: left"
                    >126</span
                  >
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div
                class="unit"
                style="float: left; height: 40px; margin-top: 35px"
              >
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >累计垛数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">44.5万</span>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
      <div style="height: 1.25rem" />
      <el-container>
        <el-header style="background-color: lightgray"
          ><div style="margin-top: 15px">本月生产效率</div></el-header
        >
        <el-main style="height: 85px; background-color: white">
          <el-row>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >转位计数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">4</span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >转位计数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">4</span>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="unit" style="float: left; height: 40px">
                <el-row style="height: 30px">
                  <span style="color: lightgray; text-align: left"
                    >转位计数</span
                  >
                </el-row>
                <el-row>
                  <span style="color: gray; text-align: left">4</span>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-main>
    <el-footer
      style="font-size: 12px; text-align: right; background-color: white"
    >
      <el-button type="success" style="float: left; margin-top: 0.625rem"
        >编辑显示规则</el-button
      >
    </el-footer>
  </el-container>
</template>

<style>
.el-main {
  color: #333;
  background-color: white;
}

.el-header {
  color: #333;
  text-align: left;
  background-color: #b3c0d1;
}

.el-footer {
  color: #333;
  background-color: #b3c0d1;
}

.el-aside {
  color: #333;
}

.el-tab-pane.is-active {
  color: #67c23a;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "3"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
