<template>
  <div class="module-two">
    <btn-operate
      @click="changeColor"
      btnName="改变背景图"
      style="margin-bottom:20px;"
    />
    <div class="show-background-image" :style="styleObj">
      我的小猪猪
    </div>
  </div>
</template>
<script>
//css中获取js中的变量动态修改样式
import { mapGetters } from "vuex";
import BtnOperate from "./btnOperate"; //方法一
export default {
  data() {
    return {
      styleObj: {
        "--image": `url(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2482227849,285348882&fm=15&gp=0.jpg"
        )`,
        "--opacity": 0.8
      }
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
      this.styleObj[
        "--image"
      ] = `url( "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2903650673,4221977739&fm=26&gp=0.jpg")`;
      this.styleObj["--opacity"] = 0.3;
    }
  }
};
</script>
<style lang="scss" scoped>
.module-two {
  .show-background-image {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .show-background-image::after {
    content: "";
    position: absolute;
    background: var(--image);
    opacity: var(--opacity);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .btn {
    width: 120px;
    color: blue;
    padding: 10px 20px;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
