export function useColumns() {
  const dataList = [
    {
      alarmcode: "1XXXXX",
      alarmname: "安全光电故障",
      alarmfre: "xx"
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
      label: "报警频次",
      prop: "alarmfre"
    }
  ];
  return {
    columns,
    dataList
  };
}
