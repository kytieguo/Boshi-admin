import { $t } from "@/plugins/i18n";
import { result } from "@/router/enums";

export default {
  path: "/result",
  redirect: "/result/success",
  meta: {
    icon: "checkboxCircleLine",
    title: "网关管理",
    rank: result
  },
  children: [
    {
      path: "/result/success",
      name: "Success",
      component: () => import("@/views/result/success.vue"),
      meta: {
        title: $t("聚丙烯01_PH")
      },
      children: [
        {
          path: "/result/menu1-1/index",
          name: "maduo01",
          component: () => import("@/views/result/menu1-1/index.vue"),
          meta: {
            title: "码垛设备01",
            // 通过设置showParent为true，显示父级
            showParent: true
          }
        }
      ]
    },
    {
      path: "/result/fail",
      name: "Fail",
      component: () => import("@/views/result/fail.vue"),
      meta: {
        title: $t("聚丙烯01_FS")
      }
    }
  ]
} as RouteConfigsTable;
