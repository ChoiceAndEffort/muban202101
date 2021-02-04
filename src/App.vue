<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    createCanvas(settings = {}) {
      const {
        SetWidth = 400,
        SetHeight = 200,
        SetRotate = 15,
        SetTextAlign = "right",
        SetTextBaseline = "middle",
        setFont = "20px microsoft yahei",
        setFillStyle = "rgba(184, 184, 184, 0.2)"
      } = settings;
      let canvas = document.createElement("canvas");
      // 设置canvas画布大小
      canvas.width = SetWidth;
      canvas.height = SetHeight;
      let canvas2D = canvas.getContext("2d");
      //设置文本内容的当前对齐方式
      canvas2D.textAlign = SetTextAlign;
      //设置在绘制文本时使用的当前文本基线
      canvas2D.textBaseline = SetTextBaseline;
      //旋转角度
      canvas2D.rotate(-SetRotate * (Math.PI / 180));
      //设置字体
      canvas2D.font = setFont;
      //设置填充绘画的颜色、渐变或者模式
      canvas2D.fillStyle = setFillStyle;
      //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
      canvas2D.fillText("欢迎来到雷公的博客", SetWidth / 2, SetHeight / 2);
      let base64Url = canvas.toDataURL();
      const DIV = document.createElement("div");
      //top:设置水印开始位置

      DIV.setAttribute(
        "style",
        `
          position:absolute;
          top:0px;
          left:150px;
          width:100%;
          height:100%;
          z-index:1000;
          pointer-events:none;
          background-repeat:repeat;
          background-image:url('${base64Url}')`
      );
      let boday = document.body;
      boday.style.position = "relative";
      boday.insertBefore(DIV, boday.firstChild);
    }
  },

  mounted() {
    this.createCanvas();
  }
};
</script>
<style lang="scss" scope></style>
