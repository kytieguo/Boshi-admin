<template>
    <div>
      <p>售后进度</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder=""
        v-model="textarea">
      </el-input>

    </div>
    <el-divider></el-divider>
    <div>
      <p>资产范围</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder=""
        v-model="textarea">
      </el-input>
    </div>
    <el-divider></el-divider>
    <div>
      <p>问题描述</p>

         <el-input
           type="textarea"
           :rows="2"
           placeholder=""
           v-model="textarea">
         </el-input>

    </div>
    <el-divider></el-divider>
    <div>
      <p>联系人</p>
      <el-descriptions>
          <el-descriptions-item label="姓名:"></el-descriptions-item>
          <el-descriptions-item label="联系电话:"></el-descriptions-item>
      </el-descriptions>
    </div>
    <el-divider></el-divider>
    <div>
      <p>备注</p>
         <el-input
           type="textarea"
           :rows="2"
           placeholder=""
           v-model="textarea">
         </el-input>
    </div>
    <div>
      <el-row>
        <el-button type="info" style="margin-left: 170px;margin-top: 20px;">创建工单</el-button>
        <el-button type="info" style="margin-left: 200px;margin-top: 20px;">撤销申请</el-button>
      </el-row>

    </div>
</template>
