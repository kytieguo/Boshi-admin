export function useColumns() {
  const dataList = [
    {
      alarmcode: "1XXXXX",
      alarmname: "安全光电故障",
      alarmtime: "xx：xx：xx"
    },
    {
      alarmcode: "1XXX",
      alarmname: "安全光电故障",
      alarmtime: "xx：xx：xx"
    }
  ];
  const columns: TableColumnList = [
    {
      label: "报警代码",
      prop: "alarmcode"
    },
    {
      label: "报警名称",
      prop: "alarmname"
    },
    {
      label: "发生时间",
      prop: "alarmtime"
    }
  ];
  return {
    columns,
    dataList
  };
}
