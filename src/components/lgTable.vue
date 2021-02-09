<template>
  <div class="lg-table">
    <el-table
      ref="dataTable"
      :data="list"
      :border="border"
      :max-height="height"
      style="width: 100%"
      fit
      v-loading="loading"
      highlight-current-row
      :height="height"
      @sort-change="sortChange"
      @selection-change="selectionChange"
      @select-all="selectAll"
      :span-method="spanMethod"
      :row-key="getRowKeys"
      :header-row-style="headerRowStyle"
      :cell-style="onCellStyle"
    >
      <!-- 多选 -->
      <el-table-column
        v-if="selection"
        type="selection"
        width="55"
        fixed
        :align="align"
        :reserve-selection="reserveSelection"
        :selectable="selectableDisabled"
      ></el-table-column>
      <!-- 序号 -->
      <el-table-column
        v-if="serialNum"
        :label="serialNumberLabel"
        type="index"
        :width="serialNumberWidth"
        fixed
        :align="align"
        :index="indexCusMethod ? indexCusMethod : indexMethods"
      ></el-table-column>
      <slot name="front" />
      <!-- 数据渲染 -->
      <template v-for="item in columns">
        <!-- 图片 -->
        <el-table-column
          v-if="item.columnType === 'img'"
          :prop="item.prop && item.prop.trim()"
          :label="item.label && item.label.trim()"
          :key="item.prop && item.prop.trim()"
          :width="item.width"
          :align="item.align || align"
          :fixed="item.fixed"
        >
          <template slot-scope="scope">
            <el-image
              :style="item.imgStyle || defaultImgStyle"
              :src="scope.row[item.prop && item.prop.trim()]"
            ></el-image>
          </template>
        </el-table-column>
        <!-- 插槽 -->
        <el-table-column
          v-else-if="item.columnType === 'slot'"
          :prop="item.prop && item.prop.trim()"
          :label="item.label && item.label.trim()"
          :key="item.prop && item.prop.trim()"
          :width="item.width"
          :align="item.align || align"
          :header-align="item.headAlign || align"
          :fixed="item.fixed"
          :render-header="
            item.showRenderHeader ? renderHeader : handlerRenderHeader
          "
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :row="scope.row" :idx="scope.$index" />
          </template>
        </el-table-column>
        <!-- 常规列渲染 -->
        <el-table-column
          v-else
          :label="item.label && item.label.trim()"
          :key="item.prop && item.prop.trim()"
          :width="item.width"
          :align="item.align || align"
          :fixed="item.fixed"
          :prop="item.prop && item.prop.trim()"
          :show-overflow-tooltip="item.showTips"
          :sortable="item.sortable"
          :sort-by="item.sortBy"
          :render-header="
            item.showRenderHeader ? renderHeader : handlerRenderHeader
          "
        >
          <template slot-scope="scope">
            <span v-if="item.formatter">
              {{
                item.formatter(
                  scope.row[item.prop && item.prop.trim()],
                  scope.row,
                  scope.column
                ) | transCode
              }}
            </span>
            <span v-else>{{
              scope.row[item.prop && item.prop.trim()] | transCode
            }}</span>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        v-if="pagination"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="filters.pageNum"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="filters.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  name: "lg-table",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    // 表格信息配置
    columns: {
      type: Array,
      default: () => []
    },
    // 表格数据
    list: {
      type: Array,
      default: () => []
    },
    align: {
      type: String,
      default: "center"
    },
    // 开启多选
    selection: {
      type: Boolean,
      default: false
    },
    // 勾选保存
    reserveSelection: {
      type: Boolean,
      default: false
    },
    // 禁用多选项
    selectableDisabled: {
      type: Function,
      default: () => {
        return true;
      }
    },
    // 显示序号
    serialNum: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    height: {
      type: Number,
      required: false
    },
    filters: {
      type: Object,
      default: () => {}
    },
    total: {
      default: 0
    },
    pagination: {
      //是否展示翻页
      type: Boolean,
      default: true
    },
    serialNumberLabel: {
      //序号的label
      type: String,
      default: "序号"
    },
    serialNumberWidth: {
      type: String,
      default: "55"
    },
    indexCusMethod: {
      //序号自定义对应的方法
      type: Function,
      required: false
    },
    spanMethod: {
      type: Function,
      required: false,
      default: () => {}
    },
    renderHeader: {
      //自定义渲染列表头部
      type: Function,
      required: false,
      default: () => {}
    },
    headerRowStyle: {
      //设置表头样式
      type: Function,
      required: false,
      default: () => {}
    },
    onCellStyle: {
      //设置列样式
      type: Function,
      required: false,
      default: () => {}
    }
  },
  filters: {
    transCode(val) {
      return !val && val !== 0 ? "/" : val;
    }
  },
  data() {
    return {
      // 图片列 默认宽高
      defaultImgStyle: {
        width: "60px",
        height: "60px"
      }
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    indexMethods(index) {
      return (this.filters.pageNum - 1) * this.filters.pageSize + index + 1;
    },
    getRowKeys(row) {
      return row.id;
    },
    sortChange(column, prop, order) {
      this.$emit("sort-change", column, prop, order);
    },
    selectionChange(val) {
      this.$emit("selection-change", val);
    },
    selectAll(val) {
      this.$emit("select-all", val);
    },
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
    handlerRenderHeader(h, { column, $index }) {
      return column.label;
    }
  }
};
</script>
<style lang="scss" scope>
.lg-table {
}
</style>
