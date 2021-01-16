<template>
  <div class="module-one">
    <h3>我是模块一</h3>
    <ul>
      <li v-for="item in list" :key="item.age">
        {{ item.name }}
        <!-- <input type="text" v-model.trim="item.name" /> -->
      </li>
    </ul>
    <div style="display:flex;">
      <div class="oprate-btn" @click="handlerOpreate">更改list</div>
      <div class="oprate-btn" @click="handlerOReset">重置list</div>
    </div>
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
    ...mapGetters("moduleOneStore", ["list", "item"])
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleOneStore/find", {
        name: "888888888",
        age: 123
      });
    },
    handlerOpreate() {
      this.$store.commit("moduleOneStore/LIST", this.newList);
    },
    handlerOReset() {
      this.getList();
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.module-one {
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
