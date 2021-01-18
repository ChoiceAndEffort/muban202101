<template>
  <div class="module-four"></div>
</template>
<script>
import { mapGetters } from "vuex";

// 数据处理方法
export default {
  data() {
    return {
      selected: "1",
      nowPlay: []
    };
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  created() {}
};
</script>
<style lang="sass" scoped></style>
