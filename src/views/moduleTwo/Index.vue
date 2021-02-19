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
import BtnOperate from "@/utils/btnOperate";
export default {
  data() {
    return {
      styleObj: {
        "--image": `url(
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2875045373,3273502502&fm=26&gp=0.jpg"
        )`,
        "--opacity": 0.8
      }
    };
  },
  components: {
    BtnOperate
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  methods: {
    changeColor() {
      this.styleObj[
        "--image"
      ] = `url( "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2888327627,1456753175&fm=26&gp=0.jpg")`;
      this.styleObj["--opacity"] = 0.3;
    }
  }
};
</script>
<style lang="scss" scoped>
.module-two {
  .show-background-image {
    width: 100%;
    height: 800px;
    position: relative;
    border-radius: 50px;
  }
  .show-background-image::after {
    content: "";
    position: absolute;
    background: var(--image);
    opacity: var(--opacity);
    background-repeat: no-repeat;
    background-size: 100% -50%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
