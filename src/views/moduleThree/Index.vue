<template>
  <div class="module-three">
    <div style="display:flex; padding:10px;">
      <btn-operate @click="handlerAdd" btnName="新增数据库数据" />
      <btn-operate @click="handlerOpreate" btnName="更改list" />
      <btn-operate @click="handlerOReset" btnName="重置list" />
      <btn-operate @click="handlerRouterPush" btnName="跳到子模块" />
    </div>
    <lg-table
      :height="800"
      :columns="columns"
      :list="list"
      :serialNum="true"
      :filters="filters"
      :total="total"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    >
      <template v-slot:operation="scope">
        <el-button @click="handleEditClick(scope.row)" type="text" size="small"
          >编辑</el-button
        >
        <el-button
          @click="handleDeleteClick(scope.row)"
          type="text"
          size="small"
          >删除</el-button
        >
      </template>
    </lg-table>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogFormVisible"
      v-if="dialogFormVisible"
      :close-on-click-modal="false"
    >
      <publice
        @update="handlerChangeVisible"
        :fromPage="fromPage"
        :init-data="initData"
      />
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BtnOperate from "@/utils/btnOperate";
import Publice from "./components/Publice";
import { columns } from "./constants";
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
      columns,
      newList: JSON.parse(JSON.stringify(newList)),
      dialogFormVisible: false,
      dialogTitle: "新增",
      filters: {
        page: 1,
        pageSize: 20
      },
      fromPage: 1, //1-新增,2-修改
      initData: undefined //修改的初始数据
    };
  },
  components: {
    BtnOperate,
    Publice
  },
  computed: {
    ...mapGetters("moduleThreeStore", ["list", "total"])
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$store.dispatch("moduleThreeStore/find", this.filters);
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
      this.dialogFormVisible = true;
      this.dialogTitle = "新增";
      this.fromPage = 1;
    },
    handlerChangeVisible(v) {
      this.dialogFormVisible = v;
    },
    handleCurrentChange(page) {
      this.filters.pageNum = page;
    },
    handleSizeChange(size) {
      this.filters.pageSize = size;
      this.filters.pageNum = 1;
    },
    handleEditClick(row) {
      this.dialogFormVisible = true;
      this.dialogTitle = "编辑";
      this.fromPage = 2;
      this.initData = row;
    },
    handleDeleteClick({ id }) {
      this.$store.dispatch("moduleThreeStore/delete", { id });
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
