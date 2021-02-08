<template>
  <div class="module-three">
    <ul>
      <li v-for="item in list" :key="item.age">
        <span>{{ item.name }}</span>
        <span>{{ item.time }}年</span>
        <span>{{ item.famous }}皇帝</span>
        <span>{{ item.logo }}</span>
      </li>
    </ul>
    <div style="display:flex;">
      <div class="oprate-btn" @click="handlerOpreate">更改list</div>
      <div class="oprate-btn" @click="handlerOReset">重置list</div>
      <div class="oprate-btn" @click="handlerRouterPush">跳到子模块</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
const newList = [
  {
    name: "张安",
    age: 16
  },
  {
    name: "丽岛",
    age: 18
  }
];
export default {
  data() {
    return {
      newList: JSON.parse(JSON.stringify(newList))
    };
  },
  computed: {
    ...mapGetters("moduleThreeStore", ["list"])
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleThreeStore/find", {
        name: "888888888",
        age: 123,
        fromPage: "moduleThree"
      });
    },
    handlerOpreate() {
      this.$store.commit("moduleThreeStore/LIST", this.newList);
    },
    handlerOReset() {
      this.getList();
    },
    handlerRouterPush() {
      this.$router.push({ name: "three-first" });
    }
  }
};
</script>
<style lang="scss" scoped>
.module-three {
  .oprate-btn {
    width: 100px;
    padding: 7px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    margin-right: 100px;
  }
}
</style>
