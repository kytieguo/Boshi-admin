// import Alarm from "./alarm/index.vue";
// import File from "./file/index.vue";
// import InfoS from "./info-summary/index.vue";
// import ItemIn from "./item-info/index.vue";
import MachineStatus from "./machine_status/index.vue";
import ProductionData from "./production_data/index.vue";
import LifeCycle from "./life_cycle/index.vue";
import Alarm from "./alarm/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/nested/menu1/menu1-1/menu1-1-1/menu1-1-1-1/${val}/index.vue`;

export const list = [
  // {
  //   key: "info-summary",
  //   content: rendContent("info-summary"),
  //   title: "信息概览",
  //   component: InfoS
  // },
  // {
  //   key: "item-info",
  //   content: rendContent("item-info"),
  //   title: "项目信息",
  //   component: ItemIn
  // },
  // {
  //   key: "alarm",
  //   content: rendContent("alarm"),
  //   title: "报警信息",
  //   component: Alarm
  // },
  // {
  //   key: "file",
  //   content: rendContent("file"),
  //   title: "文件",
  //   component: File
  // },
  //第二次要求增加
  {
    key: "machine_status",
    content: rendContent("machine_status"), //content是自定义函数,用来提示当前代码位置,使用中已经注释掉该提示
    title: "设备状态监测",
    component: MachineStatus
  },
  {
    key: "production_data ",
    content: rendContent("production_data"),
    title: "生产数据检测",
    component: ProductionData
  },
  {
    key: "life_cycle",
    content: rendContent("life_cycle"),
    title: "生命周期",
    component: LifeCycle
  },
  {
    key: "alarm",
    content: rendContent("alarm"),
    title: "报警信息",
    component: Alarm
  }
];
