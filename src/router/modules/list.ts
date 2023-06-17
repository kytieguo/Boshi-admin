import { $t } from "@/plugins/i18n";
import { list } from "@/router/enums";

export default {
  path: "/list",
  redirect: "/list/card",
  meta: {
    icon: "listCheck",
    title: "数据看板",
    rank: list
  },
  children: [
    {
      path: "/list/card",
      name: "ListCard",
      component: () => import("@/views/list/card/index.vue"),
      meta: {
        icon: "card",
        title: $t("menus.hsListCard"),
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
