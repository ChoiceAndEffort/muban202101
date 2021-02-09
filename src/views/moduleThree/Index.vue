<template>
  <div class="module-three">
    <div style="display:flex; padding:10px;">
      <btn-operate @click="handlerAdd" btnName="新增数据库数据" />
      <btn-operate @click="handlerOpreate" btnName="更改list" />
      <btn-operate @click="handlerOReset" btnName="重置list" />
      <btn-operate @click="handlerRouterPush" btnName="跳到子模块" />
    </div>

    <ul>
      <li v-for="item in list" :key="item.age">
        <span class="item-li ">{{ item.name }}</span>
        <span class="item-li">{{ item.time }}年</span>
        <span class="item-li">{{ item.famous }}皇帝</span>
        <span class="item-li">{{ item.logo }}</span>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BtnOperate from "@/utils/btnOperate";
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
  components: {
    BtnOperate
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
    },
    handlerAdd() {
      this.$store.dispatch("moduleThreeStore/add");
    }
  }
};
</script>
<style lang="scss" scoped>
.module-three {
  li {
    margin-bottom: 10px;
  }
  .item-li {
    margin-left: 10px;
    min-width: 80px;
    display: inline-block;
  }
}
</style>
