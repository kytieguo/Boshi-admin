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
      path: "/pure-admin-utils/index",
      name: "FrameUtils",
      component: IFrame,
      meta: {
        title: "pure-admin-utils",
        frameSrc: "https://pure-admin-utils.netlify.app/"
      }
    }
  ]
} as RouteConfigsTable;
