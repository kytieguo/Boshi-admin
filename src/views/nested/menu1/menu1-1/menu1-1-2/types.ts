interface FormItemProps {
  higherDeptOptions: Record<string, unknown>[];
  position: string;
  acttype: string;
  datatype: string;
  duation: string;
  material: string;
  rank: string;
  sum: string;
  type: string;
  unit: string;
  alarms: alarm[];
}
interface alarm {
  alarmid: number;
  alarmstaus: boolean;
  alarmrank: number;
  alarmcondition: string;
  alarmthreshold: number;
}
interface FormProps {
  formInline: FormItemProps;
}

export type { FormItemProps, FormProps };
