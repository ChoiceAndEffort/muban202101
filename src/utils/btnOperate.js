//利用jsx语法写组件
export default {
  name: "btn-operate",
  props: {
    btnName: {
      type: String,
      required: false,
      default: () => "新增"
    }
  },
  render() {
    return (
      <div onClick={this.handlerAddClick} class="pub-btn">
        {this.btnName}
      </div>
    );
  },
  data() {
    return {};
  },
  methods: {
    handlerAddClick() {
      //   console.log("增加");
      this.$emit("click");
    }
  }
};
