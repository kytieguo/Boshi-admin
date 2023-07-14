import { addDialog } from "@/components/ReDialog";
import dialog from "./dialog.vue";
import { h } from "vue";
export function alarmdetail() {
  function openDetailDialog() {
    addDialog({
      title: "报警详情",
      width: "50%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(dialog)
    });
  }
  return { openDetailDialog };
}
