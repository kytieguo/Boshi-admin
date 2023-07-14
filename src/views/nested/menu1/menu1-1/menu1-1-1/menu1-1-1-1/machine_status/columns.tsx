// import {
//   clone,
//   useDark,
//   useECharts,
//   type EchartOptions
// } from "@pureadmin/utils";
// import { tableDataDrag } from "../data";
// import { message } from "@/utils/message";
// import { templateRef } from "@vueuse/core";
// import { ref, type Ref, computed } from "vue";

export function useColumns() {
  const dataList = [
    {
      label: "系统状态",
      key: "status",
      value: "自动运行"
    },
    {
      label: "包装速度",
      key: "speed",
      value: "xxx袋/小时"
    },
    {
      label: "包装数量",
      key: "quantity",
      value: "xxx袋"
    },
    {
      label: "袋长设定",
      key: "length",
      value: "xxxmm"
    },
    {
      label: "震板强度",
      key: "card",
      value: "xxx"
    },
    {
      label: "底封温度",
      key: "under",
      value: "xxx℃"
    },
    {
      label: "口封温度",
      key: "upper",
      value: "xxx℃"
    },
    {
      label: "左角封温度",
      key: "lefttmp",
      value: "xxx℃"
    },
    {
      label: "右角封温度",
      key: "righttmp",
      value: "xxx℃"
    }
  ];
  return {
    dataList
  };
}
// 系统状态：自动运行
//           手动操作
//           系统故障
//           系统停止"
// 包装速度：xxx袋/小时
// 包装数量：xxx袋
// 袋长设定：xxxmm
// 震板强度：xxx
// 底封温度：xxx℃
// 口封温度：xxx℃
// 左角封温度：xxx℃
// 右角封温度：xxx℃
