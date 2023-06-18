import {
  clone,
  useDark,
  useECharts,
  type EchartOptions
} from "@pureadmin/utils";
import { tableDataDrag } from "../data";
import { message } from "@/utils/message";
import { templateRef } from "@vueuse/core";
import { ref, type Ref, computed } from "vue";

export function useColumns() {
  const dataList = ref(clone(tableDataDrag, true).splice(0, 4));

  const columns: TableColumnList = [
    {
      label: "统计信息",
      slot: "echart"
    }
  ];

  const { isDark } = useDark();

  const theme: EchartOptions["theme"] = computed(() => {
    return isDark.value ? "dark" : "light";
  });

  dataList.value.forEach((_, i) => {
    const { setOptions } = useECharts(
      templateRef(`PieChartRef${i}`) as Ref<HTMLDivElement>,
      {
        theme
      }
    );

    // https://pure-admin-utils.netlify.app/hooks/useEcharts/useEcharts.html
    setOptions(
      {
        tooltip: {
          trigger: "item",
          // 将 tooltip 控制在图表区域里
          confine: true
        },
        legend: {
          orient: "vertical",
          left: "20%"
        },
        series: [
          {
            name: "统计信息",
            type: "pie",
            center: ["40%", "50%"],
            radius: "100%",
            data: [
              { value: 7, name: "正常运行设备" },
              { value: 1, name: "故障设备" },
              { value: 3, name: "离线设备" },
              { value: 2, name: "待机设备" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      {
        name: "click",
        callback: ({ data: { name, value } }) => {
          message(
            `您点击了第 ${i + 1} 行，图表标题为${name}，图表数据为：${value}`,
            {
              type: "success"
            }
          );
        }
      }
    );
  });

  return {
    columns,
    dataList
  };
}
