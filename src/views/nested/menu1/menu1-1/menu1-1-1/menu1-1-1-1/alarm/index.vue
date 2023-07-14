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
</template>
