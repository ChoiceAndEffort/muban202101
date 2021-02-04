<template>
  <div class="module-one">
    <div class="content-box">
      <h3>欢迎来到我的世界</h3>
      <ul>
        <li
          v-for="(item, index) in [...scrollList, ...scrollList]"
          :key="index"
        >
          <img :src="item.img" alt="" srcset="" class="image" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import a from "@/assets/images/a.jpg";
import b from "@/assets/images/b.jpg";
import c from "@/assets/images/c.gif";
import d from "@/assets/images/d.jpg";
import e from "@/assets/images/e.jpg";
import f from "@/assets/images/f.jpg";
import g from "@/assets/images/g.gif";

export default {
  data() {
    return {
      scrollList: [
        {
          img: a,
          name: "我是A"
        },
        {
          img: b,
          name: "我是B"
        },
        {
          img: c,
          name: "我是C"
        },
        {
          img: d,
          name: "我是D"
        },
        {
          img: e,
          name: "我是E"
        },
        {
          img: f,
          name: "我是F"
        },
        {
          img: g,
          name: "我是G"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("moduleOneStore", ["list", "item"])
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
.module-one {
  .content-box {
    width: 100%;
    overflow: hidden;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  h3 {
    text-align: center;
    line-height: 60px;
    font-size: 30px;
    background: url("../../assets/images/top.png");
    background-repeat: no-repeat;
    // background-size: 100% 100%;
    background-size: cover;
  }
  ul {
    position: relative;
    top: 0px;
    left: 0px;
    display: flex;
    animation: mymove 10s infinite linear;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .image {
        width: 300px;
        height: 200px;
        border-radius: 10px;
        border: 1px solid #ccc;
      }
    }
  }
  @-webkit-keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: -2100px;
    }
  }
}
</style>
