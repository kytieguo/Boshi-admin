export function useColumns() {
  const dataList = [
    {
      label: "生产效率",
      key: "efficiency",
      value: ""
    },
    {
      label: "运行时间",
      key: "runtime",
      value: ""
    },
    {
      label: "故障时间",
      key: "failtime",
      value: ""
    },
    {
      label: "停机时间",
      key: "stoptime",
      value: ""
    }
  ];
  return {
    dataList
  };
}
// "生产效率：按班组统计
//           按月份统计
//           按年份统计"
// "运行时间：按班组统计
//           按月份统计
//           按年份统计"
// "故障时间：按班组统计
//           按月份统计
//           按年份统计"
// "停机时间：按班组统计
//           按月份统计
//           按年份统计"
