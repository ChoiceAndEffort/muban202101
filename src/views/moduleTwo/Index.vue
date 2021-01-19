<template>
  <div class="module-two">
    <btn-operate />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BtnOperate from "./btnOperate"; //方法一
export default {
  data() {
    return {};
  },
  components: {
    BtnOperate //方法一导入
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  }
};
</script>
<style lang="scss" scoped>
.module-two {
  .btn {
    width: 100px;
    color: blue;
    padding: 10px 20px;
    border: 1px solid #ccc;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
