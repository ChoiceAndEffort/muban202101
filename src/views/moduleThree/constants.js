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
  famous: [
    {
      required: true,
      message: "请输入开国皇帝",
      trigger: ["blur", "change"]
    }
  ],
  logo: [
    {
      required: true,
      message: "请输入朝代口号",
      trigger: ["blur", "change"]
    }
  ]
};
