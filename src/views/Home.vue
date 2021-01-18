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
import router from "@/router";
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
      handler: function(val, oldVal) {
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
.home {
  display: flex;
  background: #eeeeee;
  height: 100vh;
  .aside {
    width: 150px;
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
    flex: 1;
    padding: 20px;
  }
}
</style>
