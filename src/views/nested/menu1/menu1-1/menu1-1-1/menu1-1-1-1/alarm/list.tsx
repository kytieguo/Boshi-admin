// import Alarm from "./alarm/index.vue";
import CurAlarm from "./cur-alarm/index.vue";
import PassAlarm from "./pass-alarm/index.vue";
import FreAlarm from "./fre-alarm/index.vue";

const rendContent = (val: string) =>
  `代码位置：src/views/nested/menu1/menu1-1/menu1-1-1/menu1-1-1-1/${val}/index.vue`;

export const list = [
  {
    key: "cur-alarm",
    content: rendContent("cur-alarm"),
    title: "当前报警列表",
    component: CurAlarm
  },
  {
    key: "pass-alarm",
    content: rendContent("pass-alarm"),
    title: "历史报警列表",
    component: PassAlarm
  },
  {
    key: "fre-alarm",
    content: rendContent("fre-alarm"),
    title: "报警频次",
    component: FreAlarm
  }
];
