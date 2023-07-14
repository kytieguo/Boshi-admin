import { addDialog } from "@/components/ReDialog";

import done from "./done.vue";
import { reactive, ref, onMounted, h } from "vue";
export function aftersale(){
  const formRef = ref();
  // function openTodoDialog(){
  //   addDialog({
  //     title: "售后申请详情",
  //     width: "50%",
  //     draggable: true,
  //     fullscreenIcon: true,
  //     closeOnClickModal: false,
  //     contentRenderer: () => h(todo)
  //   });
  // }
  function openDoneDialog(){
    addDialog({
      title: "售后申请详情",
      width: "50%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(done)
    });
  }
  return {openDoneDialog};
}
