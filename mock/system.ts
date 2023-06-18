import { MockMethod } from "vite-plugin-mock";

export default [
  // 用户
  {
    url: "/user",
    method: "post",
    response: () => {
      return {
        success: true,
        data: {
          list: [
            {
              username: "admin",
              nickname: "admin",
              remark: "管理员",
              deptId: 103,
              postIds: [1],
              mobile: "15888888888",
              sex: 0,
              id: 1,
              status: 0,
              createTime: 1605456000000,
              dept: {
                id: 103,
                name: "研发部门"
              }
            },
            {
              username: "pure",
              nickname: "pure",
              remark: "不要吓我",
              deptId: 104,
              postIds: [1],
              mobile: "15888888888",
              sex: 0,
              id: 100,
              status: 1,
              createTime: 1605456000000,
              dept: {
                id: 104,
                name: "市场部门"
              }
            },
            {
              username: "小姐姐",
              nickname: "girl",
              remark: null,
              deptId: 106,
              postIds: null,
              mobile: "15888888888",
              sex: 1,
              id: 103,
              status: 1,
              createTime: 1605456000000,
              dept: {
                id: 106,
                name: "财务部门"
              }
            },
            {
              username: "小哥哥",
              nickname: "boy",
              remark: null,
              deptId: 107,
              postIds: [],
              mobile: "15888888888",
              sex: 0,
              id: 104,
              status: 0,
              createTime: 1605456000000,
              dept: {
                id: 107,
                name: "运维部门"
              }
            }
          ],
          total: 4
        }
      };
    }
  },
  // 角色
  {
    url: "/role",
    method: "post",
    response: ({ body }) => {
      let list = [
        {
          createTime: 1605456000000, // 时间戳（毫秒ms）
          updateTime: 1684512000000,
          creator: "admin",
          id: 1,
          name: "超级管理员",
          code: "admin",
          status: 1, // 状态 1 启用 0 停用
          remark: "超级管理员拥有最高权限"
        },
        {
          createTime: 1605456000000,
          updateTime: 1684512000000,
          creator: "admin",
          id: 2,
          name: "普通角色",
          code: "common",
          status: 1,
          remark: "普通角色拥有部分权限"
        }
      ];
      list = list.filter(item => item.name.includes(body?.name));
      list = list.filter(item =>
        String(item.status).includes(String(body?.status))
      );
      if (body.code) list = list.filter(item => item.code === body.code);
      return {
        success: true,
        data: {
          list,
          total: list.length, // 总条目数
          pageSize: 10, // 每页显示条目个数
          currentPage: 1 // 当前页数
        }
      };
    }
  },
  // 部门
  {
    url: "/dept",
    method: "post",
    response: () => {
      return {
        success: true,
        data: [
          {
            position: "编组动作1超时",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "21",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无",
            alarms: [
              {
                alarmid: 0,
                alarmstaus: true,
                alarmrank: 0,
                alarmcondition: "等于",
                alarmthreshold: 7
              },
              {
                alarmid: 1,
                alarmstaus: false,
                alarmrank: 1,
                alarmcondition: "等于",
                alarmthreshold: 5
              }
            ]
          },
          {
            position: "编组动作2超时",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "21",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "编组变频失败",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "15",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "本月运行汇报",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "10",
            datatype: "统计数据",
            acttype: "记账",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "本月产量汇报",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "11",
            datatype: "统计数据",
            acttype: "记账",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "安全光电警报",
            type: "采集",
            action: "更改设置",
            duation: "15s",
            rank: "21",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "编组动作21超时",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "21",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无"
          },
          {
            position: "编组动作15超时",
            type: "采集",
            action: "更改设置",
            duation: "5s",
            rank: "21",
            datatype: "维护数据",
            acttype: "变位",
            material: "其他",
            sum: "None",
            unit: "无"
          }
        ]
      };
    }
  }
] as MockMethod[];
