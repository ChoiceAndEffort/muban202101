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
      <template v-slot:operation="scope">
        <el-button
          @click="handleDetailClick(scope.row)"
          type="text"
          size="small"
          >朝代开国皇帝</el-button
        >
      </template>
    </lg-table>
    <el-dialog
      title="皇帝-关联朝代和开国皇帝"
      :visible.sync="dialogFormVisible"
      v-if="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <div class="detail">
        <ul>
          <li>
            <dl>
              <dt><span>姓名:</span>{{ detail.name }}</dt>
              <dd><span>称号:</span>{{ detail.emperor }}</dd>
              <dd><span>时间:</span>{{ detail.city }}</dd>
            </dl>
          </li>
        </ul>
      </div>
    </el-dialog>
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
      loading: false,
      dialogFormVisible: false,
      detail: undefined
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
    },
    handleDetailClick(row) {
      this.dialogFormVisible = true;
      this.detail = row.emperors;
    }
  },
  created() {
    this.getList();
  }
};
</script>
<style lang="sass" scoped></style>
