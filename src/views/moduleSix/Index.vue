<template>
  <div class="module-six">
    <div class="mobile">
      <div class="main"></div>
      <transition
        appear
        @before-appear="beforeEnter"
        @after-appear="afterEnter"
        v-if="showFlySpu"
      >
        <div class="fly_spuImg slide-fade">
          <img :src="qiu" alt />
        </div>
      </transition>
      <div class="footer">
        <el-button @click="handleAddCart"> 加入购物车</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { columns } from "./constants";
import qiu from "@/assets/images/qiu.png";
export default {
  data() {
    return {
      columns,
      loading: false,
      dialogFormVisible: false,
      detail: undefined,
      showFlySpu: true,
      qiu
    };
  },
  computed: {
    ...mapGetters("moduleSixStore", ["list", "total", "filters", "item"])
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleSixStore/find").finally(() => {});
    },
    handleAddCart() {
      this.showFlySpu = true;
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    afterEnter(el) {
      const offsetH =
        document.documentElement.offsetHeight || document.body.offsetHeight;
      const offsetW =
        document.documentElement.offsetWidth || document.body.offsetWidth;

      // 设置小球移动的位移
      setTimeout(() => {
        el.style.transform = `translate3d(${offsetW / 2 - 20}px,-${offsetH / 2 -
          20}px,0)`;
        // 增加贝塞尔曲线
        el.style.transition =
          "transform 0.8s cubic-bezier(0.3, -0.25, 0.7, -0.15)";
        el.style.transition = "transform 0.8s linear";
        this.showFlySpu = false;
        // 设置透明度
        el.style.opacity = 1;
      }, 500);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.module-six {
  height: 100%;
  position: relative;
  .mobile {
    position: relative;
    width: 375px;
    border: 1px solid #ccc;
    border-radius: 10px;
    height: 100%;
    .fly_spuImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: fixed;
      top: 83%;
      left: 20%;
      z-index: 9999;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 50%-20;
  }
}
</style>
