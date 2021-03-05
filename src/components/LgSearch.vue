<template>
  <div class="ws-search">
    <ul class="search-area">
      <li v-for="(item, index) in searchList" :key="index">
        <template v-if="item.type === 'input'">
          <label :style="{ minWidth: item.width || '19%' }">{{
            item.label
          }}</label>
          <el-input
            v-model.trim="filters[item.valueKey.trim()]"
            :placeholder="`请输入${item.label}`"
            clearable
          ></el-input>
        </template>
      </li>

      <slot></slot>

      <li>
        <el-button
          class="filter-item"
          type="primary"
          size="medium"
          icon="el-icon-search"
          @click="onSearch"
          >搜索</el-button
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WsSearch",
  props: {
    searchList: {
      type: Array,
      require: false,
      default: () => []
    },

    filters: {
      type: Object,
      require: true,
      default: () => {}
    },
    onSearch: {
      type: Function,
      require: true,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.ws-search {
  .search-area {
    display: flex;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      width: 23%;
      margin: 0 30px 20px 0;
      label {
        min-width: 19%;
        color: #5e5e5c;
        font-size: 14px;
      }
      .filter-item {
        margin-right: 15px;
      }
    }
  }
}
</style>
