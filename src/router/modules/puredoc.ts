import { doc } from "@/router/enums";
const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/pure-admin-doc",
  redirect: "/pure-admin-doc/index",
  meta: {
    title: "文档管理",
    rank: doc
  },
  children: [
    {
      path: "/pure-admin-doc/index",
      name: "FrameDoc",
      component: IFrame,
      meta: {
        title: "pure-admin-doc",
        frameSrc: "https://yiming_chang.gitee.io/pure-admin-doc/"
      }
    }
  ]
} as RouteConfigsTable;
