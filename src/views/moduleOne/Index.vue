<template>
  <div class="module-one">
    <h3>我是模块一</h3>
    {{ list }}
    <ul>
      <li v-for="item in list" :key="item.age">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("moduleOneStore", ["list"])
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleOneStore/find", {
        name: "888888888",
        age: 123
      });
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="scss" scoped>
.module-one {
  flex: 1;
}
</style>
