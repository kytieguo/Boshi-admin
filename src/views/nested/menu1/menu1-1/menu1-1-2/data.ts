import dayjs from "dayjs";
import { clone } from "@pureadmin/utils";

const tableData = [
  {
    position: "编组动作1超时",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "21",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "编组动作2超时",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "21",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "编组变频失败",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "15",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "本月运行汇报",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "10",
    datatype: "统计数据",
    acttype: "记账",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "本月产量汇报",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "11",
    datatype: "统计数据",
    acttype: "记账",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "安全光电警报",
    type: "采集",
    action: "更改设置",
    duation: "15s",
    rank: "21",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "编组动作21超时",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "21",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  },
  {
    position: "编组动作15超时",
    type: "采集",
    action: "更改设置",
    duation: "5s",
    rank: "21",
    datatype: "维护数据",
    acttype: "变位",
    material: "其他",
    sum: "None",
    unit: "无"
  }
];

const tableDataMore = clone(tableData, true).map(item =>
  Object.assign(item, {
    state: "California",
    city: "Los Angeles",
    "post-code": "CA 90036"
  })
);

const tableDataImage = clone(tableData, true).map((item, index) =>
  Object.assign(item, {
    image: `https://pure-admin.github.io/pure-admin-table/imgs/${index + 1}.jpg`
  })
);

const tableDataSortable = clone(tableData, true).map((item, index) => {
  delete item["date"];
  Object.assign(item, {
    date: `${dayjs(new Date()).format("YYYY-MM")}-${index + 1}`
  });
});

const tableDataDrag = clone(tableData, true).map((item, index) => {
  delete item["address"];
  delete item["date"];
  return Object.assign(
    {
      id: index + 1,
      date: `${dayjs(new Date()).format("YYYY-MM")}-${index + 1}`
    },
    item
  );
});

const tableDataEdit = clone(tableData, true).map((item, index) => {
  delete item["date"];
  return Object.assign(
    {
      id: index + 1,
      date: `${dayjs(new Date()).format("YYYY-MM")}-${index + 1}`
    },
    item
  );
});

export {
  tableData,
  tableDataDrag,
  tableDataMore,
  tableDataEdit,
  tableDataImage,
  tableDataSortable
};
