<template>
  <div class="home">
    <ul class="aside">
      <li
        v-for="item in constants.tabList"
        :key="item.name"
        @click="handlePushRouter(item.name)"
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
export default {
  name: "home",
  data() {
    return {
      constants,
      active: 0
    };
  },
  methods: {
    handlePushRouter(name) {
      this.$router.push({ name });
    }
  }
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
  }
  .content {
    flex: 1;
    padding: 20px;
  }
}
</style>
