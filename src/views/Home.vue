<template>
  <div class="home">
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      <!-- <van-tabs v-model="active" @click="handlePushRouter(active)">
        <van-tab
          v-for="(item, index) in constants.tabList"
          :key="index"
          :title="item.label"
          :name="item.name"
        ></van-tab>
      </van-tabs> -->
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
    handlePushRouter(v) {
      this.$router.push({ name: v });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  position: relative;

  .content {
    flex: 1;
  }
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 40px;
  }
}
</style>
