import { addDialog } from "@/components/ReDialog";
import unexecuted from "./unexecuted.vue";
import done from "./done.vue";
import { reactive, ref, onMounted, h } from "vue";
export function worksheet(){
  const formRef = ref();
  function openUnexecutedDialog(){
    addDialog({
      title: "工单详情",
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(unexecuted)
    });
  }
  function openDoneDialog(){
    addDialog({
      title: "工单详情",
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(done)
    });
  }
  return {openUnexecutedDialog,openDoneDialog};
}
