<template>
  <div class="tab1">
    <lg-eacharts :options="options" />
  </div>
</template>

<script>
import LgEacharts from "@/components/LgEacharts";
export default {
  name: "Tab1",

  components: {
    LgEacharts
  },
  data() {
    return {
      options: {
        title: { text: "ECharts 入门示例" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.tab1 {
}
</style>
