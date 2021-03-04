export const rules = {
  name: [
    { required: true, message: "请输入朝代名字", trigger: ["blur", "change"] }
  ],
  time: [
    {
      required: true,
      message: "请输入朝代存在时间",
      trigger: ["blur", "change"]
    }
  ],
  emperor: [
    {
      required: true,
      message: "请输入开国皇帝",
      trigger: ["blur", "change"]
    }
  ],
  city: [
    {
      required: true,
      message: "请输入朝代位置",
      trigger: ["blur", "change"]
    }
  ]
};

export const columns = [
  {
    prop: "dynastyId",
    label: "朝代id"
  },
  {
    prop: "name",
    label: "皇帝名字"
  },
  {
    prop: "posthumousTitle",
    label: "谥号"
  },
  {
    prop: "startTime",
    label: "起始时间"
  },
  {
    prop: "endTime",
    label: "终止时间"
  },
  {
    columnType: "slot",
    slotName: "operation",
    label: "操作"
  }
];
