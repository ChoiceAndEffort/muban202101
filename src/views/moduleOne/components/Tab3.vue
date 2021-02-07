<template>
  <div class="tab3">
    <h2>我是tab3</h2>
    <!-- 播放语音 -->

    <el-input
      type="text"
      v-model="readValue"
      @blur="playVoice(readValue)"
      style="width:200px;"
      placeholder="请输入你要朗读的语音!"
    />
    <el-button @click="handleStop">停止播放语音</el-button>
  </div>
</template>

<script>
const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();

export default {
  name: "Tab3",
  components: {},
  data() {
    return {
      readValue: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    playVoice(readValue) {
      this.handleSpeak(readValue || "请输入你要朗读的语音"); // 传入需要播放的文字
    },
    // 语音播报的函数
    handleSpeak(text) {
      //   console.log(speechSynthesis.getVoices());
      msg.text = text; // 文字内容: 小朋友，你是否有很多问号
      msg.lang = "zh-CN"; // 使用的语言:中文
      msg.volume = 5; // 声音音量：1
      msg.rate = 1; // 语速：1
      msg.pitch = 5; // 音高：1
      synth.speak(msg); // 播放
    },
    // 语音停止
    handleStop(e) {
      msg.text = e;
      msg.lang = "zh-CN";
      synth.cancel(msg);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.tab3 {
}
</style>
