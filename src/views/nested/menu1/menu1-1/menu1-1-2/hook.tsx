// import dayjs from "dayjs";
import editForm from "./form.vue";
// import { handleTree } from "@/utils/tree";
import { message } from "@/utils/message";
import { getDeptList } from "@/api/system";
// import { usePublicHooks } from "./hooks";
import { addDialog } from "@/components/ReDialog";
import { reactive, ref, onMounted, h } from "vue";
import { type FormItemProps } from "./types";
import { cloneDeep } from "@pureadmin/utils";
// import { cloneDeep, isAllEmpty } from "@pureadmin/utils";
export function useDept() {
  const form = reactive({
    name: "",
    status: null
  });

  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);
  // const { tagStyle } = usePublicHooks();

  const columns: TableColumnList = [
    {
      label: "点位名称",
      prop: "position"
    },
    {
      label: "设备类型",
      prop: "type"
    },
    {
      label: "时间",
      prop: "duation"
    },
    {
      label: "级别",
      prop: "rank"
    },
    {
      label: "数据类型",
      prop: "datatype"
    },
    {
      label: "动作类型",
      prop: "acttype"
    },
    {
      label: "介质",
      prop: "material"
    },
    {
      label: "汇总方式",
      prop: "sum"
    },
    {
      label: "单位",
      prop: "unit"
    },
    // {
    //   label: "状态",
    //   prop: "status",
    //   minWidth: 100,
    //   cellRenderer: ({ row, props }) => (
    //     <el-tag size={props.size} style={tagStyle.value(row.status)}>
    //       {row.status === 1 ? "启用" : "停用"}
    //     </el-tag>
    //   )
    // },
    {
      label: "操作",
      fixed: "right",
      width: 160,
      slot: "operation"
    }
  ];

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }

  function resetForm(formEl) {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  }

  async function onSearch() {
    loading.value = true;
    const { data } = await getDeptList(); // 这里是返回一维数组结构，前端自行处理成树结构，返回格式要求：唯一id加父节点parentId，parentId取父节点id
    const newData = data;
    // console.log(newData);
    // if (!isAllEmpty(form.name)) {
    //   // 前端搜索部门名称
    //   newData = newData.filter(item => item.name.includes(form.name));
    // }
    // if (!isAllEmpty(form.status)) {
    //   // 前端搜索状态
    //   newData = newData.filter(item => item.status === form.status);
    // }
    dataList.value = newData; //handleTree(newData); // 处理成树结构
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  function formatHigherDeptOptions(treeList) {
    // 根据返回数据的status字段值判断追加是否禁用disabled字段，返回处理后的树结构，用于上级部门级联选择器的展示（实际开发中也是如此，不可能前端需要的每个字段后端都会返回，这时需要前端自行根据后端返回的某些字段做逻辑处理）
    if (!treeList || !treeList.length) return;
    const newTreeList = [];
    for (let i = 0; i < treeList.length; i++) {
      treeList[i].disabled = treeList[i].status === 0 ? true : false;
      formatHigherDeptOptions(treeList[i].children);
      newTreeList.push(treeList[i]);
    }
    return newTreeList;
  }

  function openDialog(title = "新增", row?: FormItemProps) {
    console.log(row);
    addDialog({
      title: `${title} 点位: ${row.position}`,
      props: {
        formInline: {
          higherDeptOptions: formatHigherDeptOptions(cloneDeep(dataList.value)),
          alarms: row?.alarms ?? []
          // parentId: row?.parentId ?? 0,
          // name: row?.name ?? "",
          // principal: row?.principal ?? "",
          // phone: row?.phone ?? "",
          // email: row?.email ?? "",
          // sort: row?.sort ?? 0,
          // status: row?.status ?? 1,
          // remark: row?.remark ?? ""
        }
      },
      width: "40%",
      draggable: true,
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline as FormItemProps;
        function chores() {
          message(`您${title}了点位名称为${curData.position}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        FormRef.validate(valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              // 实际开发先调用新增接口，再进行下面操作
              chores();
            } else {
              // 实际开发先调用编辑接口，再进行下面操作
              chores();
            }
          }
        });
      }
    });
  }

  function handleDelete(row) {
    message(`您删除了部门名称为${row.name}的这条数据`, { type: "success" });
    onSearch();
  }

  onMounted(() => {
    onSearch();
  });

  return {
    form,
    loading,
    columns,
    dataList,
    /** 搜索 */
    onSearch,
    /** 重置 */
    resetForm,
    /** 新增、编辑部门 */
    openDialog,
    /** 删除部门 */
    handleDelete,
    handleSelectionChange
  };
}
