export function useColumns() {
  const dataList = [
    {
      name: "装袋手爪电磁阀",
      threshold: "",
      realcnt: ""
    },
    {
      name: "缩袋手爪电磁阀",
      threshold: "",
      realcnt: ""
    },
    {
      name: "震板升降接触器",
      threshold: "",
      realcnt: ""
    },
    {
      name: "料门升降接触器",
      threshold: "",
      realcnt: ""
    },
    {
      name: "口封加热片",
      threshold: "",
      realcnt: ""
    },
    {
      name: "底封加热片",
      threshold: "",
      realcnt: ""
    },
    {
      name: "角封加热片",
      threshold: "",
      realcnt: ""
    },
    {
      name: "角片光电",
      threshold: "",
      realcnt: ""
    },
    {
      name: "摆臂初始位接近开关",
      threshold: "",
      realcnt: ""
    }
  ];
  /*
  装袋手爪电磁阀
  缩袋手爪电磁阀
  震板升降接触器
  料门升降接触器
  口封加热片
  底封加热片
  角封加热片
  角片光电
  摆臂初始位接近开关
  */
  const columns: TableColumnList = [
    {
      label: "装置(元件)名称",
      prop: "name"
    },
    {
      label: "周期阈值",
      prop: "threshold"
    },
    {
      label: "实际次数",
      prop: "realcnt"
    }
  ];
  return {
    columns,
    dataList
  };
}
