<template>
  <div class="module-two">
    <btn-operate @click="changeColor" btnName="改变css" />
    <p style="padding:10px;">
      <span :style="spanStyle" class="span1">hello world</span>
    </p>

    <p style="padding:10px;">
      <span :style="{ '--width': widthVar }" class="span2">hello earth</span>
    </p>
  </div>
</template>
<script>
//css中获取js中的变量动态修改样式
import { mapGetters } from "vuex";
import BtnOperate from "./btnOperate"; //方法一
export default {
  data() {
    return {
      spanStyle: {
        "--color": "red"
      },
      widthVar: "100px"
    };
  },
  components: {
    BtnOperate //方法一导入
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  methods: {
    changeColor() {
      this.spanStyle["--color"] = "blue";
      this.widthVar = "200px";
    }
  }
};
</script>
<style lang="scss" scoped>
.module-two {
  .span1 {
    color: var(--color);
  }
  .span2 {
    text-align: center;
    position: relative;
    width: var(--width);
  }
  .span2::after {
    content: "";
    display: block;
    position: absolute;
    left: 100%;
    width: var(--width);
    height: var(--width);
    border-radius: 50%;
    border: 2px solid black;
  }
  .btn {
    width: 100px;
    color: blue;
    padding: 10px 20px;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
