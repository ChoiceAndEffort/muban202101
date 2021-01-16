<template>
  <div class="module-four"></div>
</template>
<script>
import { mapGetters } from "vuex";
import Vue from "vue";
// 数据处理方法
export default {
  data() {
    return {
      selected: "1",
      nowPlay: []
    };
  },
  computed: {
    ...mapGetters("moduleFourStore", ["list"])
  },
  created() {
    // 请求网络数据
    // this.$store.dispatch('takeOutStore/find', {})
    // 请求本地mock数据
    Vue.ajax({
      url: "../../mock/nowPlay.json",
      type: "get",
      dataType: "json"
    }).then(res => {
      this.nowPlay = res.data.films;
      console.log(res.data.films);
      console.log(this.nowPlay);
    });
  }
};
</script>
<style lang="sass" scoped></style>
