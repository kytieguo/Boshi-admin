<script setup lang="ts">
import { ref } from "vue";
import { list } from "./list";
const selected = ref(0);
function tabClick({ index }) {
  selected.value = index;
}
</script>

<template>
  <div class="dark:text-white">
    <!-- <p>{{ t("menus.hsmenu1-1") }}</p> -->
    <el-tabs @tab-click="tabClick">
      <template v-for="(item, index) of list" :key="item.key">
        <el-tab-pane :lazy="true">
          <template #label>
            <span>{{ item.title }}</span>
          </template>
          <component v-if="selected == index" :is="item.component" />
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="��ǰ�����б�" name="first">��ǰ�����б�</el-tab-pane>
    <el-tab-pane label="��ʷ�����б�" name="second">��ʷ�����б�</el-tab-pane>
    <el-tab-pane label="����Ƶ��" name="third">����Ƶ��</el-tab-pane>
  </el-tabs>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="����" width="180" />
    <el-table-column prop="name" label="����" width="180" />
    <el-table-column prop="address" label="��ַ" />
  </el-table>
</template>

<script setup lang="ts"></script>
