<template>
  <div class="module-four">
    <h3>所有皇帝-关联开国皇帝</h3>
    <lg-table
      :height="800"
      :columns="columns"
      :list="list"
      :filters="filters"
      :total="total"
      :loading="loading"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    >
    </lg-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { columns } from "./constants";
// 数据处理方法
export default {
  data() {
    return {
      columns,
      loading: false
    };
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list", "total", "filters", "item"])
  },
  methods: {
    getList() {
      this.loading = true;
      this.$store.dispatch("moduleFourStore/find").finally(() => {
        this.loading = false;
      });
    },
    handleCurrentChange(page) {
      this.filters.page = page;
      this.getList();
    },
    handleSizeChange(size) {
      this.filters.page = 1;
      this.filters.pageSize = size;
      this.getList();
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="sass" scoped></style>
