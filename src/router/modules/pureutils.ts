import { utils } from "@/router/enums";
const IFrame = () => import("@/layout/frameView.vue");

export default {
  path: "/pure-admin-utils",
  redirect: "/pure-admin-utils/index",
  meta: {
    title: "故障报警",
    rank: utils
  },
  children: [
    {
      path: "/pureutils/index",
      name: "Fighting",
      component: () => import("@/views/pureutils/index.vue"),
      meta: {
        title: "未解除"
      }
    },
    {
      path: "/pure-admin-utils/index",
      name: "FrameUtils",
      component: IFrame,
      meta: {
        title: "已解除"
      }
    }
  ]
} as RouteConfigsTable;
