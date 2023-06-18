<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
import { formRules } from "./rule";
import { FormProps } from "./types";
// import { usePublicHooks } from "./hooks";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    acttype: "",
    datatype: "",
    duation: "",
    material: "其他",
    position: "",
    rank: "0",
    sum: "None",
    type: "",
    unit: "无",
    higherDeptOptions: [],
    alarms: []
  })
});

const options = [
  {
    value: 0,
    label: "低级警报"
  },
  {
    value: 1,
    label: "高级警报"
  }
];
const ruleFormRef = ref();
// const { switchStyle } = usePublicHooks();
const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>

<template>
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
  >
    <el-row :gutter="30">
      <re-col v-for="item in newFormInline.alarms" :key="item.alarmid">
        <el-checkbox v-model="item.alarmstaus" label="启用状态" size="large" />
        <el-form-item label="报警级别">
          <el-select v-model="item.alarmrank" placeholder="Select">
            <el-option
              v-for="item1 in options"
              :key="item1.value"
              :label="item1.label"
              :value="item1.value"
            />
          </el-select>
          <!-- <el-cascader v-model="item.alarmrank" :options="options" filterable>
            <template #default="{ node, data }">
              <span>{{ data.name }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader> -->
        </el-form-item>
        <el-form-item label="启动条件">
          <el-input
            v-model="item.alarmcondition"
            clearable
            placeholder="请输入启用条件"
          />
        </el-form-item>
        <el-form-item label="报警阈值">
          <el-input
            v-model="item.alarmthreshold"
            clearable
            placeholder="请输入报警阈值"
          />
        </el-form-item>
      </re-col>
    </el-row>
  </el-form>
</template>
