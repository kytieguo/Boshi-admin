<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>当前低故障级别故障报警</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="text">{{ 0 }}</div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>当周中故障级别故障报警</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="text">{{ 0 }}</div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>当月高故障级别故障报警</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="text">{{ 0 }}</div>
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>历史数据-总垛数-当周-折线</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="chart" id="linechart" />
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>历史数据-码垛速度-当天</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="chart" id="histogram" />
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>实时数据-码垛速度-仪表盘</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div class="chart" id="dashboard" />
      </el-card>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>实时数据-数据表</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="data" label="数据点" width="250" />
            <el-table-column prop="value" label="值" />
          </el-table>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>实时数据-运行状态-卡片图</span>
            <el-button class="button" text>查看更多</el-button>
          </div>
        </template>
        <div />
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import * as echarts from "echarts";
export default {
  data() {
    return {
      chartDom1: "",
      myChart1: "",
      option1: "",
      chartDom2: "",
      myChart2: "",
      option2: "",
      chartDom3: "",
      myChart3: "",
      option3: "",
      tableData: [
        {
          data: "转位计数",
          value: 0
        },
        {
          data: "编辑计数",
          value: 9
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.chartDom1 = document.getElementById("linechart");
      this.myChart1 = echarts.init(this.chartDom1);
      this.chartDom2 = document.getElementById("histogram");
      this.myChart2 = echarts.init(this.chartDom2);
      this.chartDom3 = document.getElementById("dashboard");
      this.myChart3 = echarts.init(this.chartDom3);
      this.initChart();
    });
  },

  methods: {
    initChart() {
      this.option1 = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        legend: {
          bottom: 0
        },
        series: [
          {
            name: "总垛数",
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line"
          }
        ]
      };
      this.option2 = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        legend: {
          bottom: 0
        },
        series: [
          {
            name: "码垛速度",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar"
          }
        ]
      };
      this.option3 = {
        series: [
          {
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 240,
            splitNumber: 6,
            itemStyle: {
              color: "#58D9F9",
              shadowColor: "rgba(0,138,255,0.45)",
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              width: 12
            },
            pointer: {
              icon: "path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z",
              length: "70%",
              width: 12,
              offsetCenter: [0, "5%"]
            },
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 12
              }
            },
            axisTick: {
              splitNumber: 2,
              lineStyle: {
                width: 2,
                color: "#999"
              }
            },
            splitLine: {
              length: 12,
              lineStyle: {
                width: 3,
                color: "#999"
              }
            },
            axisLabel: {
              distance: 25,
              color: "#999",
              fontSize: 15
            },
            title: {
              show: false
            },
            detail: {
              backgroundColor: "#fff",
              width: "60%",
              lineHeight: 40,
              height: 40,
              offsetCenter: [10, "25%"],
              valueAnimation: true,
              formatter: function (value) {
                return "{value|" + value.toFixed(0) + "}{unit|千}";
              },
              rich: {
                value: {
                  fontSize: 30,
                  fontWeight: "bolder",
                  color: "#777"
                },
                unit: {
                  fontSize: 20,
                  color: "#999"
                }
              }
            },
            data: [
              {
                value: 100
              }
            ]
          }
        ]
      };

      this.option1 && this.myChart1.setOption(this.option1, true);
      this.option2 && this.myChart2.setOption(this.option2, true);
      this.option3 && this.myChart3.setOption(this.option3, true);
    }
    //
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  min-height: 36px;
  border-radius: 4px;
}

.ep-bg-purple {
  background-color: aqua;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: larger;
  font-weight: bolder;
}

.text {
  font-size: 40px;
  text-align: center;
}

.box-card {
  width: 100%;
}

.chart {
  height: 400px;
}
</style>
