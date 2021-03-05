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
    prop: "name",
    label: "朝代"
  },
  {
    prop: "time",
    label: "经历时间"
  },
  {
    prop: "emperor",
    label: "皇帝"
  },
  {
    prop: "city",
    label: "城市"
  },
  {
    columnType: "slot",
    slotName: "operation",
    label: "操作"
  }
];

export const searchList = [
  {
    type: "input",
    label: "朝代",
    valueKey: "name"
  },
  {
    type: "input",
    label: "皇帝",
    valueKey: "emperor"
  },
  {
    type: "input",
    label: "城市",
    valueKey: "city"
  }
];
