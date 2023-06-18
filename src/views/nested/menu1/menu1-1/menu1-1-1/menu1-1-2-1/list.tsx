import Alarm from "./alarm/index.vue";
import File from "./file/index.vue";
import InfoS from "./info-summary/index.vue";
import ItemIn from "./item-info/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/nested/menu1/menu1-1/menu1-1-1/menu1-1-1-1/${val}/index.vue`;

export const list = [
  {
    key: "info-summary",
    content: rendContent("info-summary"),
    title: "信息概览",
    component: InfoS
  },
  {
    key: "item-info",
    content: rendContent("item-info"),
    title: "项目信息",
    component: ItemIn
  },
  {
    key: "alarm",
    content: rendContent("alarm"),
    title: "报警信息",
    component: Alarm
  },
  {
    key: "file",
    content: rendContent("file"),
    title: "文件",
    component: File
  }
];
