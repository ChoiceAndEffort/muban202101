<template>
  <div class="home">
    <ul class="aside">
      <li
        v-for="item in constants.tabList"
        :key="item.name"
        @click="handlePushRouter(item.name)"
        :class="{ active: activeName === item.name }"
      >
        {{ item.label }}
      </li>
    </ul>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import * as constants from "./constants.js";
// import router from "@/router";
export default {
  name: "home",
  data() {
    return {
      constants,
      activeName: undefined
    };
  },
  watch: {
    $route: {
      handler: function(val) {
        // console.log(val, oldVal, 1111111);
        this.activeName = val.name;
      },
      // 深度观察监听
      deep: true,
      immediate: true
    }
  },
  methods: {
    handlePushRouter(name) {
      this.$router.push({ name });
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
//定义宽度变量
$width: 150px;
.home {
  display: flex;
  background: #eeeeee;
  height: 100vh;
  .aside {
    min-width: $width;
    padding: 20px 0px 0 0;
    border: 1px solid #ccc;
    cursor: pointer;
    li {
      line-height: 50px;
      border-bottom: 1px solid #ccc;
      text-align: center;
    }
    li.active {
      color: blue;
      pointer-events: none; //高亮了组织点击
    }
  }
  .content {
    // CSS3中新增的一个函数，calculate（计算）的缩写。用于动态计算宽/高
    // width: calc(100% - $width);
    width: calc(100% - 150px);
    padding: 20px;
    min-width: 1300px;
  }
}
</style>
