import Future from "./future/index.vue";
import Past from "./past/index.vue";
import Today from "./today/index.vue";


const rendContent = (val: string) =>
  `代码位置：src/views/worksheet/menu1/plan/${val}/index.vue`;

export const list = [
  {
    key: "past",
    content: rendContent("past"),
    title: "以往",
    component: Past
  },
  {
    key: "today",
    content: rendContent("today"),
    title: "今天",
    component: Today
  },
  {
    key: "future",
    content: rendContent("future"),
    title: "未来",
    component: Future
  }
];
