// import Alarm from "./alarm/index.vue";
import ClassSta from "./class-sta/index.vue";
import MonthSta from "./month-sta/index.vue";
import YearSta from "./year-sta/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/nested/menu1/menu1-1/menu1-1-1/menu1-1-1-1/${val}/index.vue`;

export const list = [
  {
    key: "class-sta",
    content: rendContent("class-sta"),
    title: "班组",
    component: ClassSta
  },
  {
    key: "month-sta",
    content: rendContent("month-sta"),
    title: "月份",
    component: MonthSta
  },
  {
    key: "year-sta",
    content: rendContent("year-sta"),
    title: "年份",
    component: YearSta
  }
];
