<template>
  <div class="module-six">
    加入购物车
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { columns } from "./constants";

export default {
  data() {
    return {
      columns,
      loading: false,
      dialogFormVisible: false,
      detail: undefined
    };
  },
  computed: {
    ...mapGetters("moduleSixStore", ["list", "total", "filters", "item"])
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleSixStore/find").finally(() => {});
    },
    handleCurrentChange(page) {
      this.filters.page = page;
      this.getList();
    },
    handleSizeChange(size) {
      this.filters.page = 1;
      this.filters.pageSize = size;
      this.getList();
    },
    handleDetailClick(row) {
      this.dialogFormVisible = true;
      this.detail = row.emperors;
    }
  },
  created() {}
};
</script>
<style lang="sass" scoped></style>
