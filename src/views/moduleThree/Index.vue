<template>
  <div class="module-three"></div>
</template>
<script>
import Vue from "vue";
import { mapGetters } from "vuex";
const handle = {
  // 事件戳转换成时间
  handleConversionTime(obj) {
    obj.updateTime = new Date(obj.updateTime);
    return obj;
  },
  // 状态处理
  handleStatusTransform(obj) {
    let statusMap = {
      "0": "全部",
      "1": "待审核",
      "2": "已审核"
    };
    obj.status = statusMap[obj.status];
    return obj;
  },
  // 数据处理-保留小数
  handleCashReserve(obj) {
    obj.cash = (obj.cash / 100).toFixed(2);
    return obj;
  },
  // 数据为空的处理
  handleSetDefault(obj) {
    for (let key in obj) {
      if (obj[key] === "" || obj[key] === null || obj[key] === undefined) {
        obj[key] = "--";
      }
    }
    return obj;
  },
  setDataTransformation(arr, fns) {
    let _arr = JSON.parse(JSON.stringify(arr));
    let _fns = fns;
    _arr.forEach((item, index) => {
      _fns.forEach(elemenet => {
        _arr[index] = this[elemenet](_arr[index]);
      });
    });
    return _arr;
  }
};
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  created() {
    Vue.ajax({
      url: "../../mock/order/list.json",
      type: "get",
      dataType: "json"
    }).then(res => {
      let arr = res.data.list;
      arr = handle.setDataTransformation(arr, [
        "handleConversionTime",
        "handleStatusTransform",
        "handleCashReserve",
        "handleSetDefault"
      ]);
      console.log(arr);
    });
  }
};
</script>
<style lang="sass" scoped></style>
