<script setup lang="ts">
import { ref } from "vue";
import ReCol from "@/components/ReCol";
// import { usePublicHooks } from "./hooks";



const ruleFormRef = ref();
// const { switchStyle } = usePublicHooks();
//const newFormInline = ref(props.formInline);

function getRef() {
  return ruleFormRef.value;
}

defineExpose({ getRef });
</script>
<template>

    <div>
      <el-steps :space="300" :active="0" finish-status="success">
        <el-step title="未执行"></el-step>
        <el-step title="执行中"></el-step>
        <el-step title="已完成"></el-step>
      </el-steps>
    </div>
    <el-divider></el-divider>
    <div>
      <el-descriptions>
          <el-descriptions-item label="建议执行时间:"></el-descriptions-item>
          <br>
          <el-descriptions-item label="执行人:"></el-descriptions-item>
          <br>
          <el-descriptions-item label="作业文档:"></el-descriptions-item>

      </el-descriptions>
    </div>
    <el-divider></el-divider>
    <div>
      <p>工单描述</p>
         <el-input
           type="textarea"
           :rows="4"
           placeholder=""
           v-model="textarea">
         </el-input>

    </div>
    <el-divider></el-divider>
    <div>
      <el-descriptions>
          <el-descriptions-item label="工单创建人:"></el-descriptions-item>
          <br>
          <el-descriptions-item label="工单类型:"></el-descriptions-item>
          <br>
          <el-descriptions-item label="工单ID:"></el-descriptions-item>

      </el-descriptions>
    </div>
    <div>
      <el-button type="info" style="margin-left: 220px;margin-top: 20px;">开始执行</el-button>
    </div>

</template>
