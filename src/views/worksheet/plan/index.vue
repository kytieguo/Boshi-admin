<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { list } from "./list";

defineOptions({
  name: "Menu1-1-1-1"
});

// const input = ref("");
const { t } = useI18n();
const selected = ref(0);

function tabClick({ index }) {
  selected.value = index;
}
</script>

<template>
  <div class="dark:text-white">
    <!--
    <p>{{ t("menus.hsmenu1-1") }}</p>
    -->
    <el-tabs @tab-click="tabClick">
      <template v-for="(item, index) of list" :key="item.key">
        <el-tab-pane :lazy="true">
          <template #label>
            <el-tooltip
              :content="`（第 ${index + 1} 个示例）${item.content}`"
              placement="top-end"
            >
              <span>{{ item.title }}</span>
            </el-tooltip>
          </template>
          <component v-if="selected == index" :is="item.component" />
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>
