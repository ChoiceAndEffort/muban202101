<template>
  <div class="module-one-one">
    <h3 style="color:red;">我是模块3-1</h3>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("moduleOneStore", ["list", "item"])
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped></style>
