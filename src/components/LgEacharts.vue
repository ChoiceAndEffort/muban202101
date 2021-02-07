<template>
  <div class="lg-chart">
    <div class="chart" ref="myCharts"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// let myChart;
export default {
  name: "LgEacharts",
  props: {
    options: {
      type: Object,
      required: false,
      dafault: () => {}
    }
  },
  components: {},
  data() {
    return {
      myChart: undefined
    };
  },
  computed: {
    // dealOptions() {
    //   return {};
    // }
  },
  methods: {
    initEcharts() {
      //   if (myChart != null && myChart != "" && myChart != undefined) {
      //     myChart.dispose();
      //   }
      this.myChart = echarts.init(this.$refs["myCharts"]);
      this.myChart.setOption(this.options);
    }
  },
  created() {},
  mounted() {
    this.initEcharts();
    window.addEventListener("resize", () => {
      this.myChart.resize();
    });
  }
};
</script>
<style lang="scss" scoped>
.tab1 {
  .chart {
    width: 100%;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }
}
</style>
