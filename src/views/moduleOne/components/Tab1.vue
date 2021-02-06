<template>
  <div class="tab1">
    <lg-eacharts :options="options" class="echarts-bar" />
    <lg-eacharts :options="areaOptions" class="echarts-bie" />
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
      //柱状图
      options: {
        title: {
          text: "ECharts", //图标标题
          left: "center" //图标标题展示方式
        },
        tooltip: {
          trigger: "item", //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
          showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          data: ["执政能力", "武力值", "人际关系处理", "忽悠能力"],
          axisLabel: {
            textStyle: {
              color: "blue" //设置x轴字体颜色
            }
          }
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: 30, //柱状图宽度
            data: [90, 70, 95, 88]
          }
        ]
      },
      //饼图
      areaOptions: {
        title: {
          text: "疆域面积扩展图",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "left"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "公元662" },
              { value: 735, name: "公元664" },
              { value: 580, name: "公元671" },
              { value: 484, name: "公元678" },
              { value: 300, name: "公元688" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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
  display: flex;
  .echarts-bar,
  .echarts-bie {
    width: 50%;
    margin-right: 10px;
  }
}
</style>
